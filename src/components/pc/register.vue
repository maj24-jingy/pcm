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
                                        <el-input class="userPass" v-model="form.username" placeholder="请输入用户名"></el-input>
                                        <el-input class="userPass" v-model="form.password" type="password" placeholder="请输入密码"></el-input>
                                        <el-input class="userPass" v-model="password1" type="password" placeholder="请确认密码"></el-input>

                                <el-tab-pane label="phone register" name="first">
                                    <el-form>
                                      <el-form-item>
                                        <el-input v-model="form.username" placeholder="请输入手机号"></el-input>
                                      </el-form-item>
                                      <el-form-item>
                                        <el-input v-model="form.password" type="password" placeholder="请输入密码">
                                        </el-input>
                                      </el-form-item>
                                       <el-button type="success" plain @click="phLogin">登录</el-button>
                                    </el-form>
                                </el-tab-pane>

                                <el-tab-pane label="email register" name="second">
                                    <el-form>
                                      <el-form-item>
                                        <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
                                      </el-form-item>
                                      <el-form-item prop="phoneCode" class="pr">
                                        <el-input style="width:400px;" placeholder="请输入验证码" v-model="eCode"></el-input>
                                        <button @click.prevent="getCode" class="code-btn" :disabled="!show" >
                                          <span v-show="show">get code</span>
                                          <span v-show="!show" class="count">{{count}} s</span>
                                        </button>
                                      </el-form-item>
                                      <span class="elformSpan" @click="$router.push({name: 'login'})">已有账号？去登录</span>
                                       <el-button type="success" plain @click="emLogin">register</el-button>
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
                //验证码初始值
                show: 'false',
                count: '',
                password1: '',
                way: '邮箱',
                eCode: '',
                form: {
                    username: '',
                    password: '',
                    roleCode: '1',
                    email: '',
                },
                emForm: {
                    username: '',
                    password: '',
                },
            }
        },
        mounted() {
            
        },
        methods: {
          // 获取短信验证码
          async getCode() {
            // 验证码倒计时
            if (!this.timer) {
              this.count = 60;
              this.show = false;
              this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= 60) {
                  this.count--;
                } else {
                  this.show = true;
                  clearInterval(this.timer);
                  this.timer = null;
                }
              }, 1000)
            }
            const res = await this.$http.get(`/getData/send?mail=${this.form.email}`)
            console.log(res);
            },
            phLogin() {
                console.log(3);
            },
            async emLogin() {
                const res =await this.$http.post(`/getData/account/zhuce?code=${this.eCode}&way=${this.way}`,this.form);
                console.log(res);
                if(res.data.code === 200) {
                this.$router.push({name: 'login'})
                this.$message({
                    type: 'success',
                    message: 'register success,please to login'
                })
                }else {
                this.$message({
                    type: 'warning',
                    message: 'register failed'
                })

                }
            }
        }
    }
</script>
<style lang="less" scoped>
  // 短信验证码
  .pr{
    position: relative;
  }

  .code-btn {
    width: 100px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 222;
    //#ef8466橘色
    color: #409EFF;
    font-size: 14px;
    border: none;
    border-left: 1px solid #bababa;
    background-color: #fff;
    //鼠标指针的样式:伸出食指的手,default 箭头，crosshair 十字，progress 箭头和沙漏
    cursor: pointer;
  }
.userPass {
  margin-bottom: 5px;
}
.elformSpan {
  color: #a5a4a4;
  margin-top: -7px;
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
                    width: 460px;
                    min-height: 440px;
                    display: block;
                    .login-form-box {
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 50%;
                        background: #fff;
                        padding: 30px 30px 20px;
                        min-height: 470px;
                        border-radius: 4px;
                        -webkit-box-shadow: 0 1px 6px rgba(0,0,0,.1);
                        box-shadow: 0 1px 6px rgba(0,0,0,.1);
                    }

                    .form_wrap {
                        
                        .agreement-list {
                            padding-top: 10px;
                            bottom: 5px;
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
