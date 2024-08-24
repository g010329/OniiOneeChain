# OniiOneeChain

A Vtuber related project

# Deploy

./script/deploy.sh

# Contract Addresses

- Subdomain Registrar: 0xad89B2e2850590B1cD59465572441776B77aD7b1

# Setup

## Permission

cast send 0x0635513f179D50A207757E05759CbD106d7dFcE8 "setApprovalForAll(address,bool)" 0xad89B2e2850590B1cD59465572441776B77aD7b1 true --private-key {private_key} --rpc-url https://ethereum-sepolia.blockpi.network/v1/rpc/public

# Test

## Register Subdomain

cast send 0xad89B2e2850590B1cD59465572441776B77aD7b1 "registerSubdomain(string,address)" "beans" {address} --rpc-url https://ethereum-sepolia.blockpi.network/v1/rpc/public --private-key {private_key}

## Verify Subdomain Owner

### Mainnet

cast call 0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e "owner(bytes32)" $(cast namehash "harryc.eth") --rpc-url https://eth.llamarpc.com

### Sepolia

cast call 0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e "owner(bytes32)" $(cast namehash "gawrgura.eth") --rpc-url https://ethereum-sepolia.blockpi.network/v1/rpc/public

cast call 0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e "owner(bytes32)" $(cast namehash "grace.gawrgura.eth") --rpc-url https://ethereum-sepolia.blockpi.network/v1/rpc/public

`cast call 0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e "owner(bytes32)" $(cast namehash "test12345.gawrgura.eth") --rpc-url https://ethereum-sepolia.blockpi.network/v1/rpc/public` => 0
