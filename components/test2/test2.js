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
    }
})
