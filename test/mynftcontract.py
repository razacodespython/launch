from thirdweb import ThirdwebSDK
from dotenv import load_dotenv
import os
from thirdweb.types.settings.metadata import NFTCollectionContractMetadata

load_dotenv()

PRIVATE_KEYS = os.environ.get("PRIVATE_KEY")
RPC_URL = "https://polygon-mumbai.g.alchemy.com/v2/5XZxhplSa57M8sBDtVtcQ-zvPzNg4lRN"

sdk = ThirdwebSDK.from_private_key(PRIVATE_KEYS, RPC_URL)

name_contract = "TIKTOK PYTHON NFT CONTRACT"

sdk.deployer.deploy_nft_collection(NFTCollectionContractMetadata(name=name_contract))



