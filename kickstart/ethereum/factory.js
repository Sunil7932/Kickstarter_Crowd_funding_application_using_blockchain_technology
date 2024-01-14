import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
 // "0x74d6c5f4426DfCE08e4C5019B832C7c4f13c45bE"
  "0x0a8b261847Ae00CbFc15f636651a03A6792e2D89"
);

export default instance;
