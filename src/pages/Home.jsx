import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/common/Footer';
import { LuLeaf,LuBook } from 'react-icons/lu';
import { FaRegBookmark,FaGasPump,FaRegStar } from 'react-icons/fa';
import { VscGraphLine } from 'react-icons/vsc';
import bg from '../assets/back.jpg';

function Home() {
  return (
    <div className="bg-[#f3f3f1] w-full max-h-screen h-screen pt-[120px]">
      <div className='max-w-[1080px] mx-auto'>
        <section className='flex flex-row items-center justify-between h-[500px]'>
          <div className='w-[50%] flex flex-col gap-5'>
              <h3 className='font-bold text-4xl'>Revolutionize Your Agricultural Journey</h3>
              <p className=''>Agro Cultivate is your one-stop platform for comprehensive agricultural solutions. Streamline your farm operations, optimize crop planning, and access a wealth of resources to elevate your agricultural success.</p>
              <Link to={"/signup"}>
                <p className='px-4 py-2 w-32 rounded-md flex justify-center items-center text-white bg-green-700'>Get Started</p>
              </Link>
          </div>
          <div className=''>
            <img src={bg} alt='Logo'></img>
          </div>
        </section>
      </div>

      <div className='bg-white max-w-[1080px] gap-3 mt-10 text-black w-full mx-auto pb-18'>
        <section className='flex flex-col h-[650px] gap-3 mx-auto w-ful mt-52'>
            <h3 className='text-4xl text-center font-bold'>Unlock The Power Of Agro Cultive</h3>
            <div className='text-xl text-center'>Discover the comprehensive suite of tools and resources that empower your agricultural success.</div>
            <div className='flex flex-wrap gap-6 justify-center mt-10'>
              <div className='border-[#f3f3f1] text-green-700 border-2 rounded-sm w-[30%] px-4 py-6'>
                <FaRegBookmark className='text-2xl font-extrabold'  />
                <h2 className='text-2xl mt-3 text-black font-bold'>Financial Literacy</h2>
                <div className='text-black'>Improve your understanding of financial concepts and make informed decisions for your farm.</div>
              </div>
              <div className='border-[#f3f3f1] text-green-700 border-2 rounded-sm w-[30%] px-4 py-6'>
                <LuLeaf className='text-2xl font-extrabold' />
                <h2 className='text-2xl mt-3 text-black font-bold'>Crop Recommendations</h2>
                <div className='text-black'>Get personalized recommendations for the best crops to grow based on your location and climate.</div>
              </div>
              <div className='border-[#f3f3f1] text-green-700 border-2 rounded-sm w-[30%] px-4 py-6'>
                <FaGasPump className='text-2xl font-extrabold' />
                <h2 className='text-2xl mt-3 text-black font-bold'>Fertilizer Guidance</h2>
                <div className='text-black'>Optimize your fertilizer usage and improve crop yields with our expert recommendations.</div>
              </div>
              <div className='border-[#f3f3f1] text-green-700 border-2 rounded-sm w-[30%] px-4 py-6'>
                <LuBook className='text-2xl font-extrabold' />
                <h2 className='text-2xl mt-3 text-black font-bold'>Loan Information</h2>
                <div className='text-black'>Explore various loan options and find the best financing solutions for your farming needs.</div>
              </div>
              <div className='border-[#f3f3f1] text-green-700 border-2 rounded-sm w-[30%] px-4 py-6'>
                <FaRegStar className='text-2xl font-extrabold' />
                <h2 className='text-2xl text-black mt-3 font-bold'>Industry Information</h2>
                <div className='text-black'>Discover crop sources and suppliers in different regions to support your business.</div>
              </div>
              <div className='border-[#f3f3f1] text-green-700 border-2 rounded-sm w-[30%] px-4 py-6'>
                <VscGraphLine className='text-2xl font-extrabold' />
                <h2 className='text-2xl text-black mt-3 font-bold'>Financial Assistant</h2>
                <div className='text-black'>Upload your financial PDFs and let our virtual assistant analyze them and provide you with personalized guidance.</div>
              </div>
            </div>
          </section>
      </div>

      <Footer/>
    </div>
  );
}

export default Home;