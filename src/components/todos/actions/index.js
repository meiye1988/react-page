//这里只说明要做什么 就是说要发给redurce执行哪个功能函数 以及要执行的这些参数
var nextIndex = 0;
//添加列表项
export const addTodo = text => ({
    type : 'ADD_TODO',
    id:nextIndex++,
    text
})
//过滤条件
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})
//点击文字添加中线或去掉中线
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})
//定义过滤名字

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }