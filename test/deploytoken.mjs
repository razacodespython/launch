//import all the packages
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from 'dotenv'
dotenv.config()

// load your private key in a secure way (env variable, never commited to git)
const privateKey = process.env.PRIVATE_KEY;

const RPC = "https://polygon-mumbai.g.alchemy.com/v2/5XZxhplSa57M8sBDtVtcQ-zvPzNg4lRN"

// instantiate the SDK based on your private key, with the desired chain to connect to
const sdk = ThirdwebSDK.fromPrivateKey(privateKey, RPC);


async function deployTokenContract () {
    try {
        const tokenContractAddress = await sdk.deployer.deployToken({
            name: "My ERC-20 Token Contract",
            primary_sale_recipient: "0xbe5F29F3B0CBe60e68EeD262a89dfa34ffBB27A7",
        })
        console.log("token contract deployed!", tokenContractAddress)
    } catch (error) {
        console.error("failed to deploy contract", error)
    }
}
deployTokenContract()

//to run the code node deploy.js
//npm i dotenv