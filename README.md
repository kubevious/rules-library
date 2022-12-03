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

Total Rules: 27
### Categories:
- [📂 ARGO-ROLLOUT (1)](#-argo-rollout)
- [📂 CERT-MANAGER (1)](#-cert-manager)
- [📂 ISTIO (1)](#-istio)
- [📂 K8S/CONTAINER (5)](#-k8scontainer)
- [📂 K8S/GATEWAY-API/GATEWAY (3)](#-k8sgateway-apigateway)
- [📂 K8S/GATEWAY-API/HTTP-ROUTE (2)](#-k8sgateway-apihttp-route)
- [📂 K8S/HPA (1)](#-k8shpa)
- [📂 K8S/INGRESS (2)](#-k8singress)
- [📂 K8S/NETWORK-POLICY (1)](#-k8snetwork-policy)
- [📂 K8S/POD-SPEC (4)](#-k8spod-spec)
- [📂 K8S/RBAC (2)](#-k8srbac)
- [📂 K8S/SERVICE (1)](#-k8sservice)
- [📂 K8S/WORKLOAD (1)](#-k8sworkload)
- [📂 KONG (2)](#-kong)
### Rules:
#### 📂 ARGO-ROLLOUT
📜 **[Validate Argo Rollout to Analysis Template reference.](argo-rollout/rollout-analysis-template-ref.yaml)**

#### 📂 CERT-MANAGER
📜 **[Validate CertManager Certificate to Issuer reference.](cert-manager/certificate-to-issuer-ref.yaml)**

#### 📂 ISTIO
📜 **[Validate Istio VirtualService to IstioGateway reference.](istio/virtual-service-to-gateway-ref.yaml)**

#### 📂 K8S/CONTAINER
📜 **[Validate ContainerSpec environment variable ConfigMap reference.](k8s/container/env-config-map-ref.yaml)**

📜 **[Validate ContainerSpec envFrom variables projection ConfigMap reference.](k8s/container/env-from-config-map-ref.yaml)**

📜 **[Validate ContainerSpec envFrom variables projection Secret reference.](k8s/container/env-from-secret-ref.yaml)**

📜 **[Validate ContainerSpec environment variable Secret reference.](k8s/container/env-secret-ref.yaml)**

📜 **[Validate ContainerSpec image to have non latest tag.](k8s/container/latest-image.yaml)**

#### 📂 K8S/GATEWAY-API/GATEWAY
📜 **[Validate Gateway to Certificate Secret reference.](k8s/gateway-api/gateway/certificate-ref.yaml)**

📜 **[Validate Gateway to GatewayClass reference.](k8s/gateway-api/gateway/gateway-class-ref.yaml)**

📜 **[Validate Gateway to have unique listeners.](k8s/gateway-api/gateway/unique-listeners.yaml)**

#### 📂 K8S/GATEWAY-API/HTTP-ROUTE
📜 **[Validate HTTPRoute to Backend reference.](k8s/gateway-api/http-route/backend-ref.yaml)**

📜 **[Validate HTTPRoute to Gateway reference.](k8s/gateway-api/http-route/gateway-ref.yaml)**

#### 📂 K8S/HPA
📜 **[Validate HorizontalPodAutoscaler to scale target reference.](k8s/hpa/hpa-scale-target-ref.yaml)**

#### 📂 K8S/INGRESS
📜 **[Validate Ingress (extension) to Service reference.](k8s/ingress/ingress-ext-service-ref.yaml)**

📜 **[Validate Ingress to Service reference.](k8s/ingress/ingress-service-ref.yaml)**

#### 📂 K8S/NETWORK-POLICY
📜 **[Validate NetworkPolicy to PodSpec reference.](k8s/network-policy/network-policy-pod-selector-ref.yaml)**

#### 📂 K8S/POD-SPEC
📜 **[Validate PodSpec to ServiceAccount reference.](k8s/pod-spec/service-account-ref.yaml)**

📜 **[Validate PodSpec volume mount ConfigMap reference.](k8s/pod-spec/volume-config-map-ref.yaml)**

📜 **[Validate PodSpec volume mount PersistentVolumeClaim reference.](k8s/pod-spec/volume-pvc-ref.yaml)**

📜 **[Validate PodSpec volume mount Secret reference.](k8s/pod-spec/volume-secret-ref.yaml)**

#### 📂 K8S/RBAC
📜 **[Validate RoleBinding and ClusterRoleBinding to Role and ClusterRole reference.](k8s/rbac/role-binding-role-ref.yaml)**

📜 **[Validate RoleBinding and ClusterRoleBinding to ServiceAccount subject reference.](k8s/rbac/role-binding-service-account-ref.yaml)**

#### 📂 K8S/SERVICE
📜 **[Validate Service to PodSpec label selector reference.](k8s/service/service-selector-ref.yaml)**

#### 📂 K8S/WORKLOAD
📜 **[Checks Deployments to have min/max replicas - with or without HPAs.](k8s/workload/replica-count-check.yaml)**

#### 📂 KONG
📜 **[Validate KongConsumer to Credential Secret reference.](kong/consumer-to-credential-secret-ref.yaml)**

📜 **[Validate Ingress and Service to Kong Plugin reference](kong/plugin-ref.yaml)**


[//]: # "END_RULES_DESCRIPTION"

## Contributing
To submit your rules to the library follow the steps:
1. Find the right place for the rule under root directory.
2. Index the library using:
```sh
$ kubevious index-library .
```
3. Submit a pull request.

