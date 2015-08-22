# marko-to-html

Renders marko template to html file.

*template.marko*

```html
<h1>Hello ${data.name}!</h1>
<ul if="notEmpty(data.colors)">
    <li class="color" for="color in data.colors">
        ${color}
    </li>
</ul>
<div else>
    No colors!
</div>
```

*data.json*

```js
{
    "name": "Frank",
    "colors": ["red", "green", "blue"]
}

```

From module

```js
var markoToHtml = require('@ianmcburnie/marko-to-html');

markoToHtml('template.marko', 'data.json');
```

From command line

```js
node index.js 'template.marko' 'data.json'
```

*template.html*

```html
<h1>Hello Frank!</h1>
<ul>
    <li class="color">red</li>
    <li class="color">green</li>
    <li class="color">blue</li>
</ul>
```
