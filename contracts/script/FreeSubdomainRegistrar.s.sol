// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import "../src/FreeSubdomainRegistrar.sol";

contract DeploySubdomainRegistrarScript is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        INameWrapper nameWrapper = INameWrapper(
            vm.envAddress("NAME_WRAPPER_ADDRESS")
        );
        console.logAddress(address(nameWrapper));

        bytes32 parentNode = vm.envBytes32("PARENT_NODE");

        FreeSubdomainRegistrar registrar = new FreeSubdomainRegistrar(
            nameWrapper,
            parentNode
        );
        console.logAddress(address(registrar));

        vm.stopBroadcast();
    }
}
