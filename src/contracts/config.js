export const CONTRACT_NAME_ADDRESS = "0x4109914573079381c5154d3f2ef25d227b49d60d";
export const CONTRACT_NAME_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_composer_addre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_zip",
				"type": "string"
			},
			{
				"internalType": "uint256[]",
				"name": "_product_ids",
				"type": "uint256[]"
			}
		],
		"name": "checkoutList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "purchaseCancel",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "purchaseDone",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "purchasePending",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "registerAudience",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "audience_map",
		"outputs": [
			{
				"internalType": "address",
				"name": "addre",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "chkexistAudience_map",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "getAudience",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_isCurrCust",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getPurchase",
		"outputs": [
			{
				"internalType": "string",
				"name": "_composer_addre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_zip",
				"type": "string"
			},
			{
				"internalType": "uint256[]",
				"name": "_products_ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "_total_price",
				"type": "uint256"
			},
			{
				"internalType": "enum TuneToken.Purchase_Status",
				"name": "_state",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPurchaseMap",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "cus_orders",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "purchase_list_length",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "purchase_map",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "audi",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "composer_addre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "zip",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "total_price",
				"type": "uint256"
			},
			{
				"internalType": "enum TuneToken.Purchase_Status",
				"name": "state",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "song_map",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]