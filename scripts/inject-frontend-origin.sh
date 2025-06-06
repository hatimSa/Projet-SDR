#!/bin/bash

set -euo pipefail

echo "Fetching Frontend LoadBalancer IP..."

# Wait for the frontend service to have a public IP
FRONTEND_IP=""
for i in {1..10}; do
  FRONTEND_IP=$(kubectl get svc frontend -o jsonpath='{.status.loadBalancer.ingress[0].ip}' 2>/dev/null || true)
  if [[ -n "$FRONTEND_IP" ]]; then
    break
  fi
  echo "Waiting for frontend IP... attempt $i"
  sleep 5
done

if [[ -z "$FRONTEND_IP" ]]; then
  echo "ERROR: Could not obtain Frontend IP."
  exit 1
fi

echo "Frontend IP is $FRONTEND_IP"

# Inject env var into gateway deployment
echo "Injecting APP_FRONTEND_ORIGIN into gateway deployment..."
kubectl set env deployment/gateway APP_FRONTEND_ORIGIN="http://$FRONTEND_IP"

# Inject env var into auth-service deployment
echo "Injecting APP_FRONTEND_ORIGIN into auth-service deployment..."
kubectl set env deployment/auth-service APP_FRONTEND_ORIGIN="http://$FRONTEND_IP"

# Restart deployments to apply env changes
echo "Restarting gateway deployment..."
kubectl rollout restart deployment/gateway

echo "Restarting auth-service deployment..."
kubectl rollout restart deployment/auth-service

echo "Frontend IP injection completed successfully."