import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchCakes} from '../redux'

function CakeContainer({fetchCakes,cakeData}){
    useEffect(()=>{
        fetchCakes()
    },[])
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
                    <button>Delete</button>&nbsp;
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
        fetchCakes: ()=>dispatch(fetchCakes())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)