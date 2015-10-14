var vdom = require('virtual-dom');
var h = vdom.h;
var FormField = require('../FormField.js');

var state = FormField({
  field: 'example'
});

var loop = require('main-loop')( state(), FormField.render, vdom );
state(loop.update);
document.getElementById('content').appendChild(loop.target);
