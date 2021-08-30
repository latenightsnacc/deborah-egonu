import Head from "next/head"
import Spacer from "../components/Spacer"
import Link from 'next/link'

export default function Courses(){

    return (
        <>
            <Head>
                <meta type="description" content="Learn web design, web development, ui/ux design, front-end, back-end with Deborah Egonu. Start your journey today!" />
                <title>Start your journey - Become a designer/developer</title>
            </Head>
            <section className="w-full h-96">
                <div className="flex flex-row justify-center h-full items-center">
                    <div className="text-center">
                        <p className=" text-gray-900 text-xl flex flex-row font-light h-auto items-center justify-start">To teach is to master <br/> to learn is the journey.</p>
                    </div>
                </div>
            </section>
            <Spacer />
            <section className="bg-blue-500 h-96 dark-mode:bg-gray-900">
                
                <div className="flex flex-col justify-center h-full items-center">
                <h1 className="text-center pb-5 text-5xl font-bold text-gray-50">Start your journey</h1>
                    <form className="flex flex-row">
                        <div className="text-3xl  font-semibold text-gray-100">I,&nbsp;
                            <span>
                                <input className="p-2 text-blue-500 focus:outline-none placeholder-blue-500 " type="text" placeholder="enter your name" />
                            </span> want to be a&nbsp;
                            <select className="p-2  focus:outline-none no-outline text-blue-500" required="true">
                                <option value="" selected>Select your path</option>
                                <option value="Web Developer">Web Developer</option>
                                <option value="Undecided">Undecided</option>
                            </select>
                        </div>
                        <Link href="/web">
                        
                            <button className="bg-gray-50 ml-5 px-10 py-2 text-2xl text-blue-500 text-center w-36 rounded-2xl shadow-xl hover:shadow-2xl hover:text-blue-600">Start</button>
                        </Link>
                    </form>
                </div>
            </section>
            
            <Spacer />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 grid-rows-auto">
                <div className="h-96 flex flex-col items-center justify-center relative group hover:bg-gray-50">
                    <h2 className="text-6xl pb-3 font-bold uppercase"><span className="text-blue-600">H</span><span className="text-yellow-300">T</span><span className="text-red-600">M</span><span className="text-green-600">L</span></h2>
                    <button className="opacity-0 group-hover:opacity-100 bg-blue-500 py-3 px-10 rounded-xl text-gray-100 font-semibold tracking-widest ">Begin</button>   
                </div>
                <div className="h-96 flex flex-col items-center justify-center relative group hover:bg-gray-50">
                    <h2 className="text-6xl pb-3 font-bold uppercase"><span className="text-blue-600">c</span><span className="text-blue-600">s</span><span className="text-blue-600">s</span></h2>
                    <button className="opacity-0 group-hover:opacity-100 bg-blue-500 py-3 px-10 rounded-xl text-gray-100 font-semibold tracking-widest ">Begin</button>   
                </div>
                <div className="h-96 flex flex-col items-center justify-center relative group hover:bg-gray-50">
                    <h2 className="text-6xl text-yellow-300 pb-3 font-bold capitalize">javascript</h2>
                    <button className="opacity-0 group-hover:opacity-100 bg-blue-500 py-3 px-10 rounded-xl text-gray-100 font-semibold tracking-widest ">Begin</button>   
                </div>
            </div>    
        </>
    )
}