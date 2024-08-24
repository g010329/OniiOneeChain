#!/bin/bash

# Load environment variables
source .env

# Check if RPC URL and API Key are set
if [ -z "$SEPOLIA_RPC_URL" ]; then
  echo "Sepolia RPC URL is not set in .env file."
  exit 1
fi

if [ -z "$SEPOLIA_SCAN_API_KEY" ]; then
  echo "Sepolia Etherscan API Key is not set in .env file."
  exit 1
fi

# Deploy the contract
echo "Deploying FreeSubdomainRegistrar to Sepolia..."

cmd="forge script DeploySubdomainRegistrarScript --rpc-url \"$SEPOLIA_RPC_URL\" --verify --etherscan-api-key \"$SEPOLIA_SCAN_API_KEY\" --broadcast"

# Execute the command
eval "$cmd"

echo "Deployment to Sepolia completed."