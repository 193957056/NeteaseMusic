import Vue from 'vue'
import App from './App.vue'
import "@/mobile/flexible" //适配
import "@/styles/reset.css" //初始化项目
import router from '@/router' //路由对象

// vant-tabbar全局注册
import { Tabbar, TabbarItem, NavBar } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);


Vue.config.productionTip = false


// 目标：封装网络请求
// 1.src/utils/request.js -- 设置基地址，导出axios函数
// 2.src/api/Home.js -- 请求方法axios({url:'具体'})
// 3.src/api/index.js -- 把Home.js里函数引入过来统一导出
// 4.具体逻辑页面，引入api/index.js请求方法，async+await等待axios的结果回来

// 测试封装的API方法
// 导入网易云API
import { recommendMusicAPI } from '@/api/index'
async function myFn() {
    const res = await recommendMusicAPI({ limit: 10 }); //api方法原地会得到axios请求再原地的Promise对象（里面有一个ajax请求）
    console.log(res);
}
myFn();

new Vue({
    render: h => h(App),
    router
}).$mount('#app')