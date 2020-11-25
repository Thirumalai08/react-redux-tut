import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchCakes,deleteCakes} from '../redux'

function CakeContainer({fetchCakes,deleteCakes,cakeData}){
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
        <div>
            <h2>Cake List</h2>
            {
                cakeData && cakeData.cakes && cakeData.cakes.map(cake=> {
                return <div key={cake._id}>
                    <h2>Cake Name:{cake.name}</h2>
                    <h3>Cake Flavour:{cake.flavor}</h3>
                    <h5>Price:{cake.price}</h5>
                    <button
                    onClick={()=>deleteCakes(cake)}
                    >Delete</button>&nbsp;
                    <button>Edit</button>
                </div>
            })
            }
        </div>
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
        deleteCakes: (cake)=>dispatch(deleteCakes(cake))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)