export const chamberAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  { type: "fallback", stateMutability: "payable" },
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    name: "accountDelegation",
    inputs: [
      { name: "userAddress", type: "address", internalType: "address" },
      { name: "tokenID", type: "uint256", internalType: "uint256" },
    ],
    outputs: [
      { name: "amountDelegated", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "proposalId", type: "uint256", internalType: "uint256" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "cancel",
    inputs: [{ name: "proposalId", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "constructMessageHash",
    inputs: [
      { name: "proposalId", type: "uint256", internalType: "uint256" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "create",
    inputs: [
      { name: "targets", type: "address[]", internalType: "address[]" },
      { name: "values", type: "uint256[]", internalType: "uint256[]" },
      { name: "datas", type: "bytes[]", internalType: "bytes[]" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "demote",
    inputs: [
      { name: "amount", type: "uint256", internalType: "uint256" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "domainSeparator",
    inputs: [],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "execute",
    inputs: [
      { name: "proposalId", type: "uint256", internalType: "uint256" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getLeaderboard",
    inputs: [],
    outputs: [
      { name: "leaders", type: "uint256[]", internalType: "uint256[]" },
      { name: "delegation", type: "uint256[]", internalType: "uint256[]" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "govToken",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      { name: "_memberToken", type: "address", internalType: "address" },
      { name: "_govToken", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "leaderboard",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "locked",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "memberToken",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nonce",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "onERC1155BatchReceived",
    inputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "uint256[]", internalType: "uint256[]" },
      { name: "", type: "uint256[]", internalType: "uint256[]" },
      { name: "", type: "bytes", internalType: "bytes" },
    ],
    outputs: [{ name: "", type: "bytes4", internalType: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onERC1155Received",
    inputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "bytes", internalType: "bytes" },
    ],
    outputs: [{ name: "", type: "bytes4", internalType: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onERC721Received",
    inputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "bytes", internalType: "bytes" },
    ],
    outputs: [{ name: "", type: "bytes4", internalType: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "promote",
    inputs: [
      { name: "amount", type: "uint256", internalType: "uint256" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "proposal",
    inputs: [{ name: "proposalId", type: "uint256", internalType: "uint256" }],
    outputs: [
      { name: "approvals", type: "uint256", internalType: "uint256" },
      { name: "state", type: "uint8", internalType: "enum IChamber.State" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setGuard",
    inputs: [{ name: "guard", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalDelegation",
    inputs: [{ name: "tokenID", type: "uint256", internalType: "uint256" }],
    outputs: [
      { name: "amountDelegated", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "verifySignature",
    inputs: [
      { name: "proposalId", type: "uint256", internalType: "uint256" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "signature", type: "bytes", internalType: "bytes" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "voted",
    inputs: [
      { name: "proposalId", type: "uint256", internalType: "uint256" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "ApprovedProposal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "approvals",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "CanceledProposal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ChangedGuard",
    inputs: [
      {
        name: "guard",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "CreatedProposal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "target",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
      {
        name: "value",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
      {
        name: "data",
        type: "bytes[]",
        indexed: false,
        internalType: "bytes[]",
      },
      {
        name: "voters",
        type: "uint256[5]",
        indexed: false,
        internalType: "uint256[5]",
      },
      {
        name: "nonce",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Demotion",
    inputs: [
      {
        name: "demoter",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      { name: "amt", type: "uint256", indexed: false, internalType: "uint256" },
      {
        name: "tokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ExecutedProposal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      { name: "version", type: "uint8", indexed: false, internalType: "uint8" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Promotion",
    inputs: [
      {
        name: "promoter",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      { name: "amt", type: "uint256", indexed: false, internalType: "uint256" },
      {
        name: "tokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ReceivedEther",
    inputs: [
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ReceivedFallback",
    inputs: [
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  { type: "error", name: "executionFailed", inputs: [] },
  { type: "error", name: "insufficientBalance", inputs: [] },
  {
    type: "error",
    name: "invalidApproval",
    inputs: [{ name: "message", type: "string", internalType: "string" }],
  },
  { type: "error", name: "invalidChangeAmount", inputs: [] },
  { type: "error", name: "invalidDemotion", inputs: [] },
  { type: "error", name: "invalidPromotion", inputs: [] },
  { type: "error", name: "invalidProposalState", inputs: [] },
  { type: "error", name: "invalidTokenOwner", inputs: [] },
  { type: "error", name: "invalidVote", inputs: [] },
] as const;
