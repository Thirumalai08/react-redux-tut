import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Cakes from './components/Cakes/Cakes'
import {getCakes} from './actions/cakes'
import AddCake from './components/Cakes/AddCake'

function App(){
    const [currentId,setCurrentId] = useState(null)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCakes())
    },[currentId,dispatch])
    return(
        <div>
            <AddCake currentId={currentId} setCurrentId={setCurrentId} />
            <Cakes setCurrentId={setCurrentId} />
        </div>
    )
}
export default App