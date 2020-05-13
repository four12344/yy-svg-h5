[链接 1] [MDN_SVG属性参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute)

## viewBox
- The viewBox attribute defines the position and dimension `尺寸`, in user space, of an SVG viewport. 
- **指定SVG图像的长宽比**（映射到视口的width和height）。
- 将指定长宽比例的矩形区域映射到给定的元素上（比如viewport），映射受到 preserveAspectRatio 属性的影响。
- 有五个元素使用这个属性: marker、 pattern、 svg、 symbol 和 view。

``` HTML
// viewBox="min-x, min-y, width, height"
```

## preserveAspectRatio
- 没有设置viewBox则可以忽略该值。
- 表示是否强制进行统一缩放，让图形拉伸占据整个视口。

align 表示是否强制统一缩放，即当viewbox的比例和viewport的比例不同时，参考该值缩放。
- none 不缩放
- xMinYMin 缩放
  - 将SVG元素的viewbox属性的X的最小值与视图的X的最小值对齐
  - 将SVG元素的viewbox属性的Y的最小值与视图的Y的最小值对齐
- xMidYMin
  - 将SVG元素的viewbox属性的X的中点值与视图的X的中点值对齐。
- xMaxYMin
  - 将SVG元素的viewbox属性的X的最小值+元素的宽度与视图的X的最大值对齐。
- xMinYMid、xMaxYMid、xMinYMax、xMidYMax、xMaxYMax、xMidYMid （**默认值**）

meetOrSlice
- meet 默认值，SVG的viewbox在viewport的可是范围内
- slice，如果SVG的viewbox宽高比与可视区域不匹配，则viewbox的某些区域将会延伸到视图窗口外部（即SVG的viewbox将会比可视窗口大）

``` HTML
// preserveAspectRatio="<align> [<meetOrSlice>]"
```

## additive
- 控制动画是否追加。
- 取值：replace（默认）、 sum。
- 有四个元素使用这个属性: animate、 animateccolor、 animatemotion 和 animatetransform

sum：表示`动画的基础值`会追加到其他低优先级的动画上。
使用场景1：第2个动画会接着第1个动画结束的位置开始。
使用场景2：2个动画同时进行，比如同时旋转和放大。
``` HTML
<!-- 同时旋转和放大 -->
<animateTransform
  attributeName="transform" type="scale"
  from="1" to="3" dur="10s" repeatCount="indefinite"
  additive="sum"/>
<animateTransform
  attributeName="transform" type="rotate"
  from="0 30 20" to="360 30 20" dur="10s" fill="freeze" repeatCount="indefinite"
  additive="sum"/>;
```

## accumulate

- 动画是否累积
- 取值：none（默认）、sum。
- 有四个元素使用这个属性: animate、 animateccolor、 animatemotion 和 animatetransform

sum表示动画结束时候的位置作为下次动画的起始位置。

## attributeName
- 表示父元素（目标元素）需要被改变的`CSS属性`或者`属性`的名称。
- 有四个元素使用这个属性: animate、 animateccolor、 animatetransform 和 set

## from, to, by, values

### from-to动画、from-by动画
- to表示绝对值
- by表示相对值
- 且 to 的优先级高于by。

### to动画、by动画
- 如果动画的起始值与元素的默认值是一样的，from参数可以省略。

### values动画
- values可以是一个值或多值，表示动画关键点。
- 使用场景：实现多个动画关键点，不是单纯的从a位置到b位置，需要去c位置过渡下

``` HTML
<text font-family="microsoft yahei" font-size="120" y="150" x="160">
  马
  <animate attributeName="x" values="160;40;160" dur="3s" repeatCount="indefinite" />
</text>
```
