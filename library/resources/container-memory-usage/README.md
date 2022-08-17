# Container Memory Usage
**ID:** resources/container-memory-usage
**Description:** Checks for container memory request to be set and marks containers as high and medium memory users.

## Target Script
```js
select('Container')
```
## Rule Script
```js
var value = item.getProperties('resources')['memory request'];
if (value) {
    if (unit.memory(value).in('gb') >= 4) {
        mark('high-memory-user');
    }
    else if (unit.memory(value).in('mb') >= 600) {
        mark('medium-memory-user');
    }
} else {
    warning('Memory request is not set. This is not a good practice. Please correct ASAP.')
}
```
