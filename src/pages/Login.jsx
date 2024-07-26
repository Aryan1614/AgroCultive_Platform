import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../services/operations/AuthAPI';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const[FormData,setFormData] = useState({
        email:'',
        password: '',
    });

    const { email, password } = FormData;

    const changeHandler = (e) => {
        setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
        }))
    }

    const clickHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password, navigate));
    }

  return (
    <div className='mt-7 bg-[#f3f3f1]'>
      <main className="flex-1">
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-6 px-4 md:px-6">
            <div className="mx-auto w-full max-w-md space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-muted-foreground">
                  Welcome back! Please enter your credentials to access your account.
                </p>
              </div>
              <form className="space-y-5 ">
                <div className="space-y-2 w-full">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" onChange={changeHandler} name='email' value={FormData.email} placeholder="m@example.com" className='w-full rounded-md py-2 px-2' required />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password">Password</label>
                    <Link href="#" className="text-sm font-medium underline hover:text-primary" prefetch={false}>
                      Forgot password?
                    </Link>
                  </div>
                  <input id="password" type="password" onChange={changeHandler} name='password' value={FormData.password} className='w-full py-2 px-2 rounded-md' required />
                </div>
                <button type="submit" className="w-full bg-gray-300 py-2 rounded-md" onClick={clickHandler}>
                  Login
                </button>
              </form>
              <div className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="#" className="font-medium underline hover:text-primary" to={"/signup"}>
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

export default Login