# NeteaseMusic-webpack-vue2-仿网易云案例
## 先下载[网易云API](https://binaryify.github.io/NeteaseCloudMusicApi/#/)
---
- 1.克隆到本地
```
git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
```
- 2.本地要有nodejs环境[安装教程](https://www.runoob.com/nodejs/nodejs-install-setup.html)
```
npm install
```
或者
[yarn安装教程](https://yarnpkg.com/cli/install)
```
yarn
```
- 3.进入文件夹，启动
```
cd 文件夹
```
```
node app.js
```
访问(默认)端口为
```
http://localhost:3000
```
![成功界面](https://cdn.jsdelivr.net/gh/193957056/PicCloud/img/20220311232242.png)
- 4.到创建项目的位置创建脚手架
此案例选择的vue版本为2.6.14，脚手架版本为5.0.0
```
vue create music-demo
```
- 5.下载需要的所有第三方依赖包，切记依赖包的版本，不然项目启动的时候会有依赖不匹配问题
```bash
yarn add axios vant@2.12.15 vue-router@3.5.1
```
- 6.vant使用自动按需引入的方式，[vant文档,记得切换到2.X](https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart)
```bash
yarn add babel-plugin-import  -D
```
移动端适配下载插件
```
yarn add postcss@8.2.13 postcss-pxtorem@5.1.1
```
最后启动项目就OK了，启动代码
```
yarn serve
```
