//专门创建store实例对象
import {observable,action} from 'mobx-miniprogram'
export const store  =observable({
    numa=1,
    numb=2,
    //计算属性
    get sum(){
        return this.numa+this.numb
    },
    //action方法用来修改store中的数据
    updateNuma:action(function(step){
        this.numa+=step
    }),
    updateNumb:action(function(step){
        this.numb+=step
    })
})