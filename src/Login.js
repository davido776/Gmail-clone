import React from 'react';
import "./Login.css";
import gmailogo from './gmaillogo.jpg'
import { Button } from '@material-ui/core';
import { auth,provider } from './firebase';
import {useDispatch} from 'react-redux';
import {login} from './features/userSlice';

function Login(props) {
    const dispatch = useDispatch();
    const Login =()=>{
        
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({
                displayName :user.displayName,
                email:user.email,
                photoUrl:user.photoURL,
            }))
        })
        .catch((error)=>alert(error.message))
    }
    
    return (
        <div className='login'>
            <div className='login__container'>
                <img src={gmailogo} alt=""/>
                <Button variant="contained" color="primary" onClick={Login}>Login</Button>
            </div>
        </div>
    );
}

export default Login;