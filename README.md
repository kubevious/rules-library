# Kubevious Rules Library

The **rules engine** is a way to extend [Kubevious](https://github.com/kubevious/kubevious) to support organizations needing additional rules beyond the built-in checks that come with Kubevious by default (such as label mismatch, missing port, misused or overused objects, etc.). The rules engine is an extension for Kubevious to allow programmable validation and best practices enforcement for configuration and state objects in Kubernetes. In addition to raising errors and warnings, the rules engine allows for the assigning of custom markers to identify items of particular interest. Examples are: publicly accessible applications, containers that use excessive resources, overprivileged containers, and many more.

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

## Contributing
To submit your rules to the library follow the steps:
1. Create a placeholder directory under [library/](library/). The name should clearly describe the rule.
2. Rule to be described in a **README.md** file. Follow the example of [image-latest-tag-check](library/image-latest-tag-check) rule.
3. Include **description**, **target script** and **rule script**.
4. Submit a pull request.