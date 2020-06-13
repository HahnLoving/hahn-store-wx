//index.js
//获取应用实例
const app = getApp()

Page({
    data: {

        nowIndex: 0,
        top1: 0,
        top2: 0,
        top3: 0,

        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        title: '子页面',
        barBg: '#f8f8f8',//#ff6600
        fixed: true,
        color: '#000000',//#ffffff
        touchStartY: 0,//触摸开始的Y坐标
        toggleBarShow: false,
        backStyle: 'normal',
        backEvent: false,
        backHomeEvent: false,

        config: {
            isNav: 1,
            show: false,
            selected: 0,
            color: '#8a8a8a',
            selectedColor: '#166546',
            borderStyle: '#f6f6f6',
            backgroundColor: '#fff',
            fontSize: 24,
            list: [
                {
                    iconSize: 40,
                    pagePath: '',
                    iconPath: '/images/index.png',
                    selectedIconPath: '/images/index-select.png',
                    text: '首页',
                    style: 'circle',
                }, {
                    iconSize: 40,
                    pagePath: '',
                    iconPath: '/images/order.png',
                    selectedIconPath: '/images/order-select.png',
                    text: "订单",
                }, {
                    iconSize: 40,
                    pagePath: '',
                    iconPath: '/images/my.png',
                    selectedIconPath: '/images/my-select.png',
                    text: '个人中心',
                },
            ]
        },

    },

    onlintap(e) {
        this.data.nowIndex = e.detail.idx
        switch (e.detail.idx) {
            case 0:
                this.changeTabbar(e.detail.idx)
                wx.pageScrollTo({
                    scrollTop: this.data.top1,
                    duration:0,
                })
                break

            case 1:
                this.changeTabbar(e.detail.idx)
                wx.pageScrollTo({
                    scrollTop: this.data.top2,
                    duration:0,
                })
                break

            case 2:
                this.changeTabbar(e.detail.idx)
                wx.pageScrollTo({
                    scrollTop: this.data.top3,
                    duration:0,
                })
                break

            default:
                break
        }
    },

    // 修改tabbar样式
    changeTabbar(index) {
        for (let i = 0; i < this.data.config.list.length; i++) {
            if (i == index) {
                this.data.config.list[i].style = "circle"
                this.data.config.selected = i
            } else {
                this.data.config.list[i].style = ""
            }
        }

        this.setData({
            config: this.data.config
        })
    },

    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../demo/demo'
        })
    },
    onLoad: function () {
        wx.lin.showLoading({
            color: '#157658',
            type: 'flash',
            fullScreen: true
        })


        var timer = setTimeout(function () {
            wx.lin.hideLoading()
            clearTimeout(timer)
        }, 0.5 * 1000)
    },

    onPageScroll(e) {

        switch (this.data.nowIndex ) {
            case 0:
                this.data.top1 = e.scrollTop
                break

            case 1:
                this.data.top2 = e.scrollTop
                break

            case 2:
                this.data.top3 = e.scrollTop
                break

            default:
                break
        }
    }


})
