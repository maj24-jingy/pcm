//插件模块
import axios from 'axios'

const MyhttpServe = {}
MyhttpServe.install = (Vue) => {
    
    axios.interceptors.request.use(function(config){
        // console.log('拦截器被触发');
        if(config.url !== 'login') {
            const AUTH_TOKEN = localStorage.getItem('token')
            config.headers['token'] = AUTH_TOKEN
            // config.headers(Access_Token = AUTH_TOKEN
        }
        //添加这行代码，让OPTIONS请求通过
        // if (httpServletRequest.getMethod().equals("OPTIONS")) {
        //     httpServletResponse.setStatus(HttpServletResponse.SC_OK);
        //     return true;
        // }
        // console.log(config);
        return config;
    },function(err){ 
        return Promise.reject(err)
    })

    // axios.interceptors.request.use(function(responce){
    //     return responce;
    // },function(err){ 
    //     return Promise.reject(err)
    // })

    

    // axios.defaults.baseURL = 'http://1.116.3.51:5012/'
    axios.defaults.baseURL = ''
    

    // 4. 添加实例方法
    Vue.prototype.$http = axios
}

export default MyhttpServe