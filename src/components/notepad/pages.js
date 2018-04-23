import React from 'react'
import Input from './input'
import NotepadEvent from './containers/notepadEvent'
class index extends React.Component{
    render(){
        return (
            <div>
                <Input />
                <NotepadEvent />
            </div>
            
        )
    }
}

export default index;