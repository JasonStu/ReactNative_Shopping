#ReactNative_Shopping
开源动力,仿优购网 use RN and Redux
#主要实现电商基础界面和购物车功能
基于ReactNative和Redux实现了电商类APP,持续更新,希望一起学习讨论.
1.这个app 主要使用Redux 结合所学的结合一些开源第三方实现!主要对购物车功能实现了实时监控!
2.多个UI界面的搭建,实现实时更变内容,后面会实时更新大家可以关注一下
3.使用大量模块封装使得,页面能重用!

暂时只适配iOS 后期会持续更新适配安卓 (如果暂时想适配安卓的可切换注释 TabBarView.js 的代码,基本能运行 效果比较差)
##完成功能

- [x] 首页
- [x] 分类页面
- [x] 购物车完整功能
- [x] 个人页面
- [ ] 性能优化

## 运行截图

![最新](https://github.com/JasonStu/ReactNative_Shopping/blob/master/screenshot/1.png)
![分类](https://github.com/JasonStu/ReactNative_Shopping/blob/master/screenshot/2.png)
![详情页](https://github.com/JasonStu/ReactNative_Shopping/blob/master/screenshot/3.png)
![详情页](https://github.com/JasonStu/ReactNative_Shopping/blob/master/screenshot/4.png)
![详情页](https://github.com/JasonStu/ReactNative_Shopping/blob/master/screenshot/5.png)

## 运行
```
$ git clone https://github.com/JasonStu/ReactNative_Shopping.git
$ cd ReactNative_Shopping
$ npm install
$ react-native run-ios
```

##相关依赖
```
  "dependencies": {
    "react": "15.2.1",
    "react-native": "0.31.0",
    "react-native-nav": "^1.1.4",
    "react-native-scrollable-tab-view": "^0.5.3",
    "react-native-swiper": "^1.4.4",
    "react-native-tab-navigator": "^0.3.2",
    "react-native-vector-icons": "^2.0.3",
    "react-redux": "^4.4.5",
    "redux": "^3.5.2",
    "redux-logger": "^2.6.1",
    "redux-thunk": "^2.1.0"
  },
  ```

如果大家觉得有用欢迎给个start✨✨✨✨✨✨✨✨✨