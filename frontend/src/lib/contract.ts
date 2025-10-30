export const wagmiContractConfig = {
  address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  abi: [
    { type: "constructor", inputs: [], stateMutability: "nonpayable" },
    {
      type: "function",
      name: "OWNER",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "deleteArtist",
      inputs: [{ name: "_artistId", type: "uint256", internalType: "uint256" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "getAllArtists",
      inputs: [],
      outputs: [{ name: "", type: "address[]", internalType: "address[]" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getArtistById",
      inputs: [{ name: "_artistId", type: "uint256", internalType: "uint256" }],
      outputs: [{ name: "artist", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "registerArtist",
      inputs: [{ name: "_artist", type: "address", internalType: "address" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "ArtistRemoved",
      inputs: [
        {
          name: "artist",
          type: "address",
          indexed: false,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "NewArtistRegistered",
      inputs: [
        {
          name: "artist",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "artistId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "error",
      name: "ArtistAlreadyRegistered",
      inputs: [{ name: "artist", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "ArtistUnknown",
      inputs: [{ name: "artistId", type: "uint256", internalType: "uint256" }],
    },
  ],
} as const;
