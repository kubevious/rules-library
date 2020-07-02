# Kubevious Rules Library

The **rules engine** is an extension for Kubevious to allow programmable validation and best practices enforcement for configuration and state objects in Kubernetes. Rules engine lets Kubernetes operators define validation custom rules to raise errors and warnings, beyond the built-in checks that come with Kubevious by default (like label mismatch, missing port, misused or overused objects, etc.). 

This repository is a community driven library for common rules that can be used to make Kuberentes safer to use. For detailed documentation on writing custom rules can be found [here](https://github.com/kubevious/kubevious/blob/master/docs/rules-engine.md).

## Best Practices
| Rule | Description |
| ---- | ----------- |
| [container-memory-usage](library/container-memory-usage) | Checks for container memory request to be set and marks containers as high and medium memory users. |
| [image-latest-tag-check](library/image-latest-tag-check) | Raises errors on container images that have latest tag. |
| [pvc-outside-statefulset](library/pvc-outside-statefulset) | Checks for PersistentVolumeClaims to configured for Pods managed by StatefulSets. |

## Safety
| Rule | Description |
| ---- | ----------- |
| [secret-accessor](library/secret-accessor) | Identifies Applications that access Kubernets secrets. |

## Smart Filters
| Rule | Description |
| ---- | ----------- |
| [fat-namespaces](library/fat-namespaces) | Identifies namespaces that are using large chunk of total cluster CPU and Memory resources. |
| [stateful-application](library/stateful-application) | Identifies applications that are exposed using Ingress. |
| [stateful-public-application](library/stateful-public-application) | Identifies applications that are exposed using Ingress and also have Persistent Volume Claims attached. |
