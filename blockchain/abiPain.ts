export const abiPain = [{
    "inputs": [{
        "internalType": "address",
        "name": "_aggregator",
        "type": "address"
    }, {"internalType": "address", "name": "signer", "type": "address"}],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {"inputs": [], "name": "ApprovalCallerNotOwnerNorApproved", "type": "error"}, {
    "inputs": [],
    "name": "ApprovalQueryForNonexistentToken",
    "type": "error"
}, {"inputs": [], "name": "BalanceQueryForZeroAddress", "type": "error"}, {
    "inputs": [],
    "name": "InvalidQueryRange",
    "type": "error"
}, {"inputs": [], "name": "MintERC2309QuantityExceedsLimit", "type": "error"}, {
    "inputs": [],
    "name": "MintToZeroAddress",
    "type": "error"
}, {"inputs": [], "name": "MintZeroQuantity", "type": "error"}, {
    "inputs": [{
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }], "name": "OperatorNotAllowed", "type": "error"
}, {"inputs": [], "name": "OwnerQueryForNonexistentToken", "type": "error"}, {
    "inputs": [],
    "name": "OwnershipNotInitializedForExtraData",
    "type": "error"
}, {"inputs": [], "name": "TransferCallerNotOwnerNorApproved", "type": "error"}, {
    "inputs": [],
    "name": "TransferFromIncorrectOwner",
    "type": "error"
}, {"inputs": [], "name": "TransferToNonERC721ReceiverImplementer", "type": "error"}, {
    "inputs": [],
    "name": "TransferToZeroAddress",
    "type": "error"
}, {"inputs": [], "name": "URIQueryForNonexistentToken", "type": "error"}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
    }, {"indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }, {"indexed": false, "internalType": "bool", "name": "approved", "type": "bool"}],
    "name": "ApprovalForAll",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "uint256",
        "name": "fromTokenId",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "toTokenId", "type": "uint256"}, {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "to", "type": "address"}],
    "name": "ConsecutiveTransfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "PainOwner", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {"indexed": false, "internalType": "int128", "name": "lastPrice", "type": "int128"}, {
        "indexed": false,
        "internalType": "int128",
        "name": "prevPrice",
        "type": "int128"
    }, {"indexed": false, "internalType": "int128", "name": "diff", "type": "int128"}],
    "name": "MorePAIN",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {"indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "Transfer",
    "type": "event"
}, {
    "inputs": [],
    "name": "COLLECTION_SIZE",
    "outputs": [{"internalType": "uint16", "name": "", "type": "uint16"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "MINT_PRICE",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "tokensToMint", "type": "uint256"}, {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
    }, {"internalType": "address", "name": "caller", "type": "address"}],
    "name": "_validateSignature",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "to", "type": "address"}, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "availableSupply",
    "outputs": [{"internalType": "uint16", "name": "", "type": "uint16"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "tokensToMint", "type": "uint256"}, {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
    }, {"internalType": "address", "name": "user", "type": "address"}],
    "name": "canFreeMint",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_aggregator", "type": "address"}],
    "name": "changeAggregator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "explicitOwnershipOf",
    "outputs": [{
        "components": [{
            "internalType": "address",
            "name": "addr",
            "type": "address"
        }, {"internalType": "uint64", "name": "startTimestamp", "type": "uint64"}, {
            "internalType": "bool",
            "name": "burned",
            "type": "bool"
        }, {"internalType": "uint24", "name": "extraData", "type": "uint24"}],
        "internalType": "struct IERC721A.TokenOwnership",
        "name": "",
        "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256[]", "name": "tokenIds", "type": "uint256[]"}],
    "name": "explicitOwnershipsOf",
    "outputs": [{
        "components": [{
            "internalType": "address",
            "name": "addr",
            "type": "address"
        }, {"internalType": "uint64", "name": "startTimestamp", "type": "uint64"}, {
            "internalType": "bool",
            "name": "burned",
            "type": "bool"
        }, {"internalType": "uint24", "name": "extraData", "type": "uint24"}],
        "internalType": "struct IERC721A.TokenOwnership[]",
        "name": "",
        "type": "tuple[]"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint80", "name": "_roundId", "type": "uint80"}, {
        "internalType": "uint256",
        "name": "tokensToMint",
        "type": "uint256"
    }, {"internalType": "bytes", "name": "signature", "type": "bytes"}],
    "name": "feelSomePain",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint80", "name": "_roundId", "type": "uint80"}, {
        "internalType": "uint256",
        "name": "tokensToMint",
        "type": "uint256"
    }, {"internalType": "bytes", "name": "signature", "type": "bytes"}, {
        "internalType": "int128",
        "name": "_lastPrice",
        "type": "int128"
    }], "name": "feelSomePainTest", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [],
    "name": "findRound",
    "outputs": [{"internalType": "uint80", "name": "", "type": "uint80"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "flipPresaleStatus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "flipPublicSaleStatus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "freeMintAllowance",
    "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "freeMinted",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "getApproved",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint80", "name": "_roundId", "type": "uint80"}],
    "name": "getDiff",
    "outputs": [{"internalType": "int128", "name": "", "type": "int128"}, {
        "internalType": "int128",
        "name": "",
        "type": "int128"
    }, {"internalType": "int128", "name": "", "type": "int128"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint80", "name": "_roundId", "type": "uint80"}, {
        "internalType": "uint8",
        "name": "_amount",
        "type": "uint8"
    }], "name": "getMyPain", "outputs": [], "stateMutability": "payable", "type": "function"
}, {
    "inputs": [{"internalType": "uint80", "name": "_roundId", "type": "uint80"}, {
        "internalType": "uint8",
        "name": "_amount",
        "type": "uint8"
    }, {"internalType": "int128", "name": "_lastPrice", "type": "int128"}],
    "name": "getMyPainTest",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }],
    "name": "isApprovedForAll",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
    "name": "isFreeMinted",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "isPreSale",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "isPublicSale",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "mintedByOwner",
    "outputs": [{"internalType": "uint16", "name": "", "type": "uint16"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint8", "name": "_amount", "type": "uint8"}, {
        "internalType": "uint80",
        "name": "_roundId",
        "type": "uint80"
    }], "name": "ownerMint", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "uint8", "name": "_amount", "type": "uint8"}, {
        "internalType": "uint80",
        "name": "_roundId",
        "type": "uint80"
    }], "name": "ownerMintTest", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "ownerOf",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}, {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
    }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "operator", "type": "address"}, {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
    }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "string", "name": "_newURI", "type": "string"}],
    "name": "setCollectionURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_signerAddress", "type": "address"}],
    "name": "setSignerAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "signerAddress",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes4", "name": "interfaceId", "type": "bytes4"}],
    "name": "supportsInterface",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "symbol",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint8", "name": "tokenType", "type": "uint8"}, {
        "internalType": "uint8",
        "name": "amount",
        "type": "uint8"
    }, {"internalType": "uint80", "name": "_roundId", "type": "uint80"}],
    "name": "testSupply",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "tokenInfo",
    "outputs": [{"internalType": "int128", "name": "mintPrice", "type": "int128"}, {
        "internalType": "int128",
        "name": "mintDiff",
        "type": "int128"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "tokenURI",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "owner", "type": "address"}],
    "name": "tokensOfOwner",
    "outputs": [{"internalType": "uint256[]", "name": "", "type": "uint256[]"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {
        "internalType": "uint256",
        "name": "start",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "stop", "type": "uint256"}],
    "name": "tokensOfOwnerIn",
    "outputs": [{"internalType": "uint256[]", "name": "", "type": "uint256[]"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint80", "name": "roundId", "type": "uint80"}],
    "name": "verifyRound",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "withdrawETH",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {"stateMutability": "payable", "type": "receive"}]