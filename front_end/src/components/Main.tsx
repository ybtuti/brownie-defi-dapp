import { useEthers } from '@usedapp/core';
import helperConfig from '../helper-config.json';
export const main = () => {
    //show token values

    //Get address of difftokens
    //get balance of the users wallet
    //send the brownie-config to our `src` folder
    //send the build folder
    const { chainId } = useEthers();
    const networkName = chainId ? helperConfig[chainId].name : 'garnache';
    //const dappTokenAddress
    return (<div>Hi!</div>)
}