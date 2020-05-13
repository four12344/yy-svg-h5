## fill 上色
- `fill` 设置对象内部的颜色
- `fill-opacity` 透明度

备注：fill/stroke的值支持rgba的浏览器，可以用rgba代替opacity。


## stroke 描边
- `stroke` 设置对象的线条颜色
- `stroke-opacity` 控制描边的不透明度
- `stroke-width` 属性定义了描边的宽度
- `stroke-linecap` 属性控制边框终点的形状
  - <img src="https://developer.mozilla.org/@api/deki/files/355/=SVG_Stroke_Linecap_Example.png" style="display:inline-block;width: 100px;vertical-align: sub;" />
- `stroke-linejoin` 属性控制两条描边线段之间的链接方式
  - <img src="https://developer.mozilla.org/@api/deki/files/356/=SVG_Stroke_Linejoin_Example.png" style="display:inline-block;width: 100px;vertical-align: sub;" />
- `stroke-dasharray` 属性将虚线类型的描边
  - stroke-dasharray="5,10,5" 先画5个填色单位，再画10个空白单位，再画5个填色单位，（循环回第一个数字）再画5个空白单位...
- fill-rule，用于定义如何给图形重叠的区域上色；
- stroke-miterlimit，定义什么情况下绘制或不绘制边框连接的miter效果；
- 还有stroke-dashoffset，定义虚线开始的位置。

``` HTML
<line
  x1="40" x2="120" y1="100" y2="100" 
  stroke="black" stroke-width="20" stroke-linecap="round"/>
```



## 通过内敛CSS上色和描边
``` html
<rect
  x="10" height="180" y="10" width="180"
  style="stroke: black; fill: red;"/>
```
width、height，以及路径的命令等等，**都不能用css设置**。 <img src="https://user-gold-cdn.xitu.io/2020/4/22/171a085226407129?w=800&h=400&f=png&s=64753" style="vertical-align: sub;display:inline-block;height: 60px;" />
[SVG规范](http://www.w3.org/TR/SVG/propidx.html)将属性区分成properties和其他attributes，前者是可以用CSS设置的，后者不能。

注意：内嵌/外部CSS样式看[官网](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Fills_and_Strokes)。










