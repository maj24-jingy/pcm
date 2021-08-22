<template>
    <div>
        <k-xiantu apiKey="DMIHCUVOSGNLELQTTMCYWL4E84ZKFJU2MYNJERV4" desc="gate-io_BTC_USDT"></k-xiantu>
        <eth-info></eth-info>
    </div>
</template>

<script>
import EthInfo from './info/ethInfo.vue';
import kXiantu from './kXiantu.vue'
    export default {
        components: { kXiantu, EthInfo },
        name: "btc",
        data() {
            return {
                apiKey: 'DMIHCUVOSGNLELQTTMCYWL4E84ZKFJU2MYNJERV4',
            };
        },
        created () {
            console.log('ssssssssssssssss--------------------');
        }
    }
</script>

<style scoped>

</style>
