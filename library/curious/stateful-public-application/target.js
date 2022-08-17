select('Application')
    .filter(({item}) => {
        return item.hasDescendants('Ingress') && item.hasDescendants('Persistent Volume Claim');
    })