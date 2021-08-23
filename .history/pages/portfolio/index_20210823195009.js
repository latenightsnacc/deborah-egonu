export default function Portfolio(){
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto">
                <div className="bg-green-600 h-96 relative group hover:bg-gray-50">
                    <div className="absolute top-44 left-36 md:left-40">
                        <h2 className="text-gray-100 group-hover:text-green-600 opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:font-semibold uppercase text-2xl tracking-widest ">Trakeet</h2>
                    </div>
                    
                </div>
                <div className="bg-blue-600 h-96 relative group hover:bg-gray-50">
                    <div className="absolute top-44 left-36 md:left-40">
                        <h2 className="text-gray-100 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:font-semibold uppercase text-2xl tracking-widest ">Branches</h2>
                    </div>
                </div>
                <div className="bg-red-600 h-96 relative group hover:bg-gray-50">
                    <div className="absolute top-44 left-40 md:left-40">
                    <h2 className="text-gray-100 group-hover:text-red-600 opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:font-semibold uppercase text-2xl tracking-widest ">Grupa</h2></div>

                    </div>
                <div className="bg-yellow-900 h-96 relative group hover:bg-gray-50">
                    <div className="absolute top-44 left-40 md:left-40">
                    <h2 className="text-gray-100 group-hover:text-yellow-900 opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:font-semibold uppercase text-2xl tracking-widest ">Mama Put</h2></div>

                    </div>
                <div className="bg-yellow-300 h-96 relative group hover:bg-gray-50">
                    <div className="absolute top-44 left-40 md:left-40">
                    <h2 className="text-gray-100 group-hover:text-yellow-300 opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:font-semibold uppercase text-2xl tracking-widest ">Trykademy</h2></div>

                    </div>
            </div>
        </>
    )
}