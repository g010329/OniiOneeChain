export const ensAbi = [
  {
    inputs: [
      {
        internalType: "contract INameWrapper",
        name: "_nameWrapper",
        type: "address",
      },
      { internalType: "bytes32", name: "_parentNode", type: "bytes32" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "changeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nameWrapper",
    outputs: [
      { internalType: "contract INameWrapper", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "parentNode",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "label", type: "string" },
      { internalType: "address", name: "newOwner", type: "address" },
    ],
    name: "registerSubdomain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
