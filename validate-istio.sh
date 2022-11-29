#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"

cd ${MY_DIR}


echo "> "
echo "> Running Istio-Classic Validate..."
echo "> "
kubevious guard --skip-community-rules ./index.yaml \
  https://raw.githubusercontent.com/istio/istio/master/manifests/charts/base/crds/crd-all.gen.yaml \
  https://raw.githubusercontent.com/kubevious/demos/main/guard/10-istio-bookinfo/bookinfo.yaml \
  https://raw.githubusercontent.com/kubevious/demos/main/guard/10-istio-bookinfo/istio-classic/bookinfo-gateway.yaml \
  https://raw.githubusercontent.com/kubevious/demos/main/guard/10-istio-bookinfo/istio-classic/destination-rule-all.yaml
RESULT=$?
if [ $RESULT -ne 0 ]; then
  echo "Validate Istio-Classic Failed"
  exit 1;
fi

cat >runtime/secret-gateway-api-admission.yaml <<EOL
apiVersion: v1
kind: Secret
metadata:
  name: gateway-api-admission
  namespace: gateway-system
EOL

echo "> "
echo "> Running Istio-GatewayApi Validate..."
echo "> "
kubevious guard --skip-community-rules ./index.yaml \
  https://github.com/kubernetes-sigs/gateway-api/releases/download/v0.5.1/standard-install.yaml \
  ./runtime/secret-gateway-api-admission.yaml \
  https://raw.githubusercontent.com/kubevious/demos/main/guard/10-istio-bookinfo/bookinfo.yaml \
  https://raw.githubusercontent.com/kubevious/demos/main/guard/10-istio-bookinfo/gateway-api/bookinfo-gateway.yaml \
  https://raw.githubusercontent.com/kubevious/demos/main/guard/10-istio-bookinfo/gateway-api/bookinfo-versions.yaml \
  https://raw.githubusercontent.com/kubevious/demos/main/guard/10-istio-bookinfo/gateway-api/mock-gateway-class.yaml
RESULT=$?
if [ $RESULT -ne 0 ]; then
  echo "Validate Istio-GatewayApi Failed"
  exit 1;
fi

rm -rf runtime/*.yaml 
