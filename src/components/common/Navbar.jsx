import React from 'react'
import { FaLeaf } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../services/operations/AuthAPI';
import { RiRobot3Line } from "react-icons/ri";

function Navbar() {
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function LogoutHandler(e){
        e.preventDefault();
        dispatch(logout(navigate));
    }

  return (
    <div className='w-full text-black bg-white py-5 fixed z-50'>
        <div className='max-w-[1200px] flex flex-row items-center mx-auto justify-between'>
            <Link to={"/"}>
                <div className='flex flex-row gap-2 items-center text-md'>
                    <FaLeaf className='text-2xl font-bold'/>
                    <p className='text-2xl font-bold'>Agro Cultive</p>
                </div>
            </Link>

            {
                token !=null && (
                    <div className='flex flex-row items-center gap-4 text-md font-semibold'>
                        <Link to={"/dashboard/financialliteracy"} className='hover:underline transition-all duration-200'>Financial Literacy</Link>
                        <Link to={"/dashboard/croprecommendation"} className='hover:underline transition-all duration-200'>Crop Recommendation</Link>
                        <Link to={"/dashboard/fertilizerguidence"} className='hover:underline transition-all duration-200'>Fertilizer Guidence</Link>
                        <Link to={"/dashboard/loans"} className='hover:underline transition-all duration-200'>Loans</Link>
                        <Link to={"https://statewise-yield-industry.streamlit.app/"} className='hover:underline transition-all duration-200'>Industry</Link>
                    </div>
                )
            }

            <div className='flex flex-row items-center gap-6'>
                {
                    token == null && (
                        <div className='flex gap-5'>
                            <Link to={'/login'}>
                                <div className='px-4 py-1 rounded-md flex justify-center items-center text-white bg-green-700'>Login</div>
                            </Link>
                            <Link to={'/signup'}>
                                <div className='px-4 py-1 rounded-md flex justify-center items-center bg-[#f4f4f4] text-black'>Signup</div>
                            </Link>
                        </div>
                    ) 
                }
                { 
                    token!=null && (
                        <div className='flex gap-5'>
                            <Link to={'/profile'}>
                                <div className='px-4 py-1 rounded-md flex justify-center items-center text-white bg-green-700'>Profile</div>
                            </Link>
                            <Link to={'/'} onClick={LogoutHandler}>
                                <div className='px-4 py-1 rounded-md flex justify-center items-center bg-[#f4f4f4] text-black'>Logout</div>
                            </Link>
                        </div>
                    )
                }{
                    token != null && (
                        <Link to={"https://ask-finance.streamlit.app/"} target='_blank' rel="noopener noreferrer" className='flex flex-row gap-1 items-center'> 
                            <RiRobot3Line/>
                            <p className='text-sm'>Financial Assistance</p>
                        </Link>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar;