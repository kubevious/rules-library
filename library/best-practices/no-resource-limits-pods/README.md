# No Resource Limits Pods
**ID:** best-practices/no-resource-limits-pods

**Description:** Identifies pods that do not have resource limits set

## Target Script
```js
select('Pod')

```
## Rule Script
```js
for(var container of item.config.spec.containers)
{
  if (!container.resources.limit)
  {
    warning('No resource limit set');
  }
}
```
