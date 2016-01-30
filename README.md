# File for mdl-form

## Parameter

- `default` -> value of input
- `type` -> type of input(default: text)
- `style` -> change style
- `max` -> max-length of input 
- `regular_expression` -> pattern of input
- `label` -> name of input
- `error` -> text of error will show when it is empty or it is not correspond to `regular_expression`.
- `isNotRequire` -> if you use `isNotRequire: true`, it can be empty.

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
