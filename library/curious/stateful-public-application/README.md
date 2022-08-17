# Stateful Public Application
**ID:** curious/stateful-public-application
**Description:** Identifies applications that are exposed using Ingress and also have Persistent Volume Claims attached.

## Target Script
```js
select('Application')
    .filter(({item}) => {
        return item.hasDescendants('Ingress') && item.hasDescendants('Persistent Volume Claim');
    })
```
## Rule Script
```js
mark("stateful-public-application")

```
