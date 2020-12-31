import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {auth} from './firebase';
import './Createacc.css';
function Createacc() {

    const history=useHistory();
    const[username,setusername]=useState('');
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');

    const register= e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                // if succesfully created
              
                    return auth.user.updateProfile({
                        displayName:username
                        
                    })
                   
            })
            .catch(error=>{alert(error.message)})
        history.push('/login')
        
    }
    return (
        <div className="CreateAcc">
        <Link to=''>
        <img className="CreateAcc__logo"src="https://tse1.mm.bing.net/th?id=OIP.p2AZTO1yhGdkyGx3jq-RwQHaCO&pid=Api&P=0&w=517&h=157" alt=""/>
        </Link>
                   <div className="CreateAcc__container">
        <h2>Create Account</h2>
            <form>
                 <h5>Username</h5>
                <input type="text" value={username} onChange={((e)=>{setusername(e.target.value)})}></input>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={((e)=>{setemail(e.target.value)})}></input>
                <h5>Password</h5>
                <input type="password" value={password} onChange={((e)=>{setpassword(e.target.value)})}/>
                <button type="submit" onClick={register}>Register</button>
            </form>
           
        </div>
       
    </div>
    )
}

export default Createacc
