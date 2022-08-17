# Persistent Volume Claims Outside of StatefulSets
**ID:** best-practices/pvc-outside-statefulset
**Description:** Checks for PersistentVolumeClaims to configured for Pods managed by StatefulSets.

## Target Script
```js
select('Pod')
    .filter(({item}) => {
        return (item.parent.name != 'StatefulSet');
    })
.child('Persistent Volume Claim')
```
## Rule Script
```js
warning('Using a PVC on Pods that are not launched by StatefulSet.')
```
