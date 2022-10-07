(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{422:function(t,a,e){"use strict";e.r(a);var s=e(46),l=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"标签页-tabs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签页-tabs"}},[t._v("#")]),t._v(" "),e("H2Icon"),t._v(" 标签页 Tabs")],1),t._v(" "),e("blockquote",[e("p",[t._v("选项卡切换组件")])]),t._v(" "),e("p",[t._v("标签页需"),e("code",[t._v("tabs")]),t._v("和"),e("code",[t._v("tabpanel")]),t._v("两个组件关联使用。")]),t._v(" "),e("p",[e("code",[t._v("tabpanel")]),t._v("用于设置每一个标签的名称、以及标签下对应的内容；")]),t._v(" "),e("p",[e("code",[t._v("tabs")]),t._v(" 包裹在所有tabpanel最外层，"),e("code",[t._v("tabs")]),t._v("下的所有"),e("code",[t._v("tabpanel")]),t._v("属于同一个标签页。")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("为便于下文的说明，在这里约定以下定义：")]),t._v(" "),e("ul",[e("li",[t._v("标签栏 ：标签页顶部，可点击切换的区域；")]),t._v(" "),e("li",[t._v("标签栏装饰线 ： 标签栏灰色的线；")]),t._v(" "),e("li",[t._v("标签选中时装饰线 : 选中状态下标签栏下面蓝色的线")])])]),t._v(" "),e("h2",{attrs:{id:"等宽标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#等宽标签"}},[t._v("#")]),t._v(" 等宽标签")]),t._v(" "),e("p",[t._v("默认为等宽标签，在 "),e("code",[t._v("tabs")]),t._v(" 上设置 "),e("code",[t._v("equal-width")]),t._v(" 为 "),e("code",[t._v("false")]),t._v(" 时，取消等宽标签，此时宽度为 "),e("code",[t._v("文本内容 + 左右各20rpx的padding")]),t._v(";")]),t._v(" "),e("p",[t._v("默认激活的是第一个标签页，通过"),e("code",[t._v("tabs")]),t._v("组件上设置"),e("code",[t._v('active-key="{\\{key}}"')]),t._v("配置初始状态时激活的选项卡。")]),t._v(" "),e("p",[t._v("当标签数过多时可在 "),e("code",[t._v("tabs")]),t._v(" 上设置 "),e("code",[t._v("scrollable")]),t._v(" 为 "),e("code",[t._v("true")]),t._v(" 时开启滚动标签栏。")]),t._v(" "),e("p",[t._v("必须在 "),e("code",[t._v("tabpanel")]),t._v(" 组件中传入 "),e("code",[t._v("tab")]),t._v(" 、 "),e("code",[t._v("key")]),t._v(" 、 "),e("code",[t._v("slot")]),t._v(" 属性，其中：")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("tab")]),t._v(" 是标签栏显示的文字；")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("key")]),t._v(" 为每个标签栏的标识，对应 "),e("code",[t._v("tabs")]),t._v(" 中的 "),e("code",[t._v("active-key")]),t._v(" ；")])]),t._v(" "),e("li",[e("p",[t._v("受小程序的限制，必须传属性 "),e("code",[t._v("slot")]),t._v(" 且值的内容与 "),e("code",[t._v("key")]),t._v(" 保持一致；")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("tabpanel")]),t._v(" 标签中包裹的内容为标签栏对应的内容。")])])]),t._v(" "),e("h3",{attrs:{id:"示例代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-wxml"}},[e("code",[t._v("      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-tabs")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("bind:")]),t._v("linchange")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("changeTabs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-tabpanel")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tab")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("京东物流"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("one"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("one"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tab-content"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("京东物流"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-tabpanel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-tabpanel")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tab")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("品牌"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("two"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("two"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tab-content"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("品牌"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-tabpanel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-tabpanel")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tab")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("接口"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("three"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("three"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tab-content"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("接口"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-tabpanel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-tabpanel")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tab")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("面板"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("four"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("four"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tab-content"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("面板"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-tabpanel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-tabs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("div",{staticClass:"l-img"},[e("p",[e("img",{attrs:{src:"/screenshots/tabs/1.png",alt:"height=200"}})])]),e("h2",{attrs:{id:"标签页位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签页位置"}},[t._v("#")]),t._v(" 标签页位置")]),t._v(" "),e("p",[t._v("默认标签栏位置在顶部，可通过在 "),e("code",[t._v("tabs")]),t._v(" 上设置 "),e("code",[t._v("placement")]),t._v(" 属性切换标签栏位置，可选值有 "),e("code",[t._v("top")]),t._v("/"),e("code",[t._v("left")]),t._v("/"),e("code",[t._v("right")]),t._v("/"),e("code",[t._v("bottom")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"标签动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签动画"}},[t._v("#")]),t._v(" 标签动画")]),t._v(" "),e("p",[t._v("在 "),e("code",[t._v("tabs")]),t._v(" 上设置 "),e("code",[t._v("animated")]),t._v(" 为 "),e("code",[t._v("true")]),t._v(" 时开启标签页切换动画，默认不开启。")]),t._v(" "),e("h2",{attrs:{id:"滑动切换标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#滑动切换标签"}},[t._v("#")]),t._v(" 滑动切换标签")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("tabs")]),t._v(" 设置"),e("code",[t._v("swipeable")]),t._v(" 为 "),e("code",[t._v("true")]),t._v(" 时，支持滑动内容部分切换标签。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("swiperable")]),t._v(" 的实现是基于微信原生swiper组件，当设置 "),e("code",[t._v("placement")]),t._v(" 为： "),e("code",[t._v("top")]),t._v(" 和 "),e("code",[t._v("bottom")]),t._v(" 时，默认高度为 "),e("code",[t._v("150px")]),t._v(" 。")]),t._v(" "),e("li",[t._v("考虑到用户使用场景多样，我们并没有解决swiper组件高度自适应的问题，具体解决方式可以参考：\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/doc/00026c2d424a78c7eb27249a25b004",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信小程序swiper高度自适应，swiper的子元素高度不固定"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/doc/00008aaf4a473056d1c69a8b253c04?highLine=swiper%25E8%2587%25AA%25E9%2580%2582%25E5%25BA%2594%25E9%25AB%2598%25E5%25BA%25A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信小程序swiper高度动态适配 | 微信开放社区"),e("OutboundLink")],1)])])])])]),t._v(" "),e("h2",{attrs:{id:"图标标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图标标签"}},[t._v("#")]),t._v(" 图标标签")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("tabpanel")]),t._v("上设置"),e("code",[t._v("icon")]),t._v("时，可以在标签栏上添加图标，默认图标大小为"),e("code",[t._v("28rpx")]),t._v(",颜色与字体颜色一致。")]),t._v(" "),e("p",[t._v("通过在"),e("code",[t._v("tabpanel")]),t._v("上设置"),e("code",[t._v("icon")]),t._v("属性设置每个标签页显示图标类型，可配置图标类型同"),e("code",[t._v("Icon")]),t._v("组件一致，")]),t._v(" "),e("h2",{attrs:{id:"图片资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片资源"}},[t._v("#")]),t._v(" 图片资源")]),t._v(" "),e("p",[t._v("使用"),e("code",[t._v("image")]),t._v("配置图片资源的样式，可配置项有：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("defaultImage")]),t._v(" :未选中时的图片资源,")]),t._v(" "),e("li",[e("code",[t._v("activeImage")]),t._v(" ：选中时的图片资源")]),t._v(" "),e("li",[e("code",[t._v("picPlacement")]),t._v(" 可以更改图片、图标的相对于文字的位置，默认为 "),e("code",[t._v("top")])])]),t._v(" "),e("h2",{attrs:{id:"标签初始样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签初始样式"}},[t._v("#")]),t._v(" 标签初始样式")]),t._v(" "),e("ul",[e("li",[t._v("标签栏位置在顶部和底部时的默认高度为 "),e("code",[t._v("80rpx")]),t._v(" ，宽度等分，开启 "),e("code",[t._v("scrollable")]),t._v(" 时，最小宽度为 "),e("code",[t._v("160rpx")]),t._v(";")]),t._v(" "),e("li",[t._v("标签栏位置在左边或右边时，默认宽度为 "),e("code",[t._v("160rpx")]),t._v("，高度等分,开启 "),e("code",[t._v("scrollable")]),t._v(" 时，最小高度为 "),e("code",[t._v("80rpx")]),t._v(";")]),t._v(" "),e("li",[t._v("可通过 "),e("code",[t._v("l-header-class")]),t._v(" 、 "),e("code",[t._v("l-active-class")]),t._v(" 、 "),e("code",[t._v("l-inactive-class")]),t._v(" 覆盖默认标签栏样式。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("注意:")]),t._v(" "),e("ul",[e("li",[t._v("标签栏选中时装饰线的样式默认为：\n"),e("ul",[e("li",[t._v("background:#333333;")]),t._v(" "),e("li",[t._v("width/height: 4rpx;")])])]),t._v(" "),e("li",[t._v("在覆盖标签栏选中时装饰线的样式，通过修改以上属性来覆盖修改。")])])]),t._v(" "),e("h2",{attrs:{id:"标签属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签属性"}},[t._v("#")]),t._v(" 标签属性")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("active-key")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("默认激活tabs的key")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("默认为第一个")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("placement")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("标签位置")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("top")]),t._v("/"),e("code",[t._v("left")]),t._v("/"),e("code",[t._v("right")]),t._v("/"),e("code",[t._v("bottom")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("top")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("animated")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否使用动画切换标签")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("animated-for-line")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否使用动画切换装饰线")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("swipeable")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否支持滑动切换标签")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("scrollable")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否滚动标签栏")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("false")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("active-color")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置激活状态标签的文本和图标颜色")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("表示颜色的是16进制")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("inactive-color")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置未激活状态标签的文本和颜色")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("表示颜色的是16进制")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("has-line")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置是否显示标签下的装饰线")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("true")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("content-height")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("内容区域高度")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("badge-count-type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("数字的显示方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("overflow")]),t._v("/"),e("code",[t._v("limit")]),t._v("/"),e("code",[t._v("custom")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("overflow")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("dot-badge")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示圆点徽标")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("false")]),t._v("/"),e("code",[t._v("true")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("badge-count")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("徽标的数值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("badge-max-count")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("徽标数字最大值，超过最大值时显示${max-count}+")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-----")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("99")])])])]),t._v(" "),e("h2",{attrs:{id:"标签外部样式类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签外部样式类"}},[t._v("#")]),t._v(" 标签外部样式类")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-header-class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖标签栏整体样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("替代l-class-header")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-active-class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖标签激活状态样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("替代l-class-active")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-inactive-class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖标签默认状态样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("替代l-class-inactive")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-line-class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖标签选中时装饰线的样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("替代l-class-line")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-header-line-class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖标签栏装饰线的样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("替代l-class-header-line")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-tabimage-class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖标签图片的样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("替代l-class-tabimage")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-content-class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖标签内容样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("替代l-class-content")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-tabpanel-class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖面板内容样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-badge-class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖徽标的样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),e("h2",{attrs:{id:"已经弃用的外部样式类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#已经弃用的外部样式类"}},[t._v("#")]),t._v(" 已经弃用的外部样式类")]),t._v(" "),e("p",[t._v("以下这些外部样式类已经停止支持，将在未来的某个版本中去除，请使用上方的外部样式类替代。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-header")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖标签栏整体样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请使用l-header-class替代")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-active")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖标签激活状态样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请使用l-active-class替代")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-inactive")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖标签默认状态样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请使用l-inactive-class替代")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-line")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖标签选中时装饰线的样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请使用l-line-class替代")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-header-line")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖标签栏装饰线的样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请使用l-header-line-class替代")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-tabimage")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖标签图片的样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请使用l-tabimage-class替代")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-class-content")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("外部样式类，覆盖标签内容样式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请使用l-content-class替代")])])])]),t._v(" "),e("h2",{attrs:{id:"标签页属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签页属性"}},[t._v("#")]),t._v(" 标签页属性")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("key")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("对应 "),e("code",[t._v("active-key")]),t._v("，必填")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("tab")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("选项卡头显示文字")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("sub-key")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("混合选项卡时，选项卡竖向key")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("sub-tab")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("混合选项卡时，选项卡竖向显示文字")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("slot")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("key")]),t._v("一致，有"),e("code",[t._v("sub-key")]),t._v("时则与"),e("code",[t._v("sub-key")]),t._v("保持一致，必填")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置标签栏图标类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("icon-size")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置标签栏图标的大小")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("28")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("picPlacement")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置图片、图标的相对于文字的位置")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("top")]),t._v("/"),e("code",[t._v("left")]),t._v("/"),e("code",[t._v("right")]),t._v("/"),e("code",[t._v("bottom")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("top")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("image")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置标签栏图片资源")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("{activeImage,defaultImage}")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),e("h2",{attrs:{id:"标签页事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签页事件"}},[t._v("#")]),t._v(" 标签页事件")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linchange")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("tab")]),t._v("切换的回调事件")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("当前激活标签页的"),e("code",[t._v("key")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),e("RightMenu")],1)}),[],!1,null,null,null);a.default=l.exports}}]);