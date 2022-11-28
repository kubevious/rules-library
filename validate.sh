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
helm template traefik/traefik --include-crds | kubevious guard --skip-community-rules ./index.yaml --stream
RESULT=$?
if [ $RESULT -ne 0 ]; then
  echo "Validate Traefik Failed"
  exit 1;
fi