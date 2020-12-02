import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCakes } from '../actions/cakes'
import AddCake from '../components/Cakes/AddCake'
import Cakes from '../components/Cakes/Cakes'

function HomeCake(){
    const [currentId,setCurrentId]=useState(null)
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
export default HomeCake