import React from 'react'
import { useSelector } from 'react-redux'
import Icecream from './Icecream/Icecream'

function Icecreams({setCurrentId}){
    const icecreams = useSelector((state)=>state.icecream)
    console.log(icecreams)
    return(
        !icecreams.length ? <h2>Loading...</h2> : (
            <div>
                <h1>Icecreams</h1>
                {icecreams.map((icecream)=>(
                    <div key={icecream._id}>
                        <Icecream icecream={icecream} setCurrentId={setCurrentId} />
                    </div>
                ))}
            </div>
        )
    )
}
export default Icecreams