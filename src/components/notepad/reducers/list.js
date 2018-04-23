let defaultState = {
    list:[],
    panpelAry:[]
}
const list = (state = defaultState,action) => {
    switch(action.type){
        case 'ADD':
            return Object.assign({},state,{
                list:[
                    ...state.list,
                    {
                        id:action.id,
                        text:action.text,
                        cate:'UNDONE'
                    }
                ]
            });
        break;
        case 'UNDONETODONE':
            let list = state.list;
            let newList = list.map(list => 
                (action.id==list.id)?
                {...list,cate:'DONE'}
                :list
            );
            return Object.assign({},state,{
                list:newList
            });
        break;
        case 'CANCEL':
            let lists = state.list;
            let newLists = lists.map(list => 
                (action.id==list.id)?
                {...list,cate:'CANCEL'}
                :list
            );
            return Object.assign({},state,{
                list:newLists
            });
        break;
        case 'DELETES':
            let dlists = state.list;
            let lengths = dlists.length;
            for(let i = 0;i < lengths;i++){
                if(dlists[i].id==action.id){
                    dlists.splice(parseInt(i),1);
                    break;
                }
            }
            return Object.assign({},state,{
                list:dlists
            });
        break;
        case 'CNAHGEPANPEL':
        console.log(typeof action.key);
            let newAry = state.panpelAry;
            if(typeof action.key=="object"){
                newAry = action.key;
            }else{
                action.key = action.key.toString();
                newAry.push(action.key); 
            }
            console.log(newAry);
            return Object.assign({},state,{
                panpelAry:newAry
            });
            break;
        default:return state;
    }
}
export default list;