# Public Application
**ID:** curious/public-application
**Description:** Identifies applications that are exposed using Ingress.

## Target Script
```js
select('Application')
    .filter(({item}) => {
        return item.hasDescendants('Ingress');
    })
```
## Rule Script
```js
mark("public-application")

```
