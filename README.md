[![Codefresh build status]( https://g.codefresh.io/api/badges/pipeline/kubevious/OSS%2Frules-library?type=cf-1)]( https://g.codefresh.io/public/accounts/kubevious/pipelines/new/638516d4e2f13d1b1ca9f80a)

# Kubevious Rules Library

This repository represents a library of rules for [Kubevious CLI](https://github.com/kubevious/cli) project to validate errors (typos, conflicts, misconfigurations) and violations of compliance and security best practices in Kubernetes and related cloud-native projects.

Kubevious rules are expressed in a domain-specific language called [Kubik](https://github.com/kubevious/kubik).

![Kubevious CLI Video](https://raw.githubusercontent.com/kubevious/media/master/cli/intro/demo_light.gif)

## Library Contents

[//]: # "BEGIN_RULES_DESCRIPTION"

[//]: # "!!! DO NOT EDIT. AUTO-GENERATED WITH:"
[//]: # "$ kubevious index-library ."
[//]: # "OR PRE-COMMIT HOOK"
[//]: # "$ kubevious install-git-hook rule-library ."

Total Rules: 36
### Locations:
- [📂 ARGO-ROLLOUT (1)](#-argo-rollout)
- [📂 CERT-MANAGER (2)](#-cert-manager)
- [📂 GCP-CONFIG-CONNECTOR/SQL (3)](#-gcp-config-connectorsql)
- [📂 ISTIO (1)](#-istio)
- [📂 K8S/CONTAINER (7)](#-k8scontainer)
- [📂 K8S/GATEWAY-API/GATEWAY (3)](#-k8sgateway-apigateway)
- [📂 K8S/GATEWAY-API/HTTP-ROUTE (2)](#-k8sgateway-apihttp-route)
- [📂 K8S/HPA (1)](#-k8shpa)
- [📂 K8S/INGRESS (5)](#-k8singress)
- [📂 K8S/NETWORK-POLICY (1)](#-k8snetwork-policy)
- [📂 K8S/POD-SPEC (4)](#-k8spod-spec)
- [📂 K8S/RBAC (2)](#-k8srbac)
- [📂 K8S/SERVICE (1)](#-k8sservice)
- [📂 K8S/WORKLOAD (1)](#-k8sworkload)
- [📂 KONG (2)](#-kong)
### Rules:
#### 📂 ARGO-ROLLOUT
📜 **[Validate Argo Rollout to Analysis Template reference.](argo-rollout/rollout-analysis-template-ref.yaml)**
- 🏷️ argo 🏷️ rollout 🏷️ analysis 🏷️ reference

#### 📂 CERT-MANAGER
📜 **[Validate CertManager Certificate to Issuer reference.](cert-manager/certificate-to-issuer-ref.yaml)**
- 🏷️ cert-manager 🏷️ certificate 🏷️ issuer 🏷️ reference

📜 **[Validate Ingress to CertManager Issuer reference.](cert-manager/ingress-to-cert-issuer-ref.yaml)**
- 🏷️ cert-manager 🏷️ ingress 🏷️ issuer 🏷️ reference

#### 📂 GCP-CONFIG-CONNECTOR/SQL
📜 **[Validate GCP Config Connector SQL Database to Instance reference.](gcp-config-connector/sql/sql-database-to-instance-ref.yaml)**
- 🏷️ gcp-config-connector 🏷️ sql-database 🏷️ sql-instance 🏷️ reference

📜 **[Validate GCP Config Connector SQL User to Instance reference.](gcp-config-connector/sql/sql-user-to-instance-ref.yaml)**
- 🏷️ gcp-config-connector 🏷️ sql-user 🏷️ sql-instance 🏷️ reference

📜 **[Validate GCP Config Connector SQL User to Password Secret reference.](gcp-config-connector/sql/sql-user-to-password-secret-ref.yaml)**
- 🏷️ gcp-config-connector 🏷️ sql-user 🏷️ secret 🏷️ reference

#### 📂 ISTIO
📜 **[Validate Istio VirtualService to IstioGateway reference.](istio/virtual-service-to-gateway-ref.yaml)**
- 🏷️ istio 🏷️ virtual-service 🏷️ istio-gateway 🏷️ reference

#### 📂 K8S/CONTAINER
📜 **[Validate ContainerSpec environment variable ConfigMap reference.](k8s/container/env-config-map-ref.yaml)**
- 🏷️ k8s 🏷️ container 🏷️ environment-variable 🏷️ config-map 🏷️ reference

📜 **[Validate ContainerSpec envFrom variables projection ConfigMap reference.](k8s/container/env-from-config-map-ref.yaml)**
- 🏷️ k8s 🏷️ container 🏷️ environment-variable 🏷️ config-map 🏷️ reference

📜 **[Validate ContainerSpec envFrom variables projection Secret reference.](k8s/container/env-from-secret-ref.yaml)**
- 🏷️ k8s 🏷️ container 🏷️ environment-variable 🏷️ secret 🏷️ reference

📜 **[Validate ContainerSpec environment variable Secret reference.](k8s/container/env-secret-ref.yaml)**
- 🏷️ k8s 🏷️ container 🏷️ environment-variable 🏷️ secret 🏷️ reference

📜 **[Validate ContainerSpec image to have non latest tag.](k8s/container/latest-image.yaml)**
- 🏷️ k8s 🏷️ container 🏷️ image 🏷️ latest

📜 **[Validate ContainerSpec resource requests to be less or equal to the limits.](k8s/container/resource-request-limit-check.yaml)**
- 🏷️ k8s 🏷️ container 🏷️ resources 🏷️ cpu 🏷️ memory 🏷️ request 🏷️ limit

📜 **[Validate ContainerSpec volume mount to PodSpec volume reference.](k8s/container/volume-mount-ref.yaml)**
- 🏷️ k8s 🏷️ container 🏷️ volume 🏷️ volume-mount 🏷️ reference

#### 📂 K8S/GATEWAY-API/GATEWAY
📜 **[Validate Gateway to Certificate Secret reference.](k8s/gateway-api/gateway/certificate-ref.yaml)**
- 🏷️ k8s 🏷️ gateway-api 🏷️ gateway 🏷️ certificate 🏷️ reference

📜 **[Validate Gateway to GatewayClass reference.](k8s/gateway-api/gateway/gateway-class-ref.yaml)**
- 🏷️ k8s 🏷️ gateway-api 🏷️ gateway 🏷️ gateway-class 🏷️ reference

📜 **[Validate Gateway to have unique listeners.](k8s/gateway-api/gateway/unique-listeners.yaml)**
- 🏷️ k8s 🏷️ gateway-api 🏷️ gateway 🏷️ unique-listeners

#### 📂 K8S/GATEWAY-API/HTTP-ROUTE
📜 **[Validate HTTPRoute to Backend reference.](k8s/gateway-api/http-route/backend-ref.yaml)**
- 🏷️ k8s 🏷️ gateway-api 🏷️ http-route 🏷️ backend 🏷️ reference

📜 **[Validate HTTPRoute to Gateway reference.](k8s/gateway-api/http-route/gateway-ref.yaml)**
- 🏷️ k8s 🏷️ gateway-api 🏷️ http-route 🏷️ gateway 🏷️ reference

#### 📂 K8S/HPA
📜 **[Validate HorizontalPodAutoscaler to scale target reference.](k8s/hpa/hpa-scale-target-ref.yaml)**
- 🏷️ k8s 🏷️ hpa 🏷️ target 🏷️ reference

#### 📂 K8S/INGRESS
📜 **[Validate Ingress (extension) to Service reference.](k8s/ingress/ingress-ext-service-ref.yaml)**
- 🏷️ k8s 🏷️ ingress 🏷️ ingress-extension 🏷️ service 🏷️ reference

📜 **[Validate Ingress to Service reference.](k8s/ingress/ingress-service-ref.yaml)**
- 🏷️ k8s 🏷️ ingress 🏷️ service 🏷️ reference

📜 **[Validate Ingress TLS and rule domain match.](k8s/ingress/ingress-tls-rule-domain-match.yaml)**
- 🏷️ k8s 🏷️ ingress 🏷️ ingress-extension 🏷️ tls 🏷️ domain

📜 **[Validate Ingresses to have unique routing rules.](k8s/ingress/ingress-unique-route-rules.yaml)**
- 🏷️ k8s 🏷️ ingress 🏷️ ingress-extension 🏷️ unique-route

📜 **[Validate IngressClasses to have at most only one default.](k8s/ingress/multiple-default-ingress-classes.yaml)**
- 🏷️ k8s 🏷️ ingress-class 🏷️ unique-default

#### 📂 K8S/NETWORK-POLICY
📜 **[Validate NetworkPolicy to PodSpec reference.](k8s/network-policy/network-policy-pod-selector-ref.yaml)**
- 🏷️ k8s 🏷️ network-policy 🏷️ pod-spec 🏷️ reference

#### 📂 K8S/POD-SPEC
📜 **[Validate PodSpec to ServiceAccount reference.](k8s/pod-spec/service-account-ref.yaml)**
- 🏷️ k8s 🏷️ pod-spec 🏷️ service-account 🏷️ reference

📜 **[Validate PodSpec volume mount ConfigMap reference.](k8s/pod-spec/volume-config-map-ref.yaml)**
- 🏷️ k8s 🏷️ pod-spec 🏷️ config-map 🏷️ volume 🏷️ reference

📜 **[Validate PodSpec volume mount PersistentVolumeClaim reference.](k8s/pod-spec/volume-pvc-ref.yaml)**
- 🏷️ k8s 🏷️ pod-spec 🏷️ pvc 🏷️ volume 🏷️ reference

📜 **[Validate PodSpec volume mount Secret reference.](k8s/pod-spec/volume-secret-ref.yaml)**
- 🏷️ k8s 🏷️ pod-spec 🏷️ secret 🏷️ volume 🏷️ reference

#### 📂 K8S/RBAC
📜 **[Validate RoleBinding and ClusterRoleBinding to Role and ClusterRole reference.](k8s/rbac/role-binding-role-ref.yaml)**
- 🏷️ k8s 🏷️ rbac 🏷️ binding 🏷️ role 🏷️ reference

📜 **[Validate RoleBinding and ClusterRoleBinding to ServiceAccount subject reference.](k8s/rbac/role-binding-service-account-ref.yaml)**
- 🏷️ k8s 🏷️ rbac 🏷️ binding 🏷️ service-account 🏷️ reference

#### 📂 K8S/SERVICE
📜 **[Validate Service to PodSpec label selector reference.](k8s/service/service-selector-ref.yaml)**
- 🏷️ k8s 🏷️ service 🏷️ pod-spec 🏷️ reference

#### 📂 K8S/WORKLOAD
📜 **[Checks Deployments to have min/max replicas - with or without HPAs.](k8s/workload/replica-count-check.yaml)**
- 🏷️ k8s 🏷️ deployment 🏷️ replica-count

#### 📂 KONG
📜 **[Validate KongConsumer to Credential Secret reference.](kong/consumer-to-credential-secret-ref.yaml)**
- 🏷️ kong 🏷️ consumer 🏷️ credential 🏷️ secret 🏷️ reference

📜 **[Validate Ingress and Service to Kong Plugin reference](kong/plugin-ref.yaml)**
- 🏷️ kong 🏷️ ingress 🏷️ service 🏷️ plugin 🏷️ reference


[//]: # "END_RULES_DESCRIPTION"

## Contributing
To submit your rules to the library follow the steps:
1. Find the right place for the rule under root directory.
2. Index the library using:
```sh
$ kubevious index-library .
```
3. Submit a pull request.

