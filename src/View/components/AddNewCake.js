import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {addNewCakes} from '../redux'
function AddNewCake({addNewCakes}){
    const history = useHistory()
    const [name,setName]=useState('')
    const [price,setPrice]=useState(0)
    const [flavor,setFlavor]=useState('')
    const submitHandler = (event) => {
        event.preventDefault()
        addNewCakes(name,price,flavor)
        history.push('/')
    }
    return(
        <div>
            <h2>Add New Cake</h2>
            <form>
                <input type="text" placeholder="Enter Cake Name" 
                value={name}
                onChange={event=>setName(event.target.value)}
                />
                <input type="number" placeholder="Enter Price" 
                value={price}
                onChange={event=>setPrice(event.target.value)}
                />
                <input type="text" placeholder="Enter Flavor Name" 
                value={flavor}
                onChange={event=>setFlavor(event.target.value)}
                />
                <button
                onClick={submitHandler}
                >Add Details</button>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        cakes: state.cake.cakes
    }
}
const mapDispatchToProps = dispatch => {
    return { 
    addNewCakes: (name,price,flavor) => dispatch(addNewCakes(name,price,flavor))
    }
}
//export default AddNewCake
export default connect(mapStateToProps,mapDispatchToProps)(AddNewCake)