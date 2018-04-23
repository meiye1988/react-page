const todo = (state=[],action) =>{
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id:action.id,
                    text:action.text,
                    completed:false,
                }
            ]
        break;
        case 'TOGGLE_TODO':
            return state.map(map=>
                (map.id==action.id)?{...map,completed:!map.completed}:map
            );
        break;
        default: 
            return state;
    }
}


export default todo;