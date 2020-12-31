import React,{useState}from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import {auth} from './firebase';
function Login() {
    const history=useHistory();
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');

    const signIn=e=>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push('/')
            })
            .catch(error=>{alert(error.message)});
    }

   
    return (
        <div className="login">
            <Link to=''>
            <img className="login__logo"src="https://tse1.mm.bing.net/th?id=OIP.p2AZTO1yhGdkyGx3jq-RwQHaCO&pid=Api&P=0&w=517&h=157" alt=""/>

            </Link>
                       <div className="login__container">
            <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={((e)=>{setemail(e.target.value)})}></input>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={((e)=>{setpassword(e.target.value)})}/>
                    <button type="submit" onClick={signIn}>Sign In</button>
                </form>
                <p>
                 By continuing, you agree to Amazon Clone Conditions of Use and Privacy Notice.
                </p>
             
            </div>
            <div className="login__newAccount">
               <h4>New to Amazone?</h4>
               <Link className='login__register' to='/CreateAccount'>
               <button >Create your Amazon account</button>
               </Link>
               
            </div>
        </div>
    )
}

export default Login;
