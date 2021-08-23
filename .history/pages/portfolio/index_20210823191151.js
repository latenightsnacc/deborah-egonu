export default function Portfolio(){
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto">
                <div className="bg-green-600 h-96 relative">
                    <div className="absolute top-48 left-48">
                        <h2>Trakeet</h2>
                    </div>
                    
                </div>
                <div className="bg-blue-600 h-96 relative"><h2>Branches</h2></div>
                <div className="bg-red-600 h-96 relative"><h2>Grupa</h2></div>
                <div className="bg-yellow-900 h-96 relative"><h2>Mama Put</h2></div>
                <div className="bg-yellow-300 h-96 relative"><h2>Trykademy</h2></div>
            </div>
        </>
    )
}