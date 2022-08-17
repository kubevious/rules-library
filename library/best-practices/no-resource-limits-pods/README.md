# No Resource Limits Pods
Identifies pods that do not have resource limits set

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