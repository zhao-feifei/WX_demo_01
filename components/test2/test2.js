// components/test2/test2.js
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
        num1:0,
        num2:0,
        sum:0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        add1(){
            this.setData({
                num1:this.data.num1+1
            })
        },
        add2(){
            this.setData({
                num2:this.data.num2+1
            })
        }
    },
    observers:{
        'num1,num2':function(new1,new2){
            this.setData({
                sum:new1+new2
            })
        }
    },
    lifetimes:{
        attached:function(){
            console.log('attached');
        },
        detached: function() {
            // 在组件实例被从页面节点树移除时执行
            console.log('detached');
          },
    },
    pageLifetimes: {
        show: function() {
          // 页面被展示
          console.log('show');
        },
        hide: function() {
          // 页面被隐藏
          console.log('hide');
        },
        resize: function(size) {
          // 页面尺寸变化
          console.log('resize');
        }
      }
})
