
import {CommoditList} from "../../model/CommoditList";

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
    isShowSpec:true,
    data:[
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
    // commoditList:[],
    commodit: null,
    allSpecsList: [],
    selectable: null,
    selected: [],
    allData: null,
    price: '',
  },

  observers: {
    'popupData': function (popupData) {
      if (!popupData){
        return
      }
    }
  },

  lifetimes: {
    async attached() {
      this.initData(this.properties.popupData)
    }
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

    // 商品规格
    specTap(e){

    },


    // 初始化数据
    initData() {
      const commodit = new CommoditList(this.properties.popupData);
      const allSpecsList = commodit.getAllSpecsList();
      const selectable = commodit.getSelectable();
      this.data.allSpecsList = allSpecsList
      this.data.selectable = selectable
      this.data.commodit = commodit
      this.data.allData = this.properties.popupData
      console.log(commodit)
      const price = commodit.data.sku_list[0].price

      // 得到默认第一个
      for (let i = 0; i < this.data.allData.sku_list.length; i++) {
        if (i == 0) {
          let x = -1
          let y = -1
          let key_id = -1
          let value_id = -1
          for (let j = 0; j < this.data.allData.sku_list[i].specs.length; j++) {

            x = j
            key_id = this.data.allData.sku_list[i].specs[j].key_id
            value_id = this.data.allData.sku_list[i].specs[j].value_id

            for (let k = 0; k < this.data.allSpecsList.length; k++) {
              for (let l = 0; l < this.data.allSpecsList[k].value_list.length; l++) {
                if (value_id == this.data.allSpecsList[k].value_list[l].value_id) {
                  y = l
                  this.data.selected.push({x, y, key_id, value_id});
                  this.handleSelectOneOption(x, y, key_id, value_id)
                }
              }
            }
          }
        }

        break

      }

      this.setData({
        allSpecsList,
        price
      });
    },

    // 点击选择的数据
    handleClickSpecs(event) {
      console.log(event)
      const {key_id, value_id, select, x, y} = event.currentTarget.dataset
      if (select === 'disabled') {
        return;
      }

      if (select === 'selectable') {
        this.data.selected.forEach((item, index) => {
          if (item.x === x) {
            this.data.selected.splice(index, 1)
          }
        })
        this.data.selected.push({x, y, key_id, value_id});
        this.handleSelectOneOption(x, y, key_id, value_id);

      }

      if (select === 'active') {
        this.clearAllSelectedAndDisabled();
        this.data.selected.forEach((item, index) => {
          if (item.x === x && item.y === y) {
            this.data.selected.splice(index, 1);
          }
        })

        this.data.selected.forEach(item => {
          this.handleSelectOneOption(item.x, item.y, item.key_id, item.value_id);
        })
      }

      this.setData({
        allSpecsList: this.data.allSpecsList,
        selected: this.data.selected
      })
    },

    // 点击选择的数据封装
    handleSelectOneOption(x, y, key_id, value_id) {

      this.data.allSpecsList[x].value_list[y].selected = true;
      this.data.allSpecsList[x].value_list.forEach((specs, index) => {
        if (index === y) {
          specs.selected = true;
        } else {
          specs.selected = false;
        }
      })
      const selectableMatchItems = this.data.selectable[key_id].selectableList[value_id].matchItems;
      this.data.allSpecsList.forEach((specsRow, index) => {
        if (index === x) {
          return;
        }
        specsRow.value_list.forEach(specs => {
          specs.disabled = false;
          if (specs.selected) {
            return;
          }
          const result = selectableMatchItems[specsRow.key_id].find(item => item.value_id === specs.value_id);
          if (!result) {
            specs.disabled = true;
          }
        })
      })

      this.getSelectedInfo()

    },

    // 清楚数据
    clearAllSelectedAndDisabled() {
      this.data.allSpecsList.forEach(row => {
        row.value_list.forEach(specs => {
          specs.selected = false;
          specs.disabled = false;
        })
      })
    },

    // 得到对应规格的sku数据
    getSelectedInfo() {

        let valueIDArr = []
        this.data.allSpecsList.forEach(rowSpecs => {
          rowSpecs.value_list.forEach(specs => {
            if (specs.selected) {
              valueIDArr.push(specs.value_id)
            }
          })
        })


        for (let j = 0; j < this.data.allData.sku_list.length; j++) {

          let cpValueIDArr = []
          for (let k = 0; k < this.data.allData.sku_list[j].specs.length; k++) {

            let value_id = this.data.allData.sku_list[j].specs[k].value_id
            cpValueIDArr.push(value_id)

            for (let i = 0; i < valueIDArr.length; i++) {

              if (JSON.stringify(cpValueIDArr.sort()) === JSON.stringify(valueIDArr.sort())) {
                this.setData({
                  price: this.data.allData.sku_list[j].price,
                })
                return
              }

            }
          }
        }

    },


  }
})
