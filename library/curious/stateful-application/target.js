select('Application')
    .filter(({item}) => {
        return item.hasDescendants('Persistent Volume Claim') || item.hasDescendants('Persistent Volume');
    })