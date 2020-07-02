# Rules
Rules included in this library.

## Best Practices
| Rule | Description |
| ---- | ----------- |
| [container-memory-usage](container-memory-usage) | Checks for container memory request to be set and marks containers as high and medium memory users. |
| [image-latest-tag-check](image-latest-tag-check) | Raises errors on container images that have latest tag. |
| [pvc-outside-statefulset](pvc-outside-statefulset) | Checks for PersistentVolumeClaims to configured for Pods managed by StatefulSets. |

## Safety
| Rule | Description |
| ---- | ----------- |
| [secret-accessor](secret-accessor) | Identifies Applications that access Kubernets secrets. |

## Smart Filters
| Rule | Description |
| ---- | ----------- |
| [fat-namespaces](fat-namespaces) | Identifies namespaces that are using large chunk of total cluster CPU and Memory resources. |
| [stateful-application](stateful-application) | Identifies applications that are exposed using Ingress. |
| [stateful-public-application](stateful-public-application) | Identifies applications that are exposed using Ingress and also have Persistent Volume Claims attached. |
