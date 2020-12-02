import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteIcecream} from '../../../actions/icecreams'
function Icecream({icecream,setCurrentId}){
    const dispatch = useDispatch()
    return(
        <div>
            <h2>{icecream.name}</h2>
            <h2>{icecream.price}</h2>
            <h2>{icecream.flavor}</h2>
            <button
            onClick={()=>setCurrentId(icecream._id)}
            >Edit</button>
            <button
            onClick={()=>dispatch(deleteIcecream(icecream._id))}
            >Delete</button>
        </div>
    )
}
export default Icecream