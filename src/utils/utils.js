/**
 * verifyPassword 验证密码和确认密码是否一致
 * @param  {[string]} password   [密码]
 * @param  {[string]} repassword [重复密码]
 * @return {[Boolean]}
 */
export default{
    install (Vue, options) {
        Vue.prototype.verifyPassword = function (password, repassword) {
            if (password != repassword) {
                return false;
            }
            return true;
        },
        /**
         * DateMinus  返回一个相减得到的天数
         * @param {*} date1  da日期
         * @param {*} date2  小日期
         */
        Vue.prototype.DateMinus = function (date1, date2) {
            //date1:小日期   date2:大日期
            var sdate = new Date(date1);
            var now = new Date(date2);
            var days = now.getTime() - sdate.getTime();
            var day = parseInt(days / (1000 * 60 * 60 * 24));
            return day;
        },
        Vue.prototype.verifyPar = function (param) {
            if(param == 0) {
                return true
            }
            return false
        },
        /**
         * loading
         */
        Vue.prototype.openLoading = function() {
            const loading = this.$loading({           // 声明一个loading对象
              lock: true,                             // 是否锁屏
              text: '正在加载...',                     // 加载动画的文字
              spinner: 'el-icon-loading',             // 引入的loading图标
              background: 'rgba(0, 0, 0, 0.3)',       // 背景颜色
              target: '.sub-main',                    // 需要遮罩的区域
              body: true,                              
              customClass: 'mask'                     // 遮罩层新增类名
            })
            setTimeout(function () {                  // 设定定时器，超时5S后自动关闭遮罩层，避免请求失败时，遮罩层一直存在的问题
              loading.close();                        // 关闭遮罩层
            },5000)
            return loading;
          }
    }
}

