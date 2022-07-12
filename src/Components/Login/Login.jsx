import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../../firebase'
import './Login.css'

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    const [name,setName]= useState('');
    const [profilePic,setProfilePic] = useState('');
    const dispatch = useDispatch();

    const register = () =>{
        if(!name){
            return alert('please enter a full name ');
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL: profilePic,
            })
            .then(()=>{
                dispatch(Login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:name,
                    photoURL: profilePic
                }))
            })
        }).catch((error) => alert(error));
    }

    const signIn =(e) =>{
        e.preventDefault();
    }
  return (
    <div className='login'>
        <img src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/01-dsk-e8-v2.png/jcr:content/renditions/01-dsk-e8-v2-2x.png" alt="" />
        <form>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full name (required if registering)" type="text"  />
            <input type="text" value={profilePic} onChange={e=>setProfilePic(e.target.value)} placeholder='Profile pics URL (optional)' />
            <input type="email" placeholder='email' value={email} onChange={e=>setEmail(e.target.value)} />
            <input type="password" placeholder='password' value={password} onChange={(e => setPassword(e.target.value))} />
            <button type='submit' onClick={signIn} >Sign In</button>
        </form>
        <p>Not a member? <span className='login-register' onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login