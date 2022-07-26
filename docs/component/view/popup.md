---
title: 弹出层 Popup
---

# <H2Icon /> 弹出层 Popup

> 显示背景为黑色半透明，且有内容区域展示的弹出层。

该组件支持<a href="/start/wx.html">wx.coco</a>用法。

## 基本案例 

弹出层可通过设置`show`属性为`true`或者`false`来控制显示和隐藏，不设置则显示状态默认为`false`。

### 代码演示
```wxml
<l-popup show="{{true}}"> </l-popup>
```

:::img
![height=300](/screenshots/popup/1.png)
:::

## 动画设置

弹出层可以通过设置 `animation` 属性为`show`、`hide`来控制动画效果的显示和隐藏，不设置则显示状态默认为`show`。

### 代码演示
```wxml
<l-popup show="{{true}}" animation="hide" > </l-popup>

```
Tips：静态图片展示效果相同，不做重复展示。

## 从不同方向弹出

根据不同的业务场景需求，可以在弹出层中插入 `slot` ，并通过设置 `content-align` 属性的值来控制 `slot` 从不同的方向进入屏幕，可选值为 `top` 、`left` 、`right` 、`bottom` 、`center`。


::: tip 注意事项
 * 设置为`center`时， 内容区域( `slot` )从中间弹出。 
 * 不建议在组件中传入多个子节点。
:::

### 代码演示
```wxml
<l-popup show="{{true}}" content-align="bottom" > 
  <view class="botton"> 从下方弹出</view>
</l-popup>

```

:::img
![height=300](/screenshots/popup/2.png)
:::


## 锁定

设置按钮的 `locked` 属性来控制弹出层的锁定态，属性值为 `true` 时，点击弹出层背景部分不会关闭，属性值为 `false` 时点击背景会立即关闭。默认为 `false` 

### 代码演示
```wxml
<l-popup show="{{true}}" content-align="bottom"  locked="{{true}}">
    <view class='pupop-content'>
      <view class='pupop-close' bindtap='onHidePupopTap'>关闭弹出层</view>
    </view>
</l-popup>

```

:::img
![height=300](/screenshots/popup/3.png)
:::


## 弹出层属性

| 参数          | 说明                     | 类型    | 可选值                       | 默认值 |
| :------------ | :----------------------- | :------ | :--------------------------- | :----- |
| show          | 控制弹出层的显示         | Boolean | true/false                   | hide   |
| animation     | 控制弹出层有无动画       | Boolean | true/false                   | true   |
| content-align | 控制弹出层内容区域的位置 | String  | top/right/left/bottom/center | center |
| z-index       | 组件的页面层级           | Number  | -----                        | 777    |
| locked        | 弹出层是否设定为锁定态   | Boolean | true/false                   | false  |

::: tip 注意事项
 z-index默认为777，如果当前引入弹出层组件的页面中有z-index值大于777的节点，那么为了避免错误的显示效果，可以将pupop组件的z-index属性的值重新设置。
:::

## 弹出层外部样式类
| 外部样式类名  | 说明                                           | 备注 |
| :------------ | :--------------------------------------------- | :--- |
| l-class       | 覆盖弹出层整体的自定义外部样式类               | ---  |
| l-bg-class    | 覆盖背景区域（内容部分除外）的自定义外部样式类 | ---  |
| l-panel-class | 覆盖内容部分的自定义外部样式类                 | ---  |

## 弹出层事件

| 事件名称    | 说明                   | 返回值    | 备注     |
| :---------- | :--------------------- | :-------- | :------- |
| bind:lintap | 当点击背景时触发的事件 | --------- | -------- |

<RightMenu />
