<template>
    <div>
        <k-xiantu apiKey="DMIHCUVOSGNLELQTTMCYWL4E84ZKFJU2MYNJERV4" desc="gate-io_BTC_USDT"></k-xiantu>
        <btc-info></btc-info>
    </div>
</template>

<script>
import BtcInfo from './info/btcInfo.vue'
import kXiantu from './kXiantu.vue'
    export default {
        components: { kXiantu, BtcInfo },
        name: "btc",
        data() {
            return {
                apiKey: 'DMIHCUVOSGNLELQTTMCYWL4E84ZKFJU2MYNJERV4',
            };
        },
    }
</script>

<style scoped>

</style>
