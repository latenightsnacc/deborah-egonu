export default function GridNav(){
    return(
        <>
            <div className="h-10"></div>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-blue-500 mr-10 py-96 mb-20">
                    <div className="flex items-center">
                        <h1 className="text-7xl text-white font-semibold ">Hello World!</h1>
                    </div>    
                </div>
                <div className="w-full md:w-1/2 bg-blue-500 mt-20 ml-10 py-96">
                    <div className="flex items-center">
                        <h1 className="text-7xl text-white font-semibold font-fancy">Hello World!</h1>
                    </div>    
                </div>
                
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-blue-500 mr-10 py-96">
                    <div className="flex items-center">
                        <h1 className="text-7xl text-white font-semibold ">Hello World!</h1>
                    </div>    
                </div>
                <div className="w-full md:w-1/2 bg-blue-500 mt-20 ml-10 py-96">
                    <div className="flex items-center">
                        <h1 className="text-7xl text-white font-semibold">Hello World!</h1>
                    </div>    
                </div>
                
            </div>
        </>
    )
}