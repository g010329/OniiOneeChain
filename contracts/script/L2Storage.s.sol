// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import "../src/L2Storage.sol";

contract DeployL2StorageScript is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        L2Storage announcer =  L2Storage(
          0xad89B2e2850590B1cD59465572441776B77aD7b1
        );
        console.logAddress(address(announcer));
        vm.stopBroadcast();
    }
}
