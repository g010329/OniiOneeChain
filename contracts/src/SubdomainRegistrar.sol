// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@ensdomains/ens-contracts/contracts/subdomainregistrar/ForeverSubdomainRegistrar.sol";

contract FreeSubdomainRegistrar is ForeverSubdomainRegistrar {
    constructor(
        ENS ens,
        bytes32 domainNode,
        address resolver
    ) ForeverSubdomainRegistrar(ens, domainNode, resolver) {}

    function registerFreeSubdomain(
        string calldata label,
        address owner
    ) external {
        register(label, owner);
    }
}
