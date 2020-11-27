import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {fetchCakes} from '../redux'

function CakeItems({fetchCakes,cakeData}){
    useEffect(()=>{
        fetchCakes()
    },[])
    /*const onDelete = (id) => {
        deleteCakes(id)
        console.log(id)
    }*/
    return cakeData.loading ? (
    <h2>Loading...</h2>
    ) : cakeData.error ? (
        <h2>{cakeData.error}</h2>
    ) : (
        <>
            <h2>Cake List</h2>
            <Link to="/addcake"><button>Add New Cake</button></Link>
            {
                cakeData && cakeData.cakes && cakeData.cakes.map(cake=> (
                 <div key={cake._id}>
                    <h2>Cake Name:{cake.name}</h2>
                    <h3>Cake Flavour:{cake.flavor}</h3>
                    <h5>Price:{cake.price}</h5>
                    <button
                    //onClick={()=>deleteCakes(cake)}
                    >Delete</button>&nbsp;
                    <button>Edit</button>
                </div>
            ))
            }
        </>
    )

}
const mapStateToProps = state => {
    return {
        cakeData: state.cake
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchCakes: ()=>dispatch(fetchCakes()),
       // deleteCakes: (cake)=>dispatch(deleteCakes(cake))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeItems)