import React from 'react'
import { Provider } from 'react-redux'
import Main from './View/Main'
import store from './View/redux/store'

function App(){
    return(
        <div>
            <Provider store={store}>
            Hello World
            <Main />
            </Provider>
        </div>
    )
}
export default App