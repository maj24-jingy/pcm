<template>
    <div class="login">
        <div class="login-header"> </div>
        <div class="login-container">
            <div class="login-bg">
                <vue-particles
                    class="login-bg-canvas"
                    color="#3399ff"
                    :particleOpacity="0.7"
                    :particlesNumber="80"
                    shapeType="circle"
                    :particleSize="4"
                    linesColor="#66ccff"
                    :linesWidth="1"
                    :lineLinked="true"
                    :lineOpacity="0.4"
                    :linesDistance="150"
                    :moveSpeed="3"
                    :hoverEffect="true"
                    hoverMode="grab"
                    :clickEffect="true"
                    clickMode="push"
                >
                </vue-particles>
            </div>
            <div class="login-middle">
                <div class="login-right">
                    <div class="login-form-box" style="top: 10px; margin-top: 22.8476px;">
                        <div class="form_wrap" style="display: block;">
                            <!-- 页面 -->
                            <el-tabs v-model="activeName">
                                <el-tab-pane label="手机号登录" name="first">
                                    <el-form>
                                      <el-form-item>
                                        <el-input v-model="form.username" placeholder="请输入手机号"></el-input>
                                      </el-form-item>
                                      <el-form-item>
                                        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
                                      </el-form-item>
                                       <el-button type="success" plain @click="phLogin">登录</el-button>
                                    </el-form>
                                </el-tab-pane>

                                <el-tab-pane label="邮箱登录" name="second">
                                    <el-form>
                                      <el-form-item>
                                        <el-input v-model="emForm.userName" placeholder="username"></el-input>
                                      </el-form-item>
                                      <el-form-item>
                                        <el-input v-model="emForm.password" type="password" placeholder="password"></el-input>
                                      </el-form-item>
                                      <span class="elformSpan" @click="$router.push({name: 'register'})">没有账号？去注册</span>
                                       <el-button type="success" plain @click="emLogin">登录</el-button>
                                    </el-form>
                                </el-tab-pane>
                            </el-tabs>
                            <p class="agreement-list">登录即代表您同意我们的<a href="http://pages.ctrip.com/public/serve%20guideline.htm?1" class="serviceAgreement" target="_black">服务协议</a>和<a href="http://pages.ctrip.com/public/serve%20guideline.htm?2" class="privacyPolicy" target="_black">隐私政策</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <nav-footer></nav-footer>

    </div>
</template>

<script>
    import NavFooter from "./fuyong/navFooter";

    export default {
        name: "Login",
        components: {NavFooter},
        data() {
            return {
                activeName: 'second',
                form: {
                    username: '',
                    password: '',
                },
                emForm: {
                    userName: '',
                    password: '',
                },
            }
        },
        mounted() {
            
        },
        methods: {
            phLogin() {
                console.log(3);
            },
            async emLogin() {
                const res = await this.$http.post('/getData/login',this.emForm)
                console.log(res);
                if(res.data.code === 200) {
                localStorage.setItem('token', res.data.data.token)
                this.$router.push('/index')           
                this.$message({
                type: 'success',
                message: res.data.msg
                })}else {
                    this.$message({
                    type: 'danger',
                    message: res.data.msg
                    })
                }
            }
        }
    }
</script>
<style lang="less" scoped>
.elformSpan {
    color: #a5a4a4;
    margin-top: -5px;
    float: right;
    font-size: 15px;
    margin-bottom: 10px;
}
.el-tab_item {
    height: 18px;
}
    .el-button {
        width: 300px;
    }
    .login {
        .login-header {
            width: 980px;
            height: 90px;
            margin-left: auto;
            margin-right: auto;
            padding: 0 10px;
        }
        .login-container {
            width: 100%;
            min-height: 580px;
            .login-bg {
                width: 100%;
                left: 0;
                overflow: hidden;
                position: absolute;
                height: 650px;
                top: 0;
                right: 0;
                .login-bg-canvas {
                    background: url("../../assets/img/login-bg.jpeg") no-repeat left center;
                }
            }
            .login-middle {
                width: 1080px;
                margin: 0 auto;
                display: block;
                position: relative;
                .login-right {
                    position: relative;
                    float: right;
                    //表单宽
                    width: 380px;
                    min-height: 440px;
                    display: block;
                    .login-form-box {
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 50%;
                        background: #fff;
                        padding: 30px 30px 20px;
                        min-height: 270px;
                        border-radius: 4px;
                        -webkit-box-shadow: 0 1px 6px rgba(0,0,0,.1);
                        box-shadow: 0 1px 6px rgba(0,0,0,.1);
                    }

                    .form_wrap {
                        
                        .agreement-list {
                            bottom: 5px;
                            padding-top: 10px;
                            color: #999;
                            line-height: 12px;
                            text-align: center;
                            font-size: 12px;
                            margin-top: 10px;
                            a {
                                padding: 0 3px;
                                font-size: 12px;
                                color: #999;
                                border-bottom: 1px dotted #999;
                            }
                        }
                        .submit-btn {
                            width: 200px;
                            height: 42px;
                            color: #fff;
                            font-size: 16px;
                            cursor: pointer;
                            text-align: center;
                            border: 0;
                            border-radius: 4px;
                            clear: both;
                            background-color: #FF9A14;
                            &:hover {
                                background-color: #CC7B10;
                            }
                        }
                    }
                }
            }

        }

    }
</style>
