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