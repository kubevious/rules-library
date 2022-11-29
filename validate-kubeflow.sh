#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"

cd ${MY_DIR}

rm -rf runtime/kubeflow-pipelines.git
git clone https://github.com/kubeflow/pipelines.git runtime/kubeflow-pipelines.git

kustomize build runtime/kubeflow-pipelines.git/manifests/kustomize/cluster-scoped-resources > runtime/kubeflow-cluster-scoped-resources.yaml
RESULT=$?
if [ $RESULT -ne 0 ]; then
  echo "Failed to KUSTOMIZE Kubeflow"
  exit 1;
fi

kustomize build runtime/kubeflow-pipelines.git/manifests/kustomize/env/platform-agnostic > runtime/kubeflow-env-platform-agnostic.yaml
RESULT=$?
if [ $RESULT -ne 0 ]; then
  echo "Failed to KUSTOMIZE Kubeflow"
  exit 1;
fi

cat >runtime/kubeflow-webhook-server-tls.yaml <<EOL
apiVersion: v1
kind: Secret
metadata:
  name: webhook-server-tls
  namespace: kubeflow
EOL

echo "> "
echo "> Running Kubeflow Validate..."
echo "> "
kubevious guard --skip-community-rules ./index.yaml ./runtime/kubeflow-cluster-scoped-resources.yaml ./runtime/kubeflow-env-platform-agnostic.yaml ./runtime/kubeflow-webhook-server-tls.yaml
RESULT=$?
if [ $RESULT -ne 0 ]; then
  echo "Validate Kubeflow Failed"
  exit 1;
fi

rm -rf runtime/*.git
rm -rf runtime/*.yaml 