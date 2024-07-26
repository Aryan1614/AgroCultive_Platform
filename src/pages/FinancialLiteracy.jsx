import React from 'react'
import { Link } from 'react-router-dom';
import VA_Video from '../assets/VA_demo.mp4'
import CA_Video from '../assets/crop-pred.mov';
import LoanA_Video from '../assets/loan.mov';
import Fertilizer_Video from '../assets/fert-pred.mov';
import last from "../assets/last.mp4";

function FinancialLiteracy() {
  return (
    <div className='pl-16 pr-16'>
        <div className="bg-background text-foreground mt-20">
        <main className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
            <header className="mb-8 w-full text-center flex flex-col items-center">
                <h1 className="text-3xl font-bold text-center sm:text-4xl md:text-5xl">
                    Empowering Farmers with Financial Literacy
                </h1>
                <p className="mt-4 w-full max-w-3xl text-center md:text-xl">
                    Discover how our suite of financial tools and services can help you grow your agricultural business.
                </p>
            </header>
            <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Featured Tools</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                    <video src={VA_Video} autoPlay loop controls className="h-full w-full object-cover" />
                </div>
                <Link to={"https://ask-finance.streamlit.app/"} target='_blank' className='underline hover:text-green-500 transition-all duration-200 gap-2 flex flex-row items-center'>
                 <h3 className="mb-2 text-lg font-medium">Virtual Assistant</h3><div className="mb-2 text-lg font-medium">Live Demo</div>
                </Link>
                <p className="text-muted-foreground">
                    Our virtual assistant can read and summarize financial PDF documents, making it easier to understand
                    complex information.
                </p>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                    <video src={CA_Video} autoPlay loop controls className="h-full w-full object-cover" />
                </div>
                <Link to={"https://blackrock-hackathon-crop-9dgzm5jd9loj4icwqfyzcv.streamlit.app/"} target='_blank' className='underline hover:text-green-500 transition-all duration-200 gap-2 flex flex-row items-center'>
                <h3 className="mb-2 text-lg font-medium">Crop Production Analysis</h3><div className="mb-2 text-lg font-medium">Live Demo</div>
                </Link>
                <p className="text-muted-foreground">
                    Analyze your crop production data and get insights to optimize your farming practices.
                </p>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                    <video src={LoanA_Video} autoPlay loop controls className="h-full w-full object-cover" />
                </div>
                <Link to={"https://loan-prediction-blackrock-hackthon-wy9nppfgd6y6mwjahlrdfn.streamlit.app/"} target='_blank' className='underline hover:text-green-500 transition-all duration-200 gap-2 flex flex-row items-center'>
                <h3 className="mb-2 text-lg font-medium">Loan Approval Process</h3><div className="mb-2 text-lg font-medium">Live Demo</div>
                </Link>
                <p className="text-muted-foreground">
                    Learn about our streamlined loan approval process and get the funding you need to grow your business.
                </p>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                    <video src={Fertilizer_Video} autoPlay='true' loop='true' controls className="h-full w-full object-cover" />
                </div>
                <Link to={"https://cropfertilizerprediction-3u4ywopeqzfvje9yvfkzzn.streamlit.app/"} target='_blank' className='underline hover:text-green-500 transition-all duration-200 gap-2 flex flex-row items-center'>
                <h3 className="mb-2 text-lg font-medium">Fertilizer Suggestion Tool</h3><div className="mb-2 text-lg font-medium">Live Demo</div>
                </Link>
                <p className="text-muted-foreground">
                    Our AI-powered tool analyzes your soil and crop data to provide personalized fertilizer recommendations.
                </p>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                    <video src={last} autoPlay loop controls className="h-full w-full object-cover" />
                </div>
                <Link to={""} target='_blank' className='underline hover:text-green-500 transition-all duration-200 gap-2 flex flex-row items-center'>
                    <h3 className="mb-2 text-lg font-medium">Industry Connections</h3>
                </Link>
                <p className="text-muted-foreground">
                    Leverage our network of industry partners to access valuable resources, training, and networking
                    opportunities.
                </p>
                </div>
            </div>
            </section>
            <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Why Choose Us?</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckIcon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-medium">Comprehensive Solutions</h3>
                <p className="text-muted-foreground">
                    Our suite of financial tools and services covers all your agricultural needs, from crop analysis to loan
                    management.
                </p>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <BoltIcon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-medium">Cutting-Edge Technology</h3>
                <p className="text-muted-foreground">
                    Our tools leverage the latest advancements in AI and data analytics to provide you with accurate,
                    data-driven insights.
                </p>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <UsersIcon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-medium">Dedicated Support</h3>
                <p className="text-muted-foreground">
                    Our team of experts is here to guide you every step of the way, ensuring you get the most out of our
                    services.
                </p>
                </div>
            </div>
            </section>
            <section className="mb-12 w-full">
            <h2 className="mb-4 text-2xl font-bold">Testimonials</h2>
            <div className="w-full flex flex-col gap-5">
                <div className="carousel flex flex-row gap-4">
                    <div className="carousel-item">
                        <div className="rounded-lg border bg-card p-6 shadow-sm">
                        <div className="mb-4 flex items-center">
                            <img src={`https://ui-avatars.com/api/?name=John+Doe`} alt="John Doe" className="mr-4 h-12 w-12 rounded-full" />
                            <div>
                            <h4 className="text-lg font-medium">John Doe</h4>
                            <p className="text-muted-foreground">Farmer, Acme Farm</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            "The virtual assistant has been a game-changer for my business. It's made it so much easier to
                            understand complex financial documents and make informed decisions."
                        </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="rounded-lg border bg-card p-6 shadow-sm">
                        <div className="mb-4 flex items-center">
                            <img src={`https://ui-avatars.com/api/?name=Jane+Appleseed`} alt="Jane Appleseed" className="mr-4 h-12 w-12 rounded-full" />
                            <div>
                            <h4 className="text-lg font-medium">Jane Appleseed</h4>
                            <p className="text-muted-foreground">Crop Production Manager, Greenfield Farms</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            "The crop production analysis tool has been invaluable in helping us optimize our farming practices
                            and increase yields. It's a must-have for any modern agricultural business."
                        </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="rounded-lg border bg-card p-6 shadow-sm">
                        <div className="mb-4 flex items-center">
                            <img src={`https://ui-avatars.com/api/?name=Sarah+Michaels`} alt="Sarah Michaels" className="mr-4 h-12 w-12 rounded-full" />
                            <div>
                            <h4 className="text-lg font-medium">Sarah Michaels</h4>
                            <p className="text-muted-foreground">Owner, Sunnybrook Farms</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            "The industry connections service has been invaluable in helping me expand my network and access new
                            resources and opportunities. It's truly a game-changer for small agricultural businesses like mine."
                        </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-5'>
                    <button className="py-2 px-3 w-fit bg-green-700 rounded-md text-white font-bold">Previous</button>
                    <button className="py-2 px-3 w-fit bg-green-700 rounded-md text-white font-bold">Next</button>
                </div>
            </div>
            </section>
            <section>
            <h2 className="mb-4 text-2xl font-bold">Get Started</h2>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-medium">Unlock the Power of Our Financial Tools</h3>
                    <p className="text-muted-foreground">
                    Sign up today and start leveraging our suite of financial services to grow your agricultural business.
                    </p>
                </div>
                <Link
                    to="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                    Get Started
                </Link>
                </div>
            </div>
            </section>
        </main>
      </div>
    </div>
  )
}

export default FinancialLiteracy;

function BoltIcon(props) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#157f3d"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <circle cx="12" cy="12" r="4" />
        </svg>
    )
    }

    function CheckIcon(props) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#157f3d"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M20 6 9 17l-5-5" />
        </svg>
    )
    }

    function UsersIcon(props) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#157f3d"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
    }
