import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AddNewCake from './components/AddNewCake'
import CakeItems from './components/CakeItems'
function Main(){
    return(
        <div>
            From Main
            <Switch>
                <Route exact path="/" component={CakeItems} />
                <Route path="/addCake" component={AddNewCake} />
            </Switch>
        </div>
    )
}
export default Main