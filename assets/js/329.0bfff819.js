(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{667:function(s,n,a){"use strict";a.r(n);var e=a(7),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"面试前准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面试前准备"}},[s._v("#")]),s._v(" 面试前准备")]),s._v(" "),n("p",[s._v("实现冒泡排序和单例模式")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function bubbleSort(arr){\n    for(let i = 0; i < arr.length - 1; i++){\n        for(let j = 0; j < arr.length - 1 - i; j++){\n            if(arr[j] > arr[j + 1]){\n                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]\n            }\n        }\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('const singleton = (\n    function (){\n        let instance\n        function createInstance(){\n            const obj = new Object("this a singleton test")\n            return obj\n        }\n        return  {\n            getInstance: function(){\n            if(!instance){\n                createInstance()\n            }\n            return instance\n        }\n    }}\n)()\n\nlet instance1 = singleton.getInstance()\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("挖掘项目中的技术难点")]),s._v(" "),n("p",[s._v("js闭包")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("作用：用于访问私有作用域内的函数或变量、拓展变量或者方法的作用域\n弊端：对象被长期引用，导致无法释放，积累过多后导致内存泄漏的问题\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("js遍历")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("forOf、forIn、forEach、while循环\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("css盒子模型")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("有内到外：content、padding、border、margin\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("js深浅拷贝")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如何合并json对象")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("在 JavaScript 中，可以使用 `Object.assign()` 方法或展开运算符（`...`）来合并多个 JSON 对象。\n\n1. 使用 `Object.assign()` 方法：\n​```javascript\nconst obj1 = { a: 1, b: 2 };\nconst obj2 = { c: 3, d: 4 };\n\nconst mergedObj = Object.assign({}, obj1, obj2);\nconsole.log(mergedObj);\n// 输出: { a: 1, b: 2, c: 3, d: 4 }\n​```\n在上述示例中，我们首先创建了两个 JSON 对象 `obj1` 和 `obj2`。然后，通过调用 `Object.assign()` 方法，将一个空对象作为目标对象传递给该方法，并将要合并的对象作为源对象传递给该方法。`Object.assign()` 方法会返回合并后的对象。\n\n2. 使用展开运算符（`...`）：\n​```javascript\nconst obj1 = { a: 1, b: 2 };\nconst obj2 = { c: 3, d: 4 };\n\nconst mergedObj = { ...obj1, ...obj2 };\nconsole.log(mergedObj);\n// 输出: { a: 1, b: 2, c: 3, d: 4 }\n​```\n在上述示例中，我们使用展开运算符（`...`）将 `obj1` 和 `obj2` 对象展开，并在新对象中合并它们的属性。\n\n无论是使用 `Object.assign()` 方法还是展开运算符，它们都会创建一个新的对象，将要合并的对象的属性复制到新对象中，从而实现 JSON 对象的合并。\n\n需要注意的是，如果要合并的对象中存在相同的属性，后面的对象的属性将覆盖前面对象的属性。如果需要深度合并对象，可以使用第三方库（如 Lodash 的 `merge()` 方法）或编写自定义的合并逻辑。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("ajax能发送同步请求吗")]),s._v(" "),n("p",[s._v("实现一个二分算法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("变量命名格式")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("常量：const MY_NAME_STYLE = 0\n变量：let currCount\n函数：setNode(){}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("选择器权重比较")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("对SCSS的认知")]),s._v(" "),n("p",[s._v("html()/text()的输出有什么不同")]),s._v(" "),n("p",[s._v("字符串加数字的输出结果")]),s._v(" "),n("p",[s._v("Vue路由的跳转方法")]),s._v(" "),n("p",[s._v("2、简答：")]),s._v(" "),n("p",[s._v("props和data有什么不同")]),s._v(" "),n("p",[s._v("JavaScript定时器的种类和用法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("JavaScript提供了几种定时器类型，可以用于在指定的时间间隔或在特定的时间执行代码。以下是几种常见的JavaScript定时器及其用法：\n\n1. setTimeout(): setTimeout()函数用于在指定的延迟时间之后执行一次代码。它接受两个参数：要执行的代码和延迟的毫秒数。示例用法如下：\n​```javascript\nsetTimeout(function() {\n  // 要执行的代码\n}, 2000); // 在2秒后执行\n​```\n\n2. setInterval(): setInterval()函数用于按照指定的时间间隔重复执行代码。它也接受两个参数：要执行的代码和时间间隔的毫秒数。示例用法如下：\n​```javascript\nsetInterval(function() {\n  // 要执行的代码\n}, 1000); // 每隔1秒执行一次\n​```\n\n3. requestAnimationFrame(): requestAnimationFrame()函数用于在浏览器绘制下一帧之前执行代码，通常用于创建动画效果。它接受一个回调函数作为参数，该函数在下一帧绘制之前调用。示例用法如下：\n​```javascript\nfunction animate() {\n  // 要执行的动画代码\n  requestAnimationFrame(animate);\n}\n\n// 启动动画\nanimate();\n​```\n\n4. clearInterval()和clearTimeout(): 这两个函数用于停止之前通过setInterval()和setTimeout()创建的定时器。它们接受一个定时器标识符作为参数。示例用法如下：\n​```javascript\nvar intervalId = setInterval(function() {\n  // 要执行的代码\n}, 1000);\n\n// 停止定时器\nclearInterval(intervalId);\n\nvar timeoutId = setTimeout(function() {\n  // 要执行的代码\n}, 2000);\n\n// 取消延迟执行\nclearTimeout(timeoutId);\n​```\n\n这些定时器函数提供了灵活的时间控制，可以根据需要执行一次或重复执行代码。根据具体的需求，选择合适的定时器类型来实现所需的功能。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br")])]),n("p",[s._v("iframe的缺点")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("样式调整困难、安全性、性能慢、seo不友好、跨域通信困难\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("style放在body前和body后有什么区别")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("数组去重实现")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("写一段js遍历所有li，将每个li逐个 alert()")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);