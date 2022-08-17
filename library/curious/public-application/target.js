select('Application')
    .filter(({item}) => {
        return item.hasDescendants('Ingress');
    })