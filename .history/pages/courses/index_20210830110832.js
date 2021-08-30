import Head from "next/head"
import Spacer from "../components/Spacer"


export default function Courses(){

    return (
        <>
            <Head>
                <meta type="description" content="Learn web design, web development, ui/ux design, front-end, back-end with Deborah Egonu. Start your journey today!" />
                <title>Start your journey - Become a designer/developer</title>
            </Head>
            <section className="w-full  h-96">
                <div className="flex flex-row justify-center h-full items-center">
                    <div className="text-center">
                        <p className=" text-green-300 text-5xl flex flex-row font-bold h-auto items-center justify-start">To teach is to master <br/> and to learn is the journey.</p>
                    </div>
                </div>
            </section>
            <Spacer />
            <section className="bg-blue-500 h-96">
                
                <div className="flex flex-col justify-center h-full items-center">
                <h1 className="text-center pb-5 text-5xl font-bold text-gray-50">Start your journey</h1>
                    <form>
                        <p className="text-2xl">I,&nbsp;
                            <span>
                                <input className="p-2 no-outline" type="text" placeholder="enter your name" />
                            </span> want to be a&nbsp;
                            <select className="p-2 no-outline text-xl">
                                <option>Web Developer</option>
                            </select>
                        </p>
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