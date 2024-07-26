import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { setSignupData } from '../slices/authSlice';
import { sendOtp } from '../services/operations/AuthAPI';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

function SignUp() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const[FormData,setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
        accountType:'',
    });

    function changeHandler(e){
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    function submitHandler(e){
        e.preventDefault()

        if (FormData.password !== FormData.confirmPassword) {
          toast.error("Passwords Do Not Match")
          return
        }

        // Setting signup data to state
        // To be used after otp verification
        dispatch(setSignupData(FormData))
        // Send OTP to user for verification
        dispatch(sendOtp(FormData.email, navigate));

        // Reset
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          accountType:'User'
        });
    }

  return (
    <div className=''>
        <main className="flex-1 bg-[#f3f3f1]">
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-6 px-4 md:px-6">
            <div className="mx-auto w-full max-w-md space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <p className="text-muted-foreground">Create your account to get started with Agro Cultivate.</p>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-12">
                  <div className="space-y-2">
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" name='firstName' value={FormData.firstName} className='py-2 px-2 rounded-md' type="text" placeholder="John" required  onChange={changeHandler}/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" name='lastName' value={FormData.lastName} className='py-2 px-2 rounded-md' type="text" placeholder="Doe" required onChange={changeHandler}/>
                  </div>
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input id="email" className='py-2 px-2 rounded-md' name='email' value={FormData.email} type="email" placeholder="m@example.com" required onChange={changeHandler}/>
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="password">Password</label>
                  <input id="password" name='password' value={FormData.password} className='py-2 px-2  rounded-md' type="password" required onChange={changeHandler}/>
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input id="confirmPassword" name='confirmPassword' value={FormData.confirmPassword} className='py-2 px-2 rounded-md' type="password" required onChange={changeHandler}/>
                </div>
                <div className="space-y-2 flex flex-row gap-2 items-center">
                  <label htmlFor="accountType">Account Type</label>
                  <select id="accountType" name="accountType" value={FormData.accountType} onChange={changeHandler} className='py-2 rounded-md'>
                    <option value="">Select account type</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-gray-300 py-2 rounded-md" onClick={submitHandler}>
                  Sign Up
                </button>
              </form>
              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to={"/login"} className="font-medium underline hover:text-primary" >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default SignUp