// components/home/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {

        banner: [
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591992208765&di=d59b41f923c9b356b6a36418f8c41d10&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591992208765&di=d59b41f923c9b356b6a36418f8c41d10&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg"
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 登录
        loginTap() {
            wx.navigateTo({
                url: `/pages/demo/demo`
            })
        },

        // 提前选菜
        selectFood(){
            wx.navigateTo({
                url: `/pages/demo/demo`
            })
        },

        // 扫码点餐
        scanCodeFood(){
            wx.scanCode({
                success (res) {
                    console.log(res)
                }
            })
        },

        // 到店自取
        personGetFood(){
            wx.navigateTo({
                url: `/pages/demo/demo`
            })
        },

        // 外卖点餐
        takeOutFood(){
            wx.navigateTo({
                url: `/pages/demo/demo`
            })
        },

        // Banner点击
        bannerTap(){
            wx.navigateTo({
                url: `/pages/web/index`
            })
        },

        // 店铺地址
        addressTap(){
            wx.navigateTo({
                url: `/pages/demo/demo`
            })
        },

        // 活动地址
        activityTap(){
            wx.navigateTo({
                url: `/pages/demo/demo`
            })
        },


    }
})
