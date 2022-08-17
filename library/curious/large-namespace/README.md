# Large Namespace
**ID:** curious/large-namespace

**Description:** Identifies namespaces that are using large chunk of total cluster CPU and Memory resources.

## Target Script
```js
select('Namespace')
    .filter(({item}) => {
        const cpu = item.getProperties('cluster-consumption').cpu;
        const memory = item.getProperties('cluster-consumption').memory;
        return (unit.percentage(cpu) >= 40) ||
               (unit.percentage(memory) >= 40);
    })
```
## Rule Script
```js
mark('large-namespace')

```
