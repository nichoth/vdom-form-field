# vdom form field

Easy form fields with `virtual-dom`.


## install

    $ npm install vdom-form-field


## example

```js
var vdom = require('virtual-dom');
var h = vdom.h;
var FormField = require('vdom-form-field');

var state = FormField({
  field: 'example'
});

var loop = require('main-loop')( state(), FormField.render, vdom );
state(loop.update);
document.getElementById('content').appendChild(loop.target);
```
