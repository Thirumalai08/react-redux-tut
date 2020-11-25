import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {deleteIcecreams, fetchIcecreams} from '../redux'

function IcecreamContainer({fetchIcecreams,deleteIcecreams,icecreamData}){
    useEffect(()=>{
        fetchIcecreams()
    },[])
    return icecreamData.loading ? (
        <h2>Loading...</h2>
        ) : icecreamData.error ? (
            <h2>{icecreamData.error}</h2>
        ) : (
            <div>
            <h2>Icecream List</h2>
            {
                icecreamData && icecreamData.icecreams && icecreamData.icecreams.map(icecream=> {
                return <div key={icecream._id}>
                    <h2>Icecream Name:{icecream.name}</h2>
                    <h3>Icecream Flavour:{icecream.flavor}</h3>
                    <h5>Price:{icecream.price}</h5>
                    <button
                    onClick={()=>deleteIcecreams(icecream)}
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
        icecreamData: state.icecream
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchIcecreams: ()=>dispatch(fetchIcecreams()),
        deleteIcecreams: (icecream)=>dispatch(deleteIcecreams(icecream))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IcecreamContainer)