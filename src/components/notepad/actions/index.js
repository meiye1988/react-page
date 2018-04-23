let nextTodoId = 0
export const addList = text => ({
    type : 'ADD',
    id : nextTodoId++,
    text
})
//未完成改完成事件
export const undoneToDone = (id) => ({
    type :'UNDONETODONE',
    id : id
})

//取消未完成的事件
export const cancel = (id) => ({
    type :'CANCEL',
    id : id
})
//删除完成的事件
export const deletes = (id) => ({
    type :'DELETES',
    id : id
})

export const changePanpel = (key)=>({
    type : 'CNAHGEPANPEL',
    key

})