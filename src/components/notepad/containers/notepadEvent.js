import { connect } from 'react-redux'

import Panpel from '../panpel'
import {undoneToDone,cancel,deletes,changePanpel} from '../actions'


const getList = (list,cate) => {
    return list.filter(t=>t.cate==cate);
}
const getPanpel = (key) =>{
    return key;
}
const mapStateToProp = (state,nowProp) => ({
    undoneList:getList(state.datas.list,'UNDONE'),
    doneList:getList(state.datas.list,'DONE'),
    cancelList:getList(state.datas.list,'CANCEL'),
    getPanpel:getPanpel(state.datas.panpelAry)
})
const mapDispathToProp = dispath=>({
    undoneToDone:id=>{dispath(undoneToDone(id));dispath(changePanpel(2))},
    cancel:id=>{dispath(cancel(id));dispath(changePanpel(3))},
    deletes:id=>dispath(deletes(id)),
    changePanpel:key=>dispath(changePanpel(key))
})

export default connect(
    mapStateToProp,
    mapDispathToProp
  )(Panpel)