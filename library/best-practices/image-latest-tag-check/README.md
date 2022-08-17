# Image Latest Tag Check
Raises errors on container images that have **latest** tag.

## Target Script
```js
select('Image')
```

## Rule Script
```js
if (item.props.tag == 'latest') {
    error("You are using latest image tag. Please don't do that.");
}
```