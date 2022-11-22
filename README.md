# Kubevious Rules Library

This repository represents a library of rules for [Kubevious CLI](https://github.com/kubevious/cli) project to validate errors (typos, conflicts, misconfigurations) and violations of compliance and security best-practices in Kubernetes and related cloud-native projects.

## Library Rules

[//]: # (BEGIN_RULES_DESCRIPTION)

[//]: # (!!! DO NOT EDIT. AUTO-GENERATED WITH:)
[//]: # ($ kubevious index-library .)
[//]: # (OR PRE-COMMIT HOOK)
[//]: # ($ kubevious install-git-hook rule-library .)

### 📂 CERT-MANAGER
📜 **[certificate-to-issuer-ref](cert-manager/certificate-to-issuer-ref.yaml)**.
Validate CertManager Certificate to Issuer reference.


### 📂 ISTIO
📜 **[virtual-service-to-gateway-ref](istio/virtual-service-to-gateway-ref.yaml)**.
Validate Istio VirtualService to IstioGateway reference.


### 📂 K8S/CONTAINER
📜 **[container-env-config-map-ref](k8s/container/env-config-map-ref.yaml)**.
Validate ContainerSpec environment variable ConfigMap reference.


📜 **[container-env-from-config-map-ref](k8s/container/env-from-config-map-ref.yaml)**.
Validate ContainerSpec envFrom variables projection ConfigMap reference.


📜 **[container-env-from-secret-ref](k8s/container/env-from-secret-ref.yaml)**.
Validate ContainerSpec envFrom variables projection Secret reference.


📜 **[container-env-secret-ref](k8s/container/env-secret-ref.yaml)**.
Validate ContainerSpec environment variable Secret reference.


📜 **[container-latest-image](k8s/container/latest-image.yaml)**.
Validate ContainerSpec image to have non latest tag.


### 📂 K8S/POD-SPEC
📜 **[pod-spec-volume-config-map-ref](k8s/pod-spec/volume-config-map-ref.yaml)**.
Validate PodSpec volume mount ConfigMap reference.


📜 **[pod-spec-volume-pvc-ref](k8s/pod-spec/volume-pvc-ref.yaml)**.
Validate PodSpec volume mount PersistentVolumeClaim reference.


📜 **[pod-spec-volume-secret-ref](k8s/pod-spec/volume-secret-ref.yaml)**.
Validate PodSpec volume mount Secret reference.


### 📂 K8S/SERVICE
📜 **[service-selector-ref](k8s/service/service-selector-ref.yaml)**.
Validate Service to PodSpec label selector reference.



[//]: # (END_RULES_DESCRIPTION)

## Contributing
To submit your rules to the library follow the steps:
1. Find the right place for the rule under [rules/](rules/) directory.
2. Index the library using:
```sh
$ kubevious index-library .
```
3. Submit a pull request.

