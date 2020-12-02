import React from 'react'
import { useSelector } from 'react-redux'
import Cake from './Cake/Cake'

function Cakes({setCurrentId}){
    const cakes = useSelector((state)=>state.cake)
    console.log(cakes)
    return(
        !cakes.length ? <h2>Loading...</h2> : (
            <div>
                <h1>Cakes</h1>
                {cakes.map((cake)=>(
                    <div key={cake._id}>
                        <Cake cake={cake} setCurrentId={setCurrentId} />
                    </div>
                ))}
            </div>
        )
    )
}
export default Cakes