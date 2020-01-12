import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'
import Personal from './pages/personal';

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */

  // 监听程序初始化，初始化完成时触发（全局只触发一次）
  componentWillMount() {
    // console.log('this.$router.params', this.$router.params);
    console.log('componentWillMount');
  }

  // 监听程序初始化，初始化完成时触发（全局只触发一次）
  componentDidMount () {}

  // 程序启动，或从后台进入前台显示时触发，微信小程序中也可以使用 Taro.onAppShow 绑定监听
  componentDidShow () {}

  // 程序从前台进入后台时触发，微信小程序中也可以使用 Taro.onAppHide 绑定监听
  componentDidHide () {}

  // 程序发生脚本错误或 API 调用报错时触发，微信小程序中也可以使用 Taro.onError 绑定监听
  componentDidCatchError () {}

  // 程序要打开的页面不存在时触发，微信小程序中也可以使用 Taro.onPageNotFound 绑定监听
  componentDidNotFound() {}

  config: Config = {
    pages: [
      'pages/index/index',
      'pages/personal/personal'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    networkTimeout: {
      request: 60000,
      connectSocket: 60000,
      uploadFile: 60000,
      downloadFile: 60000,
    },
    debug: false,
    permission: {
      'scope.userLocation': {
        desc: '你的位置信息将用于小程序位置接口的效果展示'
      }
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './assets/tabbar/home.png',
          selectedIconPath: './assets/tabbar/home_selected.png'
        },{
          pagePath: 'pages/personal/personal',
          text: '个人中心',
          iconPath: './assets/tabbar/gerenzhongxin_xuanzhong-copy-copy.png',
          selectedIconPath: './assets/tabbar/gerenzhongxin_xuanzhong-copy.png'
        }
      ]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }

  
}

Taro.render(<App />, document.getElementById('app'))
