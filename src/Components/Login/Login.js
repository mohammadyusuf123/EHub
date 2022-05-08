import React, { useRef, useTransition } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import GoogleSingIn from '../GoogleSingIn/GoogleSingIn';
import Loading from '../Loading/Loading';
import axios from 'axios';
import useToken from '../../hooks/useToken';

const Login = () => {
    const emailRef = useRef('');
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const navigate=useNavigate()
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
   const [
       signInWithEmailAndPassword,
       user,
       loading,
       error,
     ] = useSignInWithEmailAndPassword(auth);
     console.log(user)
     const[token]=useToken(user)
     const handleSubmit=async(event)=>{
        event.preventDefault()
        const email=event.target.email.value;
        const password=event.target.password.value;
        await signInWithEmailAndPassword(email,password)
        // const{data}=await axios.post('http://localhost:2000/login',{email});
        // console.log(data)
        //  localStorage.setItem("accessToken",data)
        
         

    }
  
    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Please!! Check Your Email');
        }
        else{
            toast('Please!! provide your email address');
        }
    }
    const handleRegister=()=>{
        navigate(from, { replace: true })
    }
    
    if(loading){
        return<Loading></Loading>
    }
   if(token){
    navigate(from, { replace: true })
   }
    if (error) {
        return (
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        );
      }
  
    return (
        <div>
            <form  onSubmit={handleSubmit} class="w-25 mx-auto shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input name='password' type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
    
          <div class="text-primary  justify-content-between mt-3 ms-5">
          <p><button className='send-mail btn btn-link text-primary pe-auto text-decoration-none' onClick={handleResetPassword}>Forgotten password?</button></p>
          </div>
        <button type="submit" class="btn btn-primary w-100 mt-3">Log In</button>
        <GoogleSingIn></GoogleSingIn>
        <hr class="bg-secondary"/>
        <div id="passwordHelpBlock" class="form-text text-success">
            New to Electronics Hub?
          </div>
        <Link to='/register' onClick={handleRegister} type="submit" class="btn btn-success w-100 mt-3">Create New Account</Link>
      </form>
      <ToastContainer />
        </div>
    );
};

export default Login;