import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {getIcecreams} from '../actions/icecreams'
import AddIcecream from '../components/Icecreams/AddIcecream'
import Icecreams from '../components/Icecreams/Icecreams'

function HomeIcecream(){
    const [currentId,setCurrentId]=useState(null)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getIcecreams())
    },[currentId,dispatch])
    return(
        <div>
            <AddIcecream currentId={currentId} setCurrentId={setCurrentId} />
            <Icecreams setCurrentId={setCurrentId} />
        </div>
    )
}
export default HomeIcecream