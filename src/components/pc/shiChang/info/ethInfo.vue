<template>
    <div class="base">
        <div class="head">
            <p>info</p>
        </div>
        <div class="content">
            <p>Ethereum is a next generation cryptographic ledger that can support many advanced functions, including user issuance of currency, smart contracts, decentralized transactions and the establishment of decentralized autonomous organizations (DAOs) or decentralized autonomous companies (DACs) ). Ethereum does not specifically support every single type of function as a feature. On the contrary, it includes a built-in Turing-complete scripting language that allows you to write the feature code you want to achieve through a mechanism called "contracts" . A contract is like an automatic agent, where whenever a transaction is received, the contract will run a specific piece of code, which can modify the data storage within the contract or send the transaction.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "btc"
    }
</script>

<style lang="less" scoped>
    .head {
        position: relative;
        width: 100%;
        height: 60px;
        padding-left: 20px;
        background-color: #f1f1f1;
        p {
            position: absolute;
            bottom: 0;
            width: 68px;
            font-size: 40px;
            border-bottom: 4px solid #F0B90B;
        }
    }
    .content {
        padding: 20px;
        p {
            font-size: 21px;
            color: grey;
            line-height: 2;
        }
    }
</style>
