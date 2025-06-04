#!/bin/bash

echo "Setting GKE credentials..."
gcloud container clusters get-credentials $1 --region=$2

echo "Fetching Gateway external IP..."
GATEWAY_IP=$(kubectl get svc gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
echo "Gateway IP: $GATEWAY_IP"

echo "Creating frontend config map..."
kubectl create configmap frontend-config --from-literal=config.json="{\"apiBaseUrl\": \"http://$GATEWAY_IP\"}" --dry-run=client -o yaml | kubectl apply -f -