<template>
    <div class="base">
        <div class="head">
            <p>info</p>
        </div>
        <div class="content">
            <p>Bitcoin (BTC for short) is currently the most widely used digital currency. It was born on January 3, 2009. It is a digital encrypted currency for point-to-point (P2P) transmission, with a total of 21 million. The Bitcoin network will release a certain amount of coins every 10 minutes, which is expected to reach its limit in 2140. Bitcoin is called "digital gold" by investors and is generated through a large number of calculations based on a specific algorithm. It does not rely on specific currency institutions to issue. It uses a distributed database composed of many nodes in the entire P2P network to confirm and record all transaction behaviors, and uses cryptographic design to ensure currency circulation, which can ensure that the value of the currency cannot be manipulated through the large-scale production of Bitcoin. The design based on cryptography allows Bitcoin to be transferred, paid and cashed only by the real owner. It also ensures the anonymity of currency ownership and circulation transactions.</p>
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
