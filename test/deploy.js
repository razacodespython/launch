//import all the packages
import { ethers } from "ethers";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from 'dotenv'
dotenv.config()
// const rpcUrl = "https://polygon-rpc.com/";
// const provider = ethers.getDefaultProvider(rpcUrl);

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    // Your wallet private key
    process.env.PRIVATE_KEY,
    // RPC URL
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);

async function deployTokenContract () {
    try {
        const tokenContractAddress = await sdk.deployer.deployToken({
            name: "My ERC-20 Token Contract",
            primary_sale_recipient: "0x55c9bBb71a5CC11c2f0c40362Bb691b33a78B764",
        })
        console.log("token contract deployed!", tokenContractAddress)
    } catch (error) {
        console.error("failed to deploy contract", error)
    }
}
deployTokenContract()

//to run the code node deploy.js
//npm i dotenv