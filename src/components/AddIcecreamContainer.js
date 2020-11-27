import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {registerIcecreams} from '../redux'
function AddIcecreamContainer(){
    const history = useHistory()
    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    const [flavor,setFlavor] = useState('')
    const addIce = useSelector((state)=>state.icecream)
    const {icecreams} = addIce
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault();
          dispatch(registerIcecreams(name,price,flavor));
      };
    useEffect(()=>{
        if(icecreams){ 
            history.push('/') 
        }
    },[icecreams])
    return(
        <div>
            <h1>Add Icecream</h1>
            <form>
                <div className="form-control">
                    <input type="text" placeholder="Enter Icecream Name" 
                    //name=""
                    value={name}
                    onChange={event=>setName(event.target.value)}
                    />
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Enter Price" 
                    //name=""
                    value={price}
                    onChange={event=>setPrice(event.target.value)}
                    />
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Enter Flavor Name" 
                    //name=""
                    value={flavor}
                    onChange={event=>setFlavor(event.target.value)}
                    />
                </div>
                <button
                onClick={submitHandler}
                >Add Details</button>
            </form>
        </div>
    )
}
export default AddIcecreamContainer