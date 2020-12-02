import React from 'react'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <div>
            <Link to="/cake"><button>Cake</button></Link>
            <Link to="/icecream"><button>Icecream</button></Link>
        </div>
    )
}
export default Home