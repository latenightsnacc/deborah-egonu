export default function Resume(){
    return (
        <>
        
            <div className="container">
                <div className="w-full flex flex-row">
                    <div className="w-2/3 bg-gray-100">
                        <h1>Deborah Egonu</h1>
                        <h2>Front-end Developer</h2>
                    </div>
                    <div className="w-1/3 ">
                        <div id="contact-section">
                            <h3 className="text-lg uppercase text-black">contact</h3>
                            <ul>
                                <li>deborahegonu.dev</li>
                                <li>deborah.o.egonu@gmail.com</li>
                                <li>0812 501 8789</li>
                            </ul>
                        </div>
                        <div id="education-section">
                            <div id="schoolOne" className="my-3">
                                <h4 className="font-semibold">BlueCrest University</h4>
                                <div className="text-sm text-gray-400 font-light py-1">
                                    <span>2015 - 2019</span> / <span>Accra, Ghana</span>
                                </div>
                                <p className="font-medium text-black">B.S.in Information Technology</p>
                            </div>
                            <div id="schoolOne" className="my-3">
                                <h4 className="font-semibold">BlueCrest University</h4>
                                <div className="text-sm text-gray-400 font-light py-1">
                                    <span>2015 - 2019</span> / <span>Accra, Ghana</span>
                                </div>
                                <p className="font-medium text-black">B.S.in Information Technology</p>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </>
    )
}