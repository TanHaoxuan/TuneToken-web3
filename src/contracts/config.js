export const CONTRACT_ADDRESS = "0x189ae7a16e18445717823b712e899ff2df2eede9";
export const CONTRACT_ABI = [
	
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				}
			],
			"name": "addNewArtist",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				}
			],
			"name": "addNewAudience",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_genre",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_hash",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "_price",
					"type": "uint256"
				}
			],
			"name": "addSong",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_songID",
					"type": "uint256"
				}
			],
			"name": "buySong",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "artistName",
					"type": "string"
				}
			],
			"name": "donateArtist",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "string",
					"name": "artistName",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "audienceName",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "artistDonated",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "songID",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "songName",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "artistName",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				}
			],
			"name": "songAdded",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "songID",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "songName",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "audienceName",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				}
			],
			"name": "songPurchased",
			"type": "event"
		},
		{
			"inputs": [],
			"name": "checkUser",
			"outputs": [
				{
					"internalType": "enum blockstudio.UserType",
					"name": "",
					"type": "uint8"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getArtistDetails",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "uint256[]",
					"name": "",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getAudienceDetails",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "uint256[]",
					"name": "",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getNumSongs",
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
					"name": "_songID",
					"type": "uint256"
				}
			],
			"name": "getSongDetails",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]