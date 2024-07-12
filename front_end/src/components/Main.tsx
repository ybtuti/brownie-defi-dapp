import { useEthers } from '@usedapp/core';
//import helperConfig from '../helper-config.json';
import networkMapping from "../chain-info/deployments/map.json"
import { constants } from 'ethers';
interface HelperConfig {
    [key: number]: { name: string };

}
const helperConfig: HelperConfig = {
    1337: { name: "Local Network" },
    11155111: { name: "Some Network" },
    1: { name: "Main Network" }
};
export const main = () => {
    //show token values

    //Get address of difftokens
    //get balance of the users wallet
    //send the brownie-config to our `src` folder
    //send the build folder
    const { chainId, error } = useEthers();
    const networkName = chainId ? helperConfig[chainId] : 'garnache';


    const dappTokenAddress = chainId ? networkMapping[String(chainId)]["DappToken"][0] : constants.AddressZero
    return (<div>Hi!</div>)
}