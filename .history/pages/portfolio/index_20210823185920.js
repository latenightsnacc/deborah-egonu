export default function Portfolio(){
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto">
                <div className="bg-green-300 h-96 relative">
                    <div className="absolute top-10 left-1/2 right-1/2">
                        <h2>Trakeet</h2>
                    </div>
                    
                </div>
                <div className="bg-blue-600 h-96 relative"><h2>Branches</h2></div>
                <div className="bg-black-300 h-96 relative"><h2>Mama Put</h2></div>
                <div className="bg-red-500 h-96 relative"><h2>Grupa</h2></div>
            </div>
        </>
    )
}