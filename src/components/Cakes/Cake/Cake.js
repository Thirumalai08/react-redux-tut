import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteCake} from '../../../actions/cakes'
function Cake({cake,setCurrentId}){
    const dispatch = useDispatch()
    return(
        <div>
            <h2>{cake.name}</h2>
            <h2>{cake.price}</h2>
            <h2>{cake.flavor}</h2>
            <button
            onClick={()=>setCurrentId(cake._id)}
            >Edit</button>
            <button
            onClick={()=>dispatch(deleteCake(cake._id))}
            >Delete</button>
        </div>
    )
}
export default Cake