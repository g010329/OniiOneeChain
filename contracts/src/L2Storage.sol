// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.13;

interface IL1Blocks {
    function latestBlockNumber() external view returns (uint256);
}

contract L2Storage {
    address constant L1_BLOCKS_ADDRESS =
        0x5300000000000000000000000000000000000001;
    address constant L1_SLOAD_ADDRESS =
        0x0000000000000000000000000000000000000101;
    uint256 constant NUMBER_SLOT = 0;
    address immutable l1StorageAddr;

    mapping(string => bool) public isVip;
    mapping(string => string) public announcements;

    constructor(address _l1Storage) {
        l1StorageAddr = _l1Storage;
    }

    function setVip(string memory subDomainName, bool vip) public {
        isVip[subDomainName] = vip;
    }

    function latestL1BlockNumber() public view returns (uint256) {
        uint256 l1BlockNum = IL1Blocks(L1_BLOCKS_ADDRESS).latestBlockNumber();
        return l1BlockNum;
    }

    function getSubDomainNameFromL1(
        address wallet
    ) public view returns (string memory) {
        bytes memory data = abi.encodeWithSignature("names(address)", wallet);

        bool success;
        bytes memory ret;
        (success, ret) = L1_SLOAD_ADDRESS.staticcall(data);
        if (!success) {
            // Hardcoded to demonstrate in order to prevent a temporary issue.
            // revert("L1SLOAD failed");“
            return "o3o";
        }
        return abi.decode(ret, (string));
    }

    function sendAnnouncement(address wallet) public {
        string memory subDomainName = getSubDomainNameFromL1(wallet);
        if (isVip[subDomainName]) {
            // TODO: Send on chain announcement
            announcements[subDomainName] = "Hello, VIP!";
        }
    }

    // Maybe use this?
    // function l1SloadGetSubDomainName(address wallet) public view returns (string memory) {
    //   uint256 slot = computeOwnerSlot(wallet);
    //   bytes memory input = abi.encodePacked(l1StorageAddr, slot);
    //   bool success;
    //   bytes memory ret;
    //   (success, ret) = L1_SLOAD_ADDRESS.staticcall(input);
    //   if (!success) {
    //       revert("L1SLOAD failed");
    //   }
    //   return abi.decode(ret, (string));
    // }

    //   function computeOwnerSlot(address wallet) public pure returns (uint256) { // chante to internal after tests
    //   uint256 slotOfMapping = 0; // Slot of the mapping accounts
    //   bytes32 mappingSlot = keccak256(abi.encode(wallet, slotOfMapping));
    //   return uint256(mappingSlot);
    // }
}
