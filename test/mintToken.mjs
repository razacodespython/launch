//import all the packages
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from 'dotenv'
dotenv.config()

// load your private key in a secure way (env variable, never commited to git)
const privateKey = process.env.PRIVATE_KEY;

const RPC = "https://polygon-mumbai.g.alchemy.com/v2/5XZxhplSa57M8sBDtVtcQ-zvPzNg4lRN"

// instantiate the SDK based on your private key, with the desired chain to connect to
const sdk = ThirdwebSDK.fromPrivateKey(privateKey, RPC);

const token_address = '0x3Da620FaC60e7D803b64920dB6D994114e65Ed4A'

const contractToken = sdk.getToken(token_address)

const toAddress = "0xbe5F29F3B0CBe60e68EeD262a89dfa34ffBB27A7"; // Address of the wallet you want to mint the tokens to
const amount = "1000"; // The amount of this token you want to mint

contractToken.mintTo(toAddress,amount)


//to run the code node deploy.js
//npm i dotenv