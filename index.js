const ua = window.navigator.userAgent.toLowerCase()

export const _safari = !!ua.match(/safari/gi)

export const isIOS = !!ua.match(/iphone|ipad|ipod/gi)
export const isAndroid = !!ua.match(/android/gi)
export const isMAC = !!ua.match(/mac os/gi)
export const isPad = !!ua.match(/ipad/gi)
export const isPhone = !!ua.match(/iphone/gi)

export const isSafari = _safari && ua.match(/chrome|android|micromessenger|mqqbrowser/i) ? false : true
export const isUC = _safari && ua.match(/linux;[\s\S]+android/i) ? true : false
export const isQQ = !!ua.match(/mqqbrowser/gi)
export const isWX = !!ua.match(/micromessenger/gi)

export const isMobile = (isAndroid || isIOS) ? true : false
export const isPC = !isMobile

const runtime = {
  // 设备类型
  isMobile,
  isPC,
  // 操作系统与设备
  isIOS,
  isAndroid,
  isPad,
  isPhone,
  isMAC,
  // 浏览器、客户端
  // todo: 微博、支付宝
  isSafari,
  isUC,
  isQQ,
  isWX
}

export const isWXMini = callback => {
  if (isWX) {
    function cache(value) {
      if (value) {
        callback && callback(true)
      } else {
        callback && callback(false)
      }
    }
    if (wx.miniProgram) {
      wx.miniProgram.getEnv(function (res) {
        cache(res.miniprogram ? 1 : '')
      })
    } else {
      function ready() {
        cache(window.__wxjs_environment ? 1 : '')
      }
      if (!window.WeixinJSBridge || !WeixinJSBridge.invoke) {
        document.addEventListener('WeixinJSBridgeReady', ready, false)
      } else {
        ready()
      }
    }
  }
}

export default runtime