#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"

cd ${MY_DIR}

echo "> "
echo "> Running HipsterShop Validate..."
echo "> "
kubevious guard --skip-community-rules ./index.yaml https://raw.githubusercontent.com/kubevious/demos/main/guard/01-hipster-shop/hipster-chart/templates/manifests.yaml
RESULT=$?
if [ $RESULT -ne 0 ]; then
  echo "Validate HipsterShop Failed"
  exit 1;
fi

echo "> "
echo "> Running HipsterShop NetworkPolicies Validate..."
echo "> "
kubevious guard --skip-community-rules ./index.yaml https://raw.githubusercontent.com/kubevious/demos/main/guard/01-hipster-shop/hipster-chart/templates/manifests.yaml https://raw.githubusercontent.com/kubevious/demos/main/guard/01-hipster-shop/network-policies-chart/templates/network-policy-adservice.yaml
RESULT=$?
if [ $RESULT -ne 0 ]; then
  echo "Validate HipsterShop NetworkPolicies Failed"
  exit 1;
fi

echo "> "
echo "> Running HipsterShop Istio Validate..."
echo "> "
kubevious guard --skip-community-rules ./index.yaml https://raw.githubusercontent.com/kubevious/demos/main/guard/01-hipster-shop/hipster-chart/templates/manifests.yaml https://raw.githubusercontent.com/kubevious/demos/main/guard/01-hipster-shop/istio-chart/templates/manifests.yaml https://raw.githubusercontent.com/istio/istio/master/manifests/charts/base/crds/crd-all.gen.yaml
RESULT=$?
if [ $RESULT -ne 0 ]; then
  echo "Validate HipsterShop Istio Failed"
  exit 1;
fi

echo "> "
echo "> Running Traefik Validate..."
echo "> "
helm repo add traefik https://traefik.github.io/charts
helm template traefik/traefik --include-crds | kubevious guard --skip-community-rules ./index.yaml --stream
RESULT=$?
if [ $RESULT -ne 0 ]; then
  echo "Validate Traefik Failed"
  exit 1;
fi

echo "> "
echo "> Running Prometheus Validate..."
echo "> "
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm template prometheus-community/prometheus | kubevious guard --skip-community-rules ./index.yaml --stream
RESULT=$?
if [ $RESULT -ne 0 ]; then
  echo "Validate Prometheus Failed"
  exit 1;
fi


echo "> "
echo "> Running Grafana Validate..."
echo "> "
helm repo add grafana https://grafana.github.io/helm-charts
helm template grafana/grafana --namespace grafana --set persistence.enabled=true | kubevious guard --skip-community-rules ./index.yaml --stream
RESULT=$?
if [ $RESULT -ne 0 ]; then
  echo "Validate Grafana Failed"
  exit 1;
fi


./validate-kubeflow.sh
RESULT=$?
if [ $RESULT -ne 0 ]; then
  echo "Validate Kubeflow Failed"
  exit 1;
fi