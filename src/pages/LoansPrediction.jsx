import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function LoansPrediction() {

    const [FormData, setFormData] = useState({
        area: '',
        contour: '',
        distance: '',
        soil: '',
        income: '',
        loan: ''
    });

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData({
            ...FormData,
            [name]: value
        });
    }

    function submitHandler(){
        console.log(FormData);
    }

  return (
    <div>
        <div className="w-full max-w-2xl mx-auto py-12 md:py-16 lg:py-20">
            <div className='flex flex-col gap-5 mt-12'>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-center font-bold text-2xl'>Agriculture Loan Prediction <Link to={""} className='text-xl font-semibold'>Demo Link</Link></h3>
                    <p className='text-center font-semibold'>Enter your land and financial details to get a loan prediction.</p>
                </div>
                <div className=' mt-5 p-10 border rounded-md border-gray-700'>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={submitHandler}>
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <label htmlFor="area">Area of the Land (acres)</label>
                                <input id="area" className='px-3 py-2' type="number" name='area' onChange={changeHandler} value={FormData.area} placeholder="Enter land area" required/>
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="contour">Land Contour</label>
                                <select id="contour" name='contour' required className='px-3 py-2' onChange={changeHandler} value={FormData.contour}>
                                    <option value="" selected>Select contour</option>
                                    <option value="flat">Flat</option>
                                    <option value="sloping">Sloping</option>
                                    <option value="undulating">Undulating</option>
                                </select>
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="distance">Distance from Road (meters)</label>
                                <input id="distance" name='distance' required className='px-3 py-2' onChange={changeHandler} value={FormData.distance} type="number" placeholder="Enter distance" />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="soil">Soil Type</label>
                                <select id="soil" name='soil' required className='px-3 py-2' onChange={changeHandler} value={FormData.soil}>
                                    <option value="" selected>Select soil type</option>
                                    <option value="alluvial">Alluvial</option>
                                    <option value="black">Black</option>
                                    <option value="red">Red</option>
                                    <option value="sandy">Sandy</option>
                                </select>
                            </div>
                            </div>
                            <div className="space-y-4">
                            <div className="grid gap-2">
                                <label htmlFor="income">Farmer's Annual Income (INR)</label>
                                <input id="income" name='income' required className='px-3 py-2' onChange={changeHandler} value={FormData.income} type="number" placeholder="Enter annual income" />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="loan">Loan Request Amount (INR)</label>
                                <input id="loan" type="number" required className='px-3 py-2' onChange={changeHandler} name='loan' value={FormData.loan} placeholder="Enter loan amount" />
                            </div>
                            <div className="flex justify-end">
                                <button className='py-2 px-3 bg-green-700 text-white font-bold rounded-md'>Predict</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='mt-5 p-10 border rounded-md border-gray-700'>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <p className="font-medium">Maximum Loan Amount:</p>
                            <p className="text-primary text-green-500 font-bold text-xl">₹500,000</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-medium">Loan Approval Probability:</p>
                            <p className="text-primary text-green-500 font-bold text-xl">85%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoansPrediction