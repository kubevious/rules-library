# Stateful Application
**ID:** curious/stateful-application
**Description:** Identifies stateful applications that have persistent volumes attached.

## Target Script
```js
select('Application')
    .filter(({item}) => {
        return item.hasDescendants('Persistent Volume Claim') || item.hasDescendants('Persistent Volume');
    })
```
## Rule Script
```js
mark("stateful-application")

```
