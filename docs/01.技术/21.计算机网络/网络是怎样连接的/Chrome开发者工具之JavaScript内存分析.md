---
title:  Chrome开发者工具之JavaScript内存分析
date: 2024-03-05 04:23:46
permalink: /pages/642c37/
categories:
  - 技术
  - 计算机网络
  - 网络是怎样连接的
tags:
  - 
author: 
  name: aXing
  link: https://github.com/08163356
---

# Chrome开发者工具之JavaScript内存分析

**内存泄漏**是指计算机可用内存的逐渐减少。当程序持续无法释放其使用的临时内存时就会发生。JavaScript的web应用也会经常遇到在原生应用程序中出现的内存相关的问题，如**泄漏**和溢出，web应用也需要应对**垃圾回收停顿**。

尽管JavaScript使用垃圾回收进行自动内存管理，但 有效的(effective)内存管理依然很重要。在这篇文章中我们将探讨分析JavaScript
web应用中的内存问题。

## 你需要思考的问题

总体来说，当你觉得你遇到了内存泄漏问题时，你需要思考三个问题：

-   **我的页面是否占用了过多的内存?** - [Timeline内存查看工具(Timeline
    > memory
    > view)](https://github.com/CN-Chrome-DevTools/CN-Chrome-DevTools/blob/master/md/Performance-Profiling/javascript-memory-profiling.md#heading=h.3gfl4k8caz0k) 和 [Chrome任务管理(Chrome
    > task
<!-- more -->
    > manager)](https://github.com/CN-Chrome-DevTools/CN-Chrome-DevTools/blob/master/md/Performance-Profiling/javascript-memory-profiling.md#chrome-%E4%BB%BB%E5%8A%A1%E7%AE%A1%E7%90%86%E5%99%A8) 能帮助你确认你是否使用了过多的内存。Memory
    > view
    > 能跟踪页面渲染过程中DOM节点计数，documents文档计数和JS事件监听计数。作为一个经验法则：避免对不再需要用到的DOM元素的引用，移除不需要的事件监听并且在存储你可能不会用到的大块数据时要留意。

-   **我的页面有没有内存泄漏?** - 可以使用[堆分析仪(Heap
    
> Profiler)](https://github.com/CN-Chrome-DevTools/CN-Chrome-DevTools/blob/master/md/Performance-Profiling/javascript-memory-profiling.md#heading=h.g0yxr1o33gky)生成JS堆快照，通过分析内存图和比较快照之间的差异，来找出没有被垃圾回收清理掉的对象。

-   **我的页面垃圾强制回收有多频繁?** -
    > 如果你的页面垃圾回收很频繁，那说明你的页面可能内存使用分配太频繁了。[Timeline内存查看工具(Timeline
    > memory
    > view)](https://github.com/CN-Chrome-DevTools/CN-Chrome-DevTools/blob/master/md/Performance-Profiling/javascript-memory-profiling.md#heading=h.3gfl4k8caz0k) 能够帮助你发现感兴趣的停顿。

![Timeline1](f/media/image2.jpeg){width="5.763888888888889in"
height="4.026388888888889in"}

## 术语和基本概念

本小节介绍在**内存分析**时使用的常用术语，这些术语在为其它语言做内存分析的工具中也适用。这里的术语和概念用在了堆分析仪(Heap
Profiler)UI工具和相关的文档中。

### 对象大小(Object sizes)

把内存想象成一个包含基本类型(像数字和字符串)和对象(关联数组)的图表。它可能看起来像下面这幅一系列相关联的点组成的图。

![object](f/media/image3.jpeg){width="5.603472222222222in"
height="3.5305555555555554in"}

一个对象有两种使用内存的方法：

-   对象自身直接使用

-   隐含的保持对其它对象的引用，这种方式会阻止垃圾回收(简称GC)对那些对象的自动回收处理。

当你使用DevTools中的堆分析仪(Heap
Profiler，用来分析内存问题的工具，在DevTools的"Profile"标签下)时，你可能会惊喜的发现一些显示各种信息的栏目。其中有两项是：**直接占用内存(Shallow
Size)**和**占用总内存(Retained Size)**，那它们是什么意思呢？

![shallow](f/media/image4.jpeg){width="5.763888888888889in"
height="3.8506944444444446in"}

#### 直接占用内存(Shallow Size，不包括引用的对象占用的内存)

这个是对象本身占用的内存。

典型的JavaScript对象都会有保留内存用来描述这个对象和存储它的直接值。一般，只有数组和字符串会有明显的直接占用内存(Shallow
Size)。但字符串和数组常常会在渲染器内存中存储主要数据部分，仅仅在JavaScript对象栈中暴露一个很小的包装对象。

渲染器内存指你分析的页面在渲染的过程中所用到的所有内存：页面本身的内存 +
页面中的JS堆用到的内存 +
页面触发的相关工作进程(workers)中的JS堆用到的内存。然而，通过阻止垃圾自动回收别的对象，一个小对象都有可能间接占用大量的内存。

#### 占用总内存(Retained Size，包括引用的对象所占用的内存)

一个对象一但删除后它引用的依赖对象就不能被**GC根(GC
root)**引用到，它们所占用的内存就会被释放，一个对象占用总内存包括这些依赖对象所占用的内存。

**GC根**是由**控制器(handles)**组成的，这些控制器(不论是局部还是全局)是在建立由build-in函数(native
code)到V8引擎之外的JavaScript对象的引用时创建的。所有这些控制器都能够在堆快照的**GC
roots(GC根)** > **Handle scope** 和 **GC roots** >**Global
handlers**中找到。如果不深入了解浏览器的实现原理，在这篇文章中介绍这些控制器可能会让人不能理解。GC根和控制器你都不需要过多关心。

有很多内部的GC根对用户来说都是不重要的。从应用的角度来说有下面几种情况：

-   Window 全局对象
    
> (所有iframe中的)。在堆快照中有一个distance字段，它是从window对象到达对应对象的最短路径长度。

-   由所有document能够遍历到的DOM节点组成的文档DOM树。不是所有节点都会被对应的JS引用，但有JS引用的节点在document存在的情况下都会被保留。

-   有很多对象可能是在调试代码时或者DevTools
    
    > console中(比如：console中的一些代码执行结束后)创建出来的。

## 

## 先决条件和有用提示

### Chrome 任务管理器

**注意：** 当使用Chrome做内存分析时，最好设置一个洁净的测试环境

打开Chrome的内存管理器，观察内存字段，在一个页面上做相关的操作，你可以很快定位这个操作是否会导致页面占用很多内存。你可以从Chrome菜单
\> 工具或按Shift + Esc，找到内存管理器。

![meo](f/media/image5.jpeg){width="5.763888888888889in"
height="2.80625in"}

打开后，在标头右击选用 JavasScript使用的内存 这项。

### 通过DevTools Timeline来定位内存问题

解决问题的第一步就是要能够证明问题存在。这就需要创建一个可重现的测试来做为问题的基准度量。没有可再现的程序，就不能可靠的度量问题。换句话说如果没有基准来做为对比，就无法知道是哪些改变使问题出现的。

**时间轴面版(Timeline
panel)**对于发现程序什么时候出了问题很用帮助。它展示了你的web应用或网站加载和交互的时刻。所有的事件：从加载资源到解JavaScript，样式计算，垃圾回收停顿和页面重绘。都在时间轴上表示出来了。

当分析内存问题时，时间轴面版上的**内存视图(Memory view)**能用来观察：

-   使用的总内存 -- 内存使用增长了么?

-   DOM节点数

-   文档(documents)数

-   注册的事件监听器(event listeners)数

    ![t1](f/media/image6.jpeg){width="5.763888888888889in"
    height="4.034722222222222in"}

#### 

#### 

#### **证明一个问题的存在**

首先要做的事情是找出你认为可能导致内存泄漏的一些动作。可以是发生在页面上的任何事件，鼠标移入，点击，或其它可能会导致页面性能下降的交互。

在时间轴面版上开始记录(Ctrl+E 或
Cmd+E)然后做你想要测试的动作。想要强制进行垃圾回收点面版上的垃圾筒图标(![IMG_265](f/media/image7.png){width="0.2708333333333333in"
height="0.19791666666666666in"})。

下面是一个内存泄漏的例子，有些点没有被垃圾回收：

![t2](f/media/image8.jpeg){width="5.763888888888889in" height="3.575in"}

如果经过一些反复测试后，你看到的是锯齿状的图形(在内存面版的上方)，说明你的程序中有很多短时存在的对象。而如果一系列的动作没有让内存保持在一定的范围，并且DOM节点数没有返回到开始时的数目，你就可以怀疑有内存泄漏了。

![IMG_267](f/media/image9.jpeg){width="7.1875in"
height="4.572916666666667in"}

一旦确定了存在内存上的问题，你就可以使用**分析面板(Profiles
panel)**上的**堆分析仪(heap profiler)**来定位问题的来源。

### 内存回收

**内存回收器**(像V8中的)需要能够定位哪些对象是**活的(live)**，而那些被认为是**死的**(垃圾**)**的对象是**无法引用到的(unreachable)**。

如果**垃圾回收** (GC)因为JavaScript执行时有逻辑错误而没有能够回收到垃圾对象，这些垃圾对象就无法再被重新回收了。像这样的情况最终会让你的应用越来越慢。

比如你在写代码时，有的变量和事件监听器已经用不到了，但是却仍然被有些代码引用。只要引用还存在，那被引用的对象就无法被GC正确的回收。

当你的应用程序在运行中，有些DOM对象可能已经更新/移除了，要记住检查引用了DOM对象的变量并将其设null。检查可能会引用到其它对象(或其它DOM元素)的对象属性。双眼要盯着可能会越来越增长的变量缓存。

## 堆分析仪

### 拍一个快照

在Profiles面板中，选择**Take Heap
Snapshot**，然后点击**Start**或者按Cmd + E或者Ctrl + E：

![snap](f/media/image10.png){width="5.763888888888889in"
height="2.8159722222222223in"}

快照最初是保存在渲染器进程内存中的。它们被按需导入到了DevTools中，当你点击快照按钮后就可以看到它们了。当快照被载入DevTools中显示后，快照标题下面的数字显示了[能够被引用到的(reachable)](https://developers.google.com/chrome-developer-tools/docs/memory-analysis-101.html#retaining_paths)JavaScript对象占有内存总数。

![s2](f/media/image11.png){width="5.764583333333333in"
height="3.359722222222222in"}

### 切换快照视图

一个快照可以根据不同的任务切换视图。可以通过如图的选择框切换：

![IMG_274](f/media/image12.jpeg){width="3.46875in"
height="1.8854166666666667in"}

下面是三个默认视图：

-   **Summary(概要)** - 通过构造函数名分类显示对象；

-   **Comparison(对照)** - 显示两个快照间对象的差异；

-   **Containment(控制)** - 可用来探测堆内容；

## 视图详解

### Summary view(概要视图)

打开一个快照，默认是以概要视图显示的，显示了对象总数，可以展开显示具体内容：
Initially, a snapshot opens in the Summary view, displaying object
totals, which can be expanded to show instances:

![IMG_275](f/media/image13.jpeg){width="7.1875in"
height="4.645833333333333in"}

第一层级是"总体"行，它们显示了：

-   **Constructor(构造函数)**表示所有通过该构造函数生成的对象

-   **对象的实例数**在Objects Count列上显示

-   **Shallow size**列显示了由对应构造函数生成的对象的[shallow
    
> sizes(直接占用内存)](https://developers.google.com/chrome-developer-tools/docs/memory-analysis-101.html#object_sizes)总数

-   **Retained size**列展示了对应对象所占用的最大内存

-   **Distance**列显示的是对象到达GC根的最短距离

展开一个总体行后，会显示所有的对象实例。没一个实例的直接占用内存和占用总内存都被相应显示。\@符号后的数字不对象的唯一ID，有了它你就可以逐个对象的在不同快照间作对比。

### Comparison view(对照视图)

该视图用来对照不同的快照来找到快照之间的差异，来发现有内存泄漏的对象。来证明对应用的某个操作没有造成泄漏(比如：一般一对操作和撤消的动作，像找开一个document，然后关闭，这样是不会造成泄漏的)，你可以按以下的步骤尝试：

1.  在操作前拍一个堆快照；

2.  执行一个操作(做你认为会造成泄漏的动作)；

3.  撤消之前的操作(上一个操作相反的操作，多重复几次)；

4.  拍第二个快照，将视图切换成对照视图，并同快照1进行对比。

在对照视图下，两个快照之间的不同就会展现出来了。当展开一个总类目后，增加和删除了的对象就显示出来了：

![IMG_276](f/media/image14.jpeg){width="7.1875in" height="4.90625in"}

### Containment view(控制视图)

控制视图可以称作对你的应用的对象结构的"鸟瞰视图(bird's eys
view)"。它能让你查看function内部，跟你的JavaScript对象一样的观察VM内部对象，能让你在你的应用的非常低层的内存使用情况。

该视图提供了几个进入点：

-   **DOMWindow 对象** - 这些对象是JavaScript代码的"全局"对象；

-   **GC根** - VM的垃圾回收器真正的GC根；

-   **Native对象** - 浏览器对象对"推入"JavaScript虚拟机中来进行自动操作

### 揭露DOM内存泄漏

这个工具独一无二的一点是展示了浏览器原生对象(DOM节点，CSS规则)和JavaScript对象之间的双向引用。这能帮助你发现因为忘记解除引用游离的DOM子节点而导致的难以发觉的内存泄漏。

DOM内存泄漏可能会超出你的想象。看下下面的例子 --
#tree对象什么时候被GC呢？

1.  

var select = document.querySelector;

2.  
3.  

var treeRef = select(\"#tree\");

4.  
5.  

var leafRef = select(\"#leaf\");

6.  
7.  

var body = select(\"body\");

8.  
9.  
10. 
11. 

body.removeChild(treeRef);

12. 
13. 
14. 
15. 

*//#tree can\'t be GC yet due to treeRef*

16. 
17. 

treeRef = null;

18. 
19. 
20. 
21. 

*//#tree can\'t be GC yet due to indirect*

22. 
23. 

*//reference from leafRef*

24. 
25. 
26. 
27. 

leafRef = null;

28. 
29. 

*//#NOW can be #tree GC*

30. 

#leaf代表了对它的父节点的引用(parentNode)它递归引用到了#tree，所以，只有当leafRef被nullified后#tree代表的整个树结构才会被GC回收。

![IMG_279](f/media/image15.jpeg){width="3.8333333333333335in"
height="2.8958333333333335in"}

### 支配者视图(Dominators view)

支配者视图显示了堆图的支配者树。支配者视图跟控制(Containment)视图很像，但是没有属性名。这是因为支配者可能会是一个没有直接引用的对象，就是说这个支配者树不是堆图的生成树。但这是个有用的视图能帮助我们很快的定位内存增长点。

注意：在Chrome Canary中，支配者视图能够在DevTools中的Settings \> Show
advanced heap snapshot properties 开启，重启DevTools生效。

## 内存分析FAQ

**问：我不能看到对象的所有属性，我也看到它们的非字符串值！为什么？**

并非所有属性都完整的保存在JavaScript堆中。其中有些是通过执行原生代码的getters方法来获取的。这些属性没有在堆快照中捕获，是为了防止对getters方法的调用和避免程序状态的改变，如果这些getters方法不是"纯(pure)"的functions。同样，非字符串的值，如数字，没有被捕获是为了减少快照的大小。

**问：**@**符号后面的数字是什么意思 --
是地址还是ID呢？这个ID值真的是唯一的么？**

这是对象ID。显示对象的地址没有意义，因为一个对象会在垃圾回收的时候被移除。这些对象IDs是真正的IDs
--
就是说，它们在不同的快照间是唯一表示的。这样就可以的堆状态间进行精确的对比。维持这些IDs会给GC流程增加额外的开支，但这仅在记录第一次堆快照时分配
-- 如果堆分析仪没有用到，就不会有额外的开支。

**问："死"(无法引用到的)对象被包含在快照中了么？**

没有，只有可以引用到的对象才会显示在快照中。而且，拍快照前都会先自动执行GC操作。

**注意：**在写这篇文章的时候，我们计划在拍快照的时候不再GC，防止堆尺寸的减少。现在已经是这样了，但垃圾对象依然显示在快照之外。

**问：GC根是由什么组成的？**

由很多部分组成：

-   原生对象图；

-   符号表；

-   VM线程中的栈；

-   编辑缓存；

-   控制器上下文；

-   全局控制器。

**问：我得知可以使用Heap Profiler和Timeline Memory
view来检测内存泄漏。但我应该先用哪个工具呢？**

Timeline面版，是在你第一次使用你的页面发现速度变慢了时用来论断过多的内存使用。网站变慢是比较典型的内存泄漏的信号，但也可能是其它的原因
-- 可能是有渲染或网络传输方面的瓶颈，所以要确保解决你网页的真正问题。

论断是否是内存问题，就打开Timeline面板和Memory标签。点击record按钮，然后在你的应用上重复几次你认为可能导致内存泄漏的操作。停止记录。你应用的内存使用图就生成出来了。如果内存的使用一直在增长(而没有相应的下降)，这就表明你的应用可能有内存泄漏了。

一般一个正常的应用的内存使用图形是锯齿状的，因为内存使用后又会被垃圾回收器回收。不用担心这种锯齿形
--
因为总是会因为JavaScript而有内存的消耗，甚至一个空的requestAnimationFrame也会造成这种锯齿形，这是无法避免的。只要不是那种分配了持续很多内存的形状，那就表明生成了很多内存垃圾。

![IMG_287](f/media/image16.jpeg){width="7.1875in"
height="2.9479166666666665in"}

上图的增长线是需要你警惕的。在诊断分析的时候Memory标签中的DOM node
counter，Document counter和Event listener
count也是很有用的。DOM节点数是使用的原生内存不会影响JavaScript内存图。

![IMG_288](f/media/image17.jpeg){width="5.625in"
height="1.5208333333333333in"}

一旦你确认你的应用有内存泄漏，堆分析仪就可以用来找到内存泄漏的地方。

**问：我发现堆快照中有的DOM节点的数字是用红色标记为"Detached DOM
tree"，而其它的是黄色的，这是什么意思呢？**

你会发现有不同的颜色。红色的节点(有着深色的背景)没有从JavaScript到它们的直接的引用，但它们是分离出来的DOM结构的一部分，所以他们还是在内存中保留了。有可能有一个节点被JavaScript引用到了(可能是在闭包中或者一个变量)，这个引用会阻止整个DOM树被内存回收。

黄色节点(黄色背景)有JavaScript的直接引用。在同一个分离的DOM树中查看一个黄色的节点来定位你的JavaScript的引用。就可能看到从DOM
window到那个节点的属性引用链

**问：直接占用内存(Shallow Size)和占用总内存(Retained
Size)分别代表什么，它们的区别是什么？**

是这样的，对象可以在内存中以两种方式存在(be alive) --
直接的被别一个可访问的(alive)对象保留(window和document对象总是可访问的)或被原生对象(象DOM对象)隐含的包留引用。后一种方式会因为阻止对象被GC自动回收，而有导制内存泄泥漏的可能。对象自身占用的内存被称为直接占用内存(通常来说，数组和字符串会保留更多的直接占用内存(shallow
size))。

一个任意大小的对象可以通过阻止其它对象内存被回收在保留很大的内存使用。当一个对象被删除后(它造成的一些依赖就无法被引用了)能够释放的内存的大小被称有占用总内存(retained
size)。

**问：constructor和retained字段下有很多的数据。我应该从哪开始调查我是的否遇到了内存泄漏呢？**

一般来说最好是从通过retainers排序的第一个对象开始，retainers之间是通过距离排序的(是指到window对象的距离)。

![IMG_292](f/media/image18.jpeg){width="5.614583333333333in"
height="2.40625in"}

距离最短的对象有可能是首选的可能导致内存泄漏的对象。

**问：Summary, Comparison,和 Containment这些视图之间的不同是什么？**

你可以通过切换视图来体验它们的区别。

-   Summary(概要)视图能帮你通过构造函数分组寻找对象(和对象的内存使用)。该视图对找出DOM内存泄漏很有帮助。

-   Comparison(对照)视图能够通过显示哪些对象内存被正确的回收了来搜寻内存泄漏。通常在一个操作前后记录两个(或更多)的内存使用快照。它是通过察看释放的内存和引用数目的差导来察看是否有内存泄漏，并找到原因。

-   Containment(控制)视图对对象结构有更好的展示，帮助我们分析全局作用域(如
    
    > window)中对象引用情况来找到是什么保留了这些对象。它能让你分析闭包并深入到对象更深层去查看。

**问：堆分析仪中的constructor(一组)内容代表什么？**

![IMG_294](f/media/image19.jpeg){width="5.666666666666667in"
height="2.0625in"}

-   **(global property)** - 全局对象(像
    > 'window')和引用它的对象之间的中间对象。如果一个对象由构造函数Person生成并被全局对象引用，那么引用路径就是这样的：\[global\]
    > \> (global property) \>
    > Person。这跟一般的直接引用彼此的对象不一样。我们用中间对象是有性能方面的原因，全局对象改变会很频繁，非全局变量的属性访问优化对全局变量来说并不适用。

-   **(roots)** -
    
> constructor中roots的内容引用它所选中的对象。它们也可以是由引擎自主创建的一些引用。这个引擎有用于引用对象的缓存，但是这些引用不会阻止引用对象被回收，所以它们不是真正的强引用(FIXME)。

-   **(closure) - 一些函数闭包中的一组对象的引用**

-   **(array, string, number, regexp)** -
    
> 一组属性引用了Array,String,Number或正则表达式的对象类型

-   **(compiled code)** - 简单来说，所有东西都与compoled
    > code有关。Script像一个函数，但其实对应了\<script>的内容。SharedFunctionInfos
    > (SFI)是函数和compiled
    > code之间的对象。函数通常有内容，而SFIS没有(FIXME)。

-   **HTMLDivElement, HTMLAnchorElement, DocumentFragment 等 --
    
    > 你代码中对elements或document对象的引用。**

在你的程序的生命周期中生成的很多其它的对象，包括事件监听器或自定义对象，可以在下面的controllers中找到：

![IMG_295](f/media/image20.jpeg){width="5.59375in" height="2.125in"}

**问：我在做内存分析时需要关闭Chrome里可能会产生影响的什么功能么？**

我们建议在用Chrome
DevTools做内存分析时，你可以使用关闭所有扩展功能的隐身模式，或设置用户文件夹为(\--user-data-dir=\"\")后再打开Chrome。

![IMG_296](f/media/image21.jpeg){width="5.645833333333333in"
height="0.71875in"}

应用，扩展甚至console中的记录都会对你的分析有潜在的影响，如果你想让你的分析可靠的话，禁用这些吧。

**写在最后的话**

今天的JavaScript引擎已经具有很强的能力，能够自动回收代码产生的内存垃圾。就是说，它们只能做到这样了，但我们的应用仍然被证明会因为逻辑错误而产生内存泄漏。使用相应的工具来找到应用的瓶颈，记住，不要靠猜
-- 测试它。
