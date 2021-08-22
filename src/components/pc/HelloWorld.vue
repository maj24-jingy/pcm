<template>
    <div>
        <!-- <nav-top></nav-top> -->
        <!-- <nav-header></nav-header> -->
        <nav-menu></nav-menu>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    // import NavTop from "../fuyong/navTop";
    // import NavHeader from "../components/navHeader";
    import NavFooter from "./fuyong/navFooter";
    import NavMenu from "./fuyong/navMenu";
    export default {
        // name: "helloWorld",
        // components: {NavTop, NavMenu, NavFooter, NavHeader}
        components: {NavFooter, NavMenu}
    }
</script>

<style scoped>

</style>
