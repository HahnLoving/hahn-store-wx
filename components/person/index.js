// components/person/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 个人信息
    avatarTap(){
      wx.navigateTo({
        url: `/pages/demo/demo`
      })
    },

    // 优惠券
    counpTap(){
      wx.navigateTo({
        url: `/pages/demo/demo`
      })
    },

    // 积分
    integralTap(){
      wx.navigateTo({
        url: `/pages/demo/demo`
      })
    },

    // 购物车
    catlTap(){
      wx.navigateTo({
        url: `/pages/demo/demo`
      })
    },

    // 订单
    orderTap(){
      wx.navigateTo({
        url: `/pages/demo/demo`
      })
    },

    // 会员
    vipTap(){
      wx.navigateTo({
        url: `/pages/demo/demo`
      })
    },
  }
})
