// components/order/index.js
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
    title: '订单',
    // barBg: '#166546',//#ff6600
    // fixed: true,
    // color: '#ffffff',//#ffffff
    barBg: '#ffffff',//#ff6600
    fixed: true,
    color: '#000000',//#ffffff
    touchStartY: 0,//触摸开始的Y坐标
    toggleBarShow: false,
    backStyle: 'none',
    backEvent: false,
    backHomeEvent: false,

    banner: [
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591992208765&di=d59b41f923c9b356b6a36418f8c41d10&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591992208765&di=d59b41f923c9b356b6a36418f8c41d10&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591992208765&di=d59b41f923c9b356b6a36418f8c41d10&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591992208765&di=d59b41f923c9b356b6a36418f8c41d10&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591992208765&di=d59b41f923c9b356b6a36418f8c41d10&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591992208765&di=d59b41f923c9b356b6a36418f8c41d10&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591992208765&di=d59b41f923c9b356b6a36418f8c41d10&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591992208765&di=d59b41f923c9b356b6a36418f8c41d10&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591992208765&di=d59b41f923c9b356b6a36418f8c41d10&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591992208765&di=d59b41f923c9b356b6a36418f8c41d10&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591992208765&di=d59b41f923c9b356b6a36418f8c41d10&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591992208765&di=d59b41f923c9b356b6a36418f8c41d10&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591992208765&di=d59b41f923c9b356b6a36418f8c41d10&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591992208765&di=d59b41f923c9b356b6a36418f8c41d10&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg",
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 订单点击
    orderTap(){
      wx.navigateTo({
        url: `/pages/demo/demo`
      })
    }
  }
})
