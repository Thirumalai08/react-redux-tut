import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import HomeCake from './Pages/HomeCake'
import HomeIcecream from './Pages/HomeIcecream'

function App(){
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cake" component={HomeCake} />
                <Route path="/icecream" component={HomeIcecream} />
            </Switch>
        </div>
    )
}
export default App