import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import Pages from './pages'

// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension'

const notepadStore = createStore(rootReducer,composeWithDevTools());

class index extends React.Component{
    render(){
        return (
            <Provider store={notepadStore}>
            <Pages />
            </Provider>
        )
    }
}
export default index;

