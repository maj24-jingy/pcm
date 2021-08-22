<template>
    <div class="nav-menu">
        <div class="container">
            <ul>
                <li v-for="(item, index) in menuList"
                  :class="{'on':currentActiveMenu === item.name,
                   'cover':currentCoverMenu === item.name}"  
                   v-on:click="handleClick(item.name)"  
                   v-on:mouseenter="handleMenuMouseEnter(item.name)" 
                   v-on:mouseleave="handleMenuMouseLeave()" 
                   v-bind:key="index">
                    <router-link :to="{ name: item.name, params: { }}">{{item.title}}</router-link>
                </li>
            <!-- 登录注册 -->

                <div class="loginUser">
                    <div class="loginAndRegister" v-show="!this.isLogin" style="margin-top: 15px;">
                        <router-link to="/login">登录</router-link>
                        <router-link to="/register">注册</router-link>
                    </div>
                    <div class="userHome" v-show="this.isLogin">
                        <el-popover
                        placement="bottom"
                        width="170"
                        trigger="click"
                        v-model="visible">
                        <div class="elpopo">
                            <el-button size="mini" type="text" id="ksks" @click="loginIn()">Personal Center</el-button>
                            <el-button type="text" size="mini" id="ksks" @click="loginOut()">Login Out</el-button>
                        </div>
                         <el-button slot="reference" type="text" class="elbtn">{{userName}}</el-button>
                        </el-popover>
                        <router-link to="/login">[退出]</router-link>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "nav-menu",
        data() {
            return {
                currentActiveMenu:'index',
                currentCoverMenu:'index',
                visible:false,
                isLogin: true,
                userName: '07',
                token: '',
                menuList: [
                    {
                        name:'index',
                        title:'首页',
                    },
                    {
                        name:'duihuan',
                        title:'兑换',
                    },
                    {
                        name:'kuang',
                        title:'矿业',
                    },
                    {
                        name:'ziChan',
                        title:'资产托管',
                    },
                    {
                        name:'shiChang',
                        title:'市场',
                    },
                ]
            }
        },
        // computed: {
        //     if (this.token) { 

        //     }

        // },
        async created() {
            this.token =  localStorage.getItem('token')
            if (!!this.token) {
                const res = await this.$http.get('/getData/info')
                console.log(res);
                this.userName = res.data.data.account.username
                this.isLogin = true
            }else {
                this.isLogin = false
            }
        },
        methods: {
            loginIn() {
                this.$router.push({
                    path: '/user',
                })
            },
            loginOut() {
                localStorage.removeItem('token')
                this.$router.push({
                    path: '/login',
                })
            },
            handleClick: function (sign) {
                this.currentActiveMenu = sign
            },
            handleMenuMouseEnter: function (sign) {
                this.currentCoverMenu = sign
            },
            handleMenuMouseLeave: function () {
                this.currentCoverMenu = ""
            }
        }
    }
</script>

<style lang="less">
.loginUser {
    color: #f9fef8;
    float: right;
    // margin-top: 15px;
    
    .elpopo {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        /deep/span {
            font-size: 22px;
        }
        /deep/.el-button--text {
            color: #000;
        }
    }
    }
    .elbtn {
        color: white;
        font-size: 22px;
        font-weight: bolder;
    }
    .userHome, .loginAndRegister {
        a {
            color: #f9fef8;
        }
        p{
            display: inline;
        }
    }

    .nav-menu {
        width: 100%;
        height: 46px;
        min-width: 1200px;
        background: rgb(250, 178, 83);
        // margin-bottom: 10px;
        .container {
            min-width: 1200px;
            width: 1200px;
            margin: 0 auto;
            height: 46px;
            position: relative;
            display: flex;
            ul {
                width: 100%;
                height: 46px;
                li {
                    width: 8.33%;
                    height: 46px;
                    margin-left: -2px;
                    border-right: 1px solid rgb(250, 178, 83);
                    position: relative;
                    float: left;
                    a {
                        display: block;
                        width: 99%;
                        height: 44px;
                        line-height: 42px;
                        color: #f9fef8;
                        font-size: 18px;
                        text-align: center;
                    }
                }

                li.on {
                    background: 0 0;
                    a {
                        background: #a0dce4;
                        border-top: 2px solid #ff8848;
                        color: #fff;
                        text-decoration: none;                    }
                }

                li.cover {
                    background: 0 0;
                    a {
                        background: #fff;
                        border-top: 2px solid #ff8848;
                        color: #333;
                        text-decoration: none;                    }
                }
            }
        }
    }
</style>
<style lang="less" scoped>

#ksks {
    color: #928f8f;
    font-size: 22px;
}
</style>
