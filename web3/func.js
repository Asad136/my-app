
import Web3 from 'web3';
import Web3Connection from './ABI/web3conn.json';

//creating the variable of test net
const RPC ="";

 const Contract = require('web3-eth-contract');

 //call the vaaribale of testnet
 Contract.setProvider(RPC);

 // copy the hash from remix
 const Contract_Address= "";

//detect web browser
const loadWeb3 = async () =>{
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try{
            // request account access if needed
            await ethereum.enable();
            //Account now exposed
            web3.eth.sendTransaction({method: 'eth_requestAccounts'});
        } catch(error){
            // console.log("user denied access account");
        }
      }
      // legacy dapp browser ...
      else if(window.web3) {
        
        window.web3 = new Web3(web3.currentProvider);
       // Account always exposed
        web3.eth.sendTransaction({});

      }
      // non-dapp browser
      else {
        console.log("non etherum browser detcect. you should  try cosider the meta mask");
      }
};
export const loadData = async () => {
    // all the loadweb3 data call in this promise funaction
    await loadWeb3();

// save all the var in Contract_web3_Connection
const Contract_Web3_Connection = new Contract(Web3Connection.output.abi, Contract_Address);

// getcoinbase is etherum method 
//returns the account that your mining rewards go to 
// account address is reward 
//.eth getcoin base is method
const addressAccount = await window.web3.eth.getCoinbase();

// using this funcation for number

// call the web3 methods 
const number = await Contract_Web3_Connection.methods.number().call();
return {Contract_Web3_Connection,addressAccount,number,Contract_Address};
};
