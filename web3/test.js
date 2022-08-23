const Web3 = require('web3');

console.log(`--  Web3.version:`, Web3.version)
// console.log(`--  Web3.modules:`, Web3.modules)
// console.log(`--  window.ethereum:`, window.ethereum)	// Metamask
console.log(`--  Web3.givenProvider:`, Web3.givenProvider)	// Metamask

const rpcURL = 'ws://127.0.0.1:7545' // Your RPC URL goes here
// const rpcURL = 'https://mainnet.infura.io/v3/0be77c2f0459475d822b185ded148520'
const web3 = new Web3(Web3.givenProvider || rpcURL);
// Using the IPC provider in node.js
// var net = require('net');
// var web3 = new Web3('/Users/myuser/Library/Ethereum/geth.ipc', net);
// console.log(`--  web3:`, web3)

// account = '0x1422f054C92c81944776A2e69b6aD9D25908489D'; // mainnet
account = '0x869e41D0fc57645f899367dE2458a3D37C0e61d0'; // test-ganache
toAccount = null;

(async function () {
   console.log(`--> getting accounts ...`)
   await web3.eth.getAccounts().then(console.log)
   console.log(`--> getting balance: ${account} ...`)
   // await web3.eth.getBalance(account).then(console.log)

    //
    // await web3.eth.personal.newAccount('!@superpassword').then(acc => { console.log("<-- newAccount:", acc);
    //     toAccount = acc});
    // await web3.eth.personal.sign("Hello world", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", "test password!")
    //     .then(signature => { console.log("<-- sign:", signature) });

    // console.log(`--  sending transaction ...`)
   // await web3.eth.sendTransaction({ from: account, to: toAccount, value: web3.utils.toWei('1', "ether"), data: null }, (err, result) => { console.info('<-- sendTransaction:', err, '|', result) })
   // 	.once('sending', function (payload) { console.info(`--  sending | payload: `, payload) })
   // 	.once('sent', function (payload) { console.info(`--  sent | payload: `, payload) })
   // 	.once('transactionHash', function (hash) { console.info(`--  transactionHash | hash: `, hash) })
   // 	.once('receipt', function (receipt) { console.info(`--  receipt | receipt: `, receipt) })
   // 	.on('confirmation', function (confNumber, receipt, latestBlockHash) { console.info(`--  on confirmation:`, confNumber, "|", receipt, "|", latestBlockHash) })
   // 	.on('error', function (error) { console.error(`!-  on error:`, error) })
   // 	.then(function (receipt) {
   // 		// will be fired once the receipt is mined
   // 		console.log(`--  receipt is mined | receipt: `, receipt)
   // 	})
   // 	.catch(err => { console.error(`!-  error: `, err) });

   //
   // AXSToken
   const abi = [{"inputs":[{"internalType":"address","name":"_mainchainGateway","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mainchainGateway","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"_success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"_success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
   const address = "0xb1a6a6fA68B38504eaB8501dBe21a4ddbaA6C233"
   // SmoothLovePotion
   // const abi = [{"inputs":[{"internalType":"address","name":"_mainchainGateway","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_oldAdmin","type":"address"},{"indexed":true,"internalType":"address","name":"_newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_oldAdmin","type":"address"}],"name":"AdminRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_minter","type":"address"}],"name":"MinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_minter","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address[]","name":"_addedMinters","type":"address[]"}],"name":"addMinters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mainchainGateway","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"_success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"minter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"minters","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"removeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_removedMinters","type":"address[]"}],"name":"removeMinters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"_success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"_success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
   // const address = "0x278028e2a826218FE1d4fB3c7Ef0e28f3F536351"
   const contract = new web3.eth.Contract(abi, address)
   // console.log(`--  contract:`, contract.methods)

   // await contract.methods.totalSupply().call((err, result) => { console.log('<-- totalSupply:', err, '|', result) })
   // await contract.methods.name().call((err, result) => { console.log('<-- name:', err, '|', result) })

   console.log(`--  DONE`)
})().catch(err => { console.error(`!-  async error: `, err) })
   .finally(() => {
          console.log(`-x- disconnecting ...`)
          web3.currentProvider.disconnect?.call();
   });