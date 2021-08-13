export default function GridNav(){
    return(
        <>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-blue-500 py-96 mb-12">
                    <div className="flex items-center">
                        <h1 className="text-7xl text-white font-semibold ">Hello World!</h1>
                    </div>    
                </div>
                <div className="w-full md:w-1/2 bg-blue-500 mt-12 ml-5 py-96">
                    <div className="flex items-center">
                        <h1 className="text-7xl text-white font-semibold">Hello World!</h1>
                    </div>    
                </div>
                
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-blue-500 py-96">
                    <div className="flex items-center">
                        <h1 className="text-7xl text-white font-semibold ">Hello World!</h1>
                    </div>    
                </div>
                <div className="w-full md:w-1/2 bg-blue-500 mb-12 ml-5 py-96">
                    <div className="flex items-center">
                        <h1 className="text-7xl text-white font-semibold">Hello World!</h1>
                    </div>    
                </div>
                
            </div>
        </>
    )
}