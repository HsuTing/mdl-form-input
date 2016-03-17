# Input for mdl-form

## Start

Install package:
```
  npm install mdl-form mdl-form-input react jquery
```

You need to see [mdl-form](https://github.com/HsuTing/mdl-form.git).

## Parameter

- `default` -> value of input
- `type` -> type of input(default: text)
- `style` -> change style
- `max` -> max-length of input 
- `regular_expression` -> pattern of input
- `label` -> name of input
- `error` -> text of error will show when it is empty or it is not correspond to `regular_expression`.
- `isNotRequire` -> if you use `isNotRequire: true`, it can be empty.
- `change`(function) -> you can do something when input is changed. `1st` argument is this component value.

## Example

```
{   
  'id': 'component_id',
  'label': 'Label',
  'style': {'color': 'red'},
  'error': 'Error',
  'regular_expression': '[A-Z]+',
  'max': '5',
  'isNotRequire': true,
  'default': 'default',
  'type': 'text'
}
```
