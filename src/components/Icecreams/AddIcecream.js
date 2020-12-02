import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addIcecream, updateIcecream } from '../../actions/icecreams'
//import { createPost,updatePost } from '../../actions/posts'
// for update operation
//import {useDispatch,useSelector} from 'react-redux'

function AddIcecream({currentId,setCurrentId}){
    const dispatch = useDispatch()
    const [icecreamData,setIcecreamData] = useState({
        name: '',
        price:'',
        flavor: '' 
    })
    // for geting the data to update operation for currentID
    const icecream = useSelector((state)=> currentId ? state.icecream.find((p)=>p._id === currentId) : null)
    useEffect(()=>{
        if(icecream) setIcecreamData(icecream)
    },[icecream])
    const handleSubmit = (event) => {
        event.preventDefault()
        if(currentId) {
            dispatch(updateIcecream(currentId,icecreamData))
        } else {
        dispatch(addIcecream(icecreamData))
        }
        clear()
    }
    const clear = () => {
        setCurrentId(null)
        setIcecreamData({
            name: '',
            price:'',
            flavor: ''
        })
    }
    return(
        <div>
            <h1>Form</h1>
            <h3>{currentId ? 'Edit' : 'Create'}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Cake Name" 
                value={icecreamData.name}
                onChange={(e)=>setIcecreamData({...icecreamData,name:e.target.value})}
                />
                <input type="number" placeholder="Enter Price" 
                value={icecreamData.price}
                onChange={(e)=>setIcecreamData({...icecreamData,price:e.target.value})}
                />
                <input type="text" placeholder="Enter Flavor Name" 
                value={icecreamData.flavor}
                onChange={(e)=>setIcecreamData({...icecreamData,flavor:e.target.value})}
                />
                <button
                type="submit"
                >
                    submit
                </button>
            </form>
        </div>
    )
}
export default AddIcecream