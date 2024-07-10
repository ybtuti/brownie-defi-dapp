from flask import json
import yaml
from scripts.helpful_scripts import get_account, get_contract
from brownie import DappToken, TokenFarm, config, network
from web3 import Web3

KEPT_BALANCE = Web3.to_wei(100, 'ether')


def deploy_token_farm_and_dapp_token():
    account = get_account()
    dapp_token = DappToken.deploy({"from": account})
    token_farm = TokenFarm.deploy(dapp_token.address, {"from": account}, publish_source=config["networks"][network.show_active()]["verify"])
    amount_to_transfer = dapp_token.totalSupply() - KEPT_BALANCE
    tx = dapp_token.transfer(token_farm.address, amount_to_transfer, {"from": account})
    tx.wait(1)
    # dapp_token, weth_token, fau_token/dai
    weth_token = get_contract("weth_token")
    fau_token = get_contract("fau_token")
    
    dict_of_allowed_tokens = {
        dapp_token: get_contract("dai_usd_price_feed"),
        weth_token: get_contract("eth_usd_price_feed"),
        fau_token: get_contract("dai_usd_price_feed"),
    }
    add_allowed_tokens(token_farm, dict_of_allowed_tokens, account)
    return dapp_token, token_farm

def add_allowed_tokens(token_farm, dict_of_allowed_tokens, account):
    for token in dict_of_allowed_tokens:
        add_tx = token_farm.addAllowedTokens(token.address, {"from": account})
        add_tx.wait(1)
        set_tx = token_farm.setPriceFeedContract(token.address, dict_of_allowed_tokens[token], {"from": account})

def update_front_end():
    # Sending the frontend our config in JSON format
    with open("brownie-config.yaml", "r") as brownie_config:
        config_dict = yaml.load(brownie_config, Loader=yaml.FullLoader)
        with open("./frontend/src/brownie-config.json", "w") as brownie_config_json:
            json.dump(config_dict, brownie_config_json)
    print("Frontend has been updated")

      

def main():
    deploy_token_farm_and_dapp_token()