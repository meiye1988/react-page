import React from 'react'
import TodoLi from './TodoLi'

class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let list = this.props.todos;
        let li = list.map(todo=>{
            return (<TodoLi key={todo.id} {...todo} onClick={() => this.props.toggleTodo(todo.id)} />)
        });
        return (
            <ul>{li}</ul>
        )
    }
}

// const TodoList = ({ todos, toggleTodo }) => (
//     <ul>
//       {todos.map(todo =>
//         <TodoLi
//           key={todo.id}
//           {...todo}
          
//         />
//       )}
//     </ul>
//   )
  
  export default TodoList