import React from 'react'
import CakeContainer from '../components/CakeContainer'
import IceCreamContainer from '../components/IcecreamContainer'
function Home(){
    return(
        <div>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <CakeContainer />
                <IceCreamContainer />
            </div>
        </div>
    )
}
export default Home