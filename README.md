# web运行环境

## 客户端判断

```js
import {isAndroid, isIOS, isPad, isPhone, isMAC} from 'browser-ua'
```

## pc与移动端判断

```js
import {isPC, isMobile} from 'browser-ua'
```

## 浏览器内核判断

```js
import {isUC, isQQ, isSafari, isWX} from 'browser-ua'
```

## 微信小程序判断

```js
import {isWXMini} from 'browser-ua'

isWXMini(bool=>{
    if(bool){
        console.log('微信小程序')
    } else {
        console.log('非微信小程序')
    }
})
```

## 更新说明

### 1.0.3

1. 重构优化
2. 增加微信小程序
