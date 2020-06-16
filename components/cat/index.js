// components/cat/index.js
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
    isCat: false,
    data:[
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
    ],
    count:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 添加商品
    addTap(e){
      let count = e.detail.count
      this.setData({
        count: count
      })
    },

    // 购物车
    catTap(){


      this.data.isCat = false

      let that = this

      // 因为lin-ui有事件冲突所以使用骚操作
      let timer = setTimeout(function () {

        that.setData({
          isCat: true
        })

        clearTimeout(timer)
      }, 0 * 1000)
    },

    // 打开购物车
    openCatTap() {
      this.data.isCat = !this.data.isCat
      this.setData({
        isCat: this.data.isCat
      })
    },

    // 关闭购物车
    clearTap(){
      this.data.isCat = false
      this.setData({
        isCat: false
      })
    }

  }
})
