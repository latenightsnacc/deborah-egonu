export default function Courses(){
    return (
        <>
            <section className="w-full  h-96">
                <div className="flex flex-row justify-center h-full items-center">
                    <div className="text-center">
                        <p className=" text-blue-600 text-5xl flex flex-row font-bold h-auto items-center justify-start">To teach is to master <br/> and to learn is the journey.</p>
                    </div>
                </div>
            </section>
            <div className="my-10"></div>
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
                    <h2 className="text-6xl pb-3 font-bold">javascript</h2>
                    <button className="opacity-0 group-hover:opacity-100 bg-blue-500 py-3 px-10 rounded-xl text-gray-100 font-semibold tracking-widest ">Begin</button>   
                </div>
            </div>    
        </>
    )
}