// components/popup/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        popupData: Object
    },

    /**
     * 组件的初始数据
     */
    data: {
        isShowCommodit: true,
        data: [],
    },

    observers: {
        'popupData': function (popupData) {
            if (!popupData) {
                return
            }

        }
    },

    lifetimes: {
        async attached() {

        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 显示关闭商品详情
        commoditTap(e) {


            this.data.isShowCommodit = !this.data.isShowCommodit

            this.triggerEvent('commoditTap', {isShowCommodit: this.data.isShowCommodit})
        },

    }
})
