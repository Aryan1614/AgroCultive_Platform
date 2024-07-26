import React, { useState } from 'react';
import Footer from '../components/common/Footer';
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../services/operations/AuthAPI";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const InputOTPSlot = ({ index, handleChange, value }) => {
  return (
    <input
      type="text"
      maxLength="1"
      value={value}
      onChange={(e) => handleChange(index, e.target.value)}
      className="border border-gray-300 rounded w-12 h-12 text-center mx-1"
    />
  );
};

const InputOTPGroup = ({ children }) => {
  return <div className="flex justify-center">{children}</div>;
};

const InputOTP = ({ children }) => {
  return <div>{children}</div>;
};

const OtpVerfiy = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(6).fill(''));
  const { signupData } = useSelector((state) => state.auth);

  useEffect(() => {
    // Only allow access of this route when user has filled the signup form
    if (!signupData) {
      navigate("/signup");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeHandler = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    console.log('OTP Value:', otpValue);

    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;

    const otp = otpValue;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };

  return (
    <div className='overflow-hidden bg-[#f3f3f1]'>
      <main className="flex-1 pt-24">
        <section className="w-full bg-muted py-12 md:py-22 lg:py-28">
          <div className="container grid items-center justify-center gap-6 px-4 md:px-6">
            <div className="mx-auto w-full max-w-md space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">OTP Verification</h1>
                <p className="text-muted-foreground">Enter the 6-digit code sent to your phone.</p>
              </div>
              <form className="space-y-4" onSubmit={submitHandler}>
                <div className="flex justify-center">
                  <InputOTP>
                    <InputOTPGroup>
                      {otp.map((value, index) => (
                        <InputOTPSlot
                          key={index}
                          index={index}
                          value={value}
                          handleChange={changeHandler}
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <button type="submit" className="w-full bg-gray-300 py-2 rounded-md">
                  Verify
                </button>
              </form>
              <div className="text-center text-sm text-muted-foreground">
                Didn't receive the code?{" "}
                <button 
                  type="button" 
                  className="font-medium underline hover:text-primary"
                >
                  Resend
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className='mt-24'></div>
      <Footer/>
    </div>
  );
};

export default OtpVerfiy;
