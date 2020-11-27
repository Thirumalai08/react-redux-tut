import React, { useState } from 'react'
import {connect} from 'react-redux'
import {addCakes} from '../redux'

function AddCakeContainer({addCakes}){
    const [name,setName]=useState('')
    const [price,setPrice]=useState(0)
    const [flavor,setFlavor]=useState('')
    return(
        <div>
            <h1>Add Cake</h1>
            <form>
                <div className="form-control">
                    <input type="text" placeholder="Enter Cake Name" 
                    //name=""
                    value={name}
                    onChange={event => setName(event.target.value)}
                    />
                </div>
                <div className="form-control">
                    <input type="number" placeholder="Enter Price" 
                    //name=""
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                    />
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Enter Flavor Name" 
                    //name=""
                    value={flavor}
                    onChange={event => setFlavor(event.target.value)}
                    />
                </div>
                <button
                onClick={() => addCakes(name,price,flavor)}
                >Add Details</button>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {
         cakes: state.cake.cakes // newCakeData: state.cake //
    }
}
const mapDispatchToProps = dispatch => {
   // const newCake = {  }
    return {
        addCakes: (name,price,flavor) => dispatch(addCakes(name,price,flavor))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddCakeContainer)