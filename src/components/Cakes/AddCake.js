import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addCake, updateCake } from '../../actions/cakes'
//import { createPost,updatePost } from '../../actions/posts'
// for update operation
//import {useDispatch,useSelector} from 'react-redux'

function AddCake({currentId,setCurrentId}){
    const dispatch = useDispatch()
    const [cakeData,setCakeData] = useState({
        name: '',
        price:'',
        flavor: '' 
    })
    // for geting the data to update operation for currentID
    const cake = useSelector((state)=> currentId ? state.cake.find((p)=>p._id === currentId) : null)
    useEffect(()=>{
        if(cake) setCakeData(cake)
    },[cake])
    const handleSubmit = (event) => {
        event.preventDefault()
        if(currentId) {
            dispatch(updateCake(currentId,cakeData))
        } else {
        dispatch(addCake(cakeData))
        }
        clear()
    }
    const clear = () => {
        setCurrentId(null)
        setCakeData({
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
                value={cakeData.name}
                onChange={(e)=>setCakeData({...cakeData,name:e.target.value})}
                />
                <input type="number" placeholder="Enter Price" 
                value={cakeData.price}
                onChange={(e)=>setCakeData({...cakeData,price:e.target.value})}
                />
                <input type="text" placeholder="Enter Flavor Name" 
                value={cakeData.flavor}
                onChange={(e)=>setCakeData({...cakeData,flavor:e.target.value})}
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
export default AddCake