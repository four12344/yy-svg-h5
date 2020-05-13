[链接 1] [MDN_SVG元素参考](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element)


## g
- 用来组合对象的容器。
- 添加到g元素上的变换会应用到其所有的子元素上（子元素能继承g的属性）。

备注：g不支持x属性，所以g不支持x动画。
```html
<!-- 下面动画失效 -->
<g x="10">
  <animate attributeName="x" from="-100" to="120" begin="0s" dur="3s" repeatCount="indefinite" />
  <rect x="10" y="10" width="100" height="100" fill="black">
  </rect>
</g>
```

# 动画用到的4个元素

## set
- 用来设定一个属性值，并为该值赋予一个持续时间。
- 支持所有的属性类型。
- 无法在其上使用additive属性或accumulate属性，即使声明了这些属性也会自动被忽略。

``` HTML
<!-- 在3s时，让“马”字水平向左移动100 -->
<text font-size="120" y="160" x="160">
  马
  <set attributeName="x" attributeType="XML" to="60" begin="3s" />
</text>
```


再来一个官网的例子，改变className。
``` HTML
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <style>
    rect { cursor: pointer }
    .round { rx: 5px; fill: green; }
  </style>

  <rect id="me" width="10" height="10">
    <set attributeName="class" to="round" begin="me.click" dur="2s" />
  </rect>
</svg>
```

连着改变x，y是ok的。
``` HTML
<!-- 先水平位移到60，再垂直位移到20 -->
<text font-size="20" y="60" x="20">
  马
  <set attributeName="x" attributeType="XML" to="60" begin="1s" />
  <set attributeName="y" attributeType="XML" to="20" begin="2s" />
</text>
```




## animate
- 某个元素的CSS的属性值（这里有待拓展补充）如何变化，形成动画。
- 动画元素放在形状元素的内部（写在标签里），用来定义一个元素的某个属性如何踩着时点改变。

``` HTML
<rect x="0" y="10" width="100" height="100" fill="black">
  <!-- rect的内部 -->
  <!-- rect的x值从-100变到120，持续3秒的动画。且动画不延迟0秒就开始。 -->
  <animate attributeName="x" from="-100" to="120" begin="0s" dur="3s" repeatCount="indefinite" />
</rect>
```


## animateMotion
- 定义了一个元素如何沿着运动路径进行移动。

注意：当一个元素要沿着一个路径运动时，该元素的“定位值”要设置为空，不然运动位置会有叠加效果(看下图示例)。
<img src="https://user-gold-cdn.xitu.io/2020/5/13/1720c15614380ec8?w=1346&h=574&f=gif&s=381842" style="display:block;width: 400px;" />
``` HTML
<!-- 比如，下面的圆不设置圆心的定位值cx和cy。 -->
<circle r="5" fill="red">
  <animateMotion
    path="M10,110 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110"
    begin="0s" dur="6s" repeatCount="indefinite" rotate="auto"/>
</circle>
```

注意：为了复用一个已经定义的路径，就有必要使用一个 `<mpath> `元素嵌入到 `<animateMotion>` 中，而不是使用 path。

``` HTML
<path d="M10,110 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110"
  stroke="lightgrey" stroke-width="2" fill="none"
  id="theMotionPath"/>

<circle r="5" fill="red">
  <animateMotion begin="0s" dur="6s" repeatCount="indefinite" rotate="auto">
    <mpath xlink:href="#theMotionPath"></mpath>
  </animateMotion>
</circle>
```

```!
微信公众号的svg内容不支持id哦！！！（动画会失效）
```

## animateTransform

- 控制目标元素上的一个变形属性，从而允许动画控制转换、缩放、旋转或斜切。
- 就是 transform 变化的动画效果。



<img src="https://user-gold-cdn.xitu.io/2020/4/23/171a75c49afc8be1?w=300&h=300&f=gif&s=13240" style="vertical-align: middle;display:inline-block;width: 50px;" /> animate 和 animateTransform 怎么区分使用？







