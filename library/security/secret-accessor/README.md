# Secret Accessors
**ID:** security/secret-accessor

**Description:** Identifies applications (outside of kube-system) that access Kubernets secrets.

## Target Script
```js
select('Namespace')
    .filter(({item}) => item.name != 'kube-system')
.child('Application')
    .filter(({item}) => {
        for(var svcAccount of item.children('Service Account'))
        {
            var roleMatrix = svcAccount.getProperties ('resource-role-matrix');
            for(var row of roleMatrix.rows)
            {
                if (row.resource == 'secrets')
                {
                   return true;
                }
            }
        }
        return false;
    })
```
## Rule Script
```js
mark('secret-accessors')
```
