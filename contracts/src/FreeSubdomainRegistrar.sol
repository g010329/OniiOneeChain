// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface INameWrapper {
    function setSubnodeOwner(
        bytes32 node,
        string calldata label,
        address owner,
        uint32 fuses,
        uint64 expiry
    ) external;
}

contract FreeSubdomainRegistrar {
    INameWrapper public nameWrapper;
    bytes32 public parentNode;
    address public owner;

    mapping(address => string) public names;

    function store(address wallet, string memory name) public {
        names[wallet] = name;
    }

    function retrieve(address wallet) public view returns (string memory) {
        return names[wallet];
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor(INameWrapper _nameWrapper, bytes32 _parentNode) {
        nameWrapper = _nameWrapper;
        parentNode = _parentNode;
        owner = msg.sender;
    }

    function registerSubdomain(
        string calldata label,
        address newOwner
    ) external {
        nameWrapper.setSubnodeOwner(parentNode, label, newOwner, 0, 0); // No fuses, no expiry
        store(newOwner, label);
    }

    function changeOwner(address newOwner) external onlyOwner {
        owner = newOwner;
    }
}
