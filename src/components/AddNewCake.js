import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {register} from '../redux'

function AddNewCake(props){
    const history = useHistory()
    const [name,setName]=useState('')
    //const [price,setPrice]=useState(0)
    const [email,setEmail]=useState('')
    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo } = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
          dispatch(register(name, email));
      };
    useEffect(()=>{
        if(userInfo) {
            history.push('/')
        }
    },[userInfo])
    return(
        <div>
            <h1>Add Cake</h1>
            <form>
                <div className="form-control">
                    <input type="text" placeholder="Enter  Name" 
                    //name=""
                    value={name}
                    onChange={event => setName(event.target.value)}
                    />
                </div>
                <div className="form-control">
                    <input type="number" placeholder="Enter Price" 
                    //name=""
                    //value={price}
                    //onChange={event => setPrice(event.target.value)}
                    />
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Enter Email" 
                    //name=""
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <button
                onClick={submitHandler}
                >Add Details</button>
            </form>
        </div>
    )
}
export default (AddNewCake)