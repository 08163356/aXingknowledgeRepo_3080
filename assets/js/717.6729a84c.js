(window.webpackJsonp=window.webpackJsonp||[]).push([[717],{1054:function(n,s,e){"use strict";e.r(s);var t=e(7),a=Object(t.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("一、")]),n._v(" "),s("p",[n._v("优化前")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("                return Boolean(siblings.find(sibling=>{\n                    return  !sibling.eventList.find(evtItem=>{\n                        return evtItem.eventId == event.eventId;\n                    });\n                }));\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("p",[n._v("优化后\n")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("以下是优化后的代码：\n\n​```javascript\nconst hasEventId = siblings.some(sibling => {\nreturn !sibling.eventList.some(evtItem => evtItem.eventId === event.eventId);\n});\nconst result = Boolean(hasEventId);\n​```\n\n优化说明：\n\n1. 使用`Array.prototype.some()`方法代替`Array.prototype.find()`方法。`some()`方法可以在找到第一个符合条件的元素后就返回，而`find()`方法会遍历整个数组。在这个例子中，我们只需要判断是否存在符合条件的元素，因此使用`some()`方法更加高效。\n\n2. 使用`Array.prototype.some()`方法代替`Array.prototype.find()`方法后，可以直接返回布尔值，无需再调用`Boolean()`函数转换类型。\n\n3. 简化了函数的嵌套结构，提高了代码的可读性和可维护性。\n\n综上所述，通过对代码的优化，可以提高代码的性能和可读性，让代码更加简洁和易于维护。\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);