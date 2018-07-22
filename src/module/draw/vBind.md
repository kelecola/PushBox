## Class & Style 的绑定

操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为他们都是属性
所以,我们可以用 v-bind 处理他们:只需要通过表达式计算出字符串结果即可。不过,
字符串拼接麻烦且易错.因此在将 v-bind 用于 class 和 style 时,vue.js 做了专门的增强。
表达式结果的类型除了字符串之外,还可以是对象或数组.

### 绑定 HTML Class

#### 对象语法

我们可以传给 v-bind:class 一个对象,以动态地切换 class：

```html
<div v-bind:class="{ active: isActive }"></div>
```

isActive 是定义在 data 里面的数据,active 是 style 里面的样式
isActive 为 true 的时候,active 被渲染出来

```html
<div v-bind:class="classObject"></div>
```

听说是强大的计算属性模式

```js
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

#### 数组语法

```html
<div v-bind:class="[activeClass,errorClass]"></div>
```

```js
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

渲染为

```html
<div class="active text-danger"></div>
```

```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```

### 绑定内联样式

#### 对象语法

v-bind:style 的对象语法十分直观--看起来非常像 CSS，但其实是一个 JavaScript 对象。
CSS 属性名可以用驼峰式或短横线分隔(kebab-case)

```html
<div :style="{color:activeColor,fontSize:fontSize+'px'}"></div>
```

```js
data:{
  activeColor:'red',
  fontSize:30
}
```

这个可以算是最笨的方法了吧,不过是一切方法的源头,简单来说可塑性超级高的方法

```html
<div :style="styleObject"></div>
```

这里面没有连字符 font-size 要转化成 fontSize 这样就行了

```js
data: {
  styleObject: {
    color: 'red'
    fontSize: '13px'
  }
}
```
