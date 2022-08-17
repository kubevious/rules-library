select('Pod')
    .filter(({item}) => {
        return (item.parent.name != 'StatefulSet');
    })
.child('Persistent Volume Claim')