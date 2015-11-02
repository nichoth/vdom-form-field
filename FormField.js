var h = require('virtual-dom/h');
var state = require('@nichoth/state');
var Input = require('vdom-input');
var value = require('observ');
var struct = require('observ-struct');
var extend = require('xtend');

module.exports = FormField;

function FormField(opts) {
  var s = state({
    field: value(opts.field || ''),
    input: Input({
      value: opts.value,
      attrs: {
        name: opts.field
      }
    }),
    attrs: struct( extend({}, opts.attrs) )
  });
  return s;
}

FormField.hasValue = function(state) {
  var hv = Input.hasValue( state.input );
  return hv;
};

FormField.render = function(state) {
  return h('div.vdom-form-field', [
    h('label', [state.field]),
    // h('span.field-separator', [' : ']),
    Input.render(state.input)
  ]);
};
