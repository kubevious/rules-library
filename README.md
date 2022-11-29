[![Codefresh build status]( https://g.codefresh.io/api/badges/pipeline/kubevious/OSS%2Frules-library?type=cf-1)]( https://g.codefresh.io/public/accounts/kubevious/pipelines/new/638516d4e2f13d1b1ca9f80a)

# Kubevious Rules Library

This repository represents a library of rules for [Kubevious CLI](https://github.com/kubevious/cli) project to validate errors (typos, conflicts, misconfigurations) and violations of compliance and security best practices in Kubernetes and related cloud-native projects.

Kubevious rules are expressed in a domain-specific language called [Kubik](https://github.com/kubevious/kubik).

![Kubevious CLI Video](https://raw.githubusercontent.com/kubevious/media/master/cli/intro/demo_light.svg)

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
📜 **[istio-virtual-service-to-gateway-ref](istio/virtual-service-to-gateway-ref.yaml)**.
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


### 📂 K8S/GATEWAY-API
📜 **[gateway-class-ref](k8s/gateway-api/gateway-class-ref.yaml)**.
Validate Gateway to Class reference.


📜 **[http-route-gateway-ref](k8s/gateway-api/http-route-gateway-ref.yaml)**.
Validate HTTPRoute to Gateways reference.


### 📂 K8S/INGRESS
📜 **[ingress-ext-service-ref](k8s/ingress/ingress-ext-service-ref.yaml)**.
Validate Ingress (extension) to Service reference.


📜 **[ingress-service-ref](k8s/ingress/ingress-service-ref.yaml)**.
Validate Ingress to Service reference.


### 📂 K8S/NETWORK-POLICY
📜 **[network-policy-pod-selector-ref](k8s/network-policy/network-policy-pod-selector-ref.yaml)**.
Validate NetworkPolicy to PodSpec reference.


### 📂 K8S/POD-SPEC
📜 **[pod-spec-service-account-ref](k8s/pod-spec/service-account-ref.yaml)**.
Validate PodSpec to ServiceAccount reference.


📜 **[pod-spec-volume-config-map-ref](k8s/pod-spec/volume-config-map-ref.yaml)**.
Validate PodSpec volume mount ConfigMap reference.


📜 **[pod-spec-volume-pvc-ref](k8s/pod-spec/volume-pvc-ref.yaml)**.
Validate PodSpec volume mount PersistentVolumeClaim reference.


📜 **[pod-spec-volume-secret-ref](k8s/pod-spec/volume-secret-ref.yaml)**.
Validate PodSpec volume mount Secret reference.


### 📂 K8S/RBAC
📜 **[role-binding-role-ref](k8s/rbac/role-binding-role-ref.yaml)**.
Validate RoleBinding and ClusterRoleBinding to Role and ClusterRole reference.


📜 **[role-binding-service-account-ref](k8s/rbac/role-binding-service-account-ref.yaml)**.
Validate RoleBinding and ClusterRoleBinding to ServiceAccount subject reference.


### 📂 K8S/SERVICE
📜 **[service-selector-ref](k8s/service/service-selector-ref.yaml)**.
Validate Service to PodSpec label selector reference.



[//]: # (END_RULES_DESCRIPTION)

## Contributing
To submit your rules to the library follow the steps:
1. Find the right place for the rule under root directory.
2. Index the library using:
```sh
$ kubevious index-library .
```
3. Submit a pull request.

