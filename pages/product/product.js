var app = getApp()
var WxParse = require('../../wxParse/wxParse.js');
var CCRequest = require('../../utils/CCRequest');
var imageUtil = require('../../utils/util.js');
Page({
  data: {
    item: '',
    imagewidth: 0,//缩放后的宽 
    imageheight: 0,//缩放后的高
    picPath: '../../images/title/4.jpg',
  },
  imageLoad: function (e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      // title: 'title', // 分享标题
      // desc: 'desc', // 分享描述
      path: 'pages/product/product' // 分享路径
    }
  }
})