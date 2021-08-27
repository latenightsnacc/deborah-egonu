export default function Resume(){
    return (
        <>
        
            <div className="container">
                <div className="w-full flex flex-row">
                    <div className="w-2/3 pl-20">
                        <div>
                            <h1 className="pb-2 font-black font-bold text-3xl">Deborah Onyebuchi Egonu</h1>
                            <h2 className="text-blue-500 font-semibold text">Front-end Developer</h2>
                        </div>
                        
                    </div>
                    <div className="w-1/3 ">
                        <div className="mb-3" id="contact-section">
                            <h3 className="text-lg font-bold uppercase text-gray-800">contact</h3>
                            <ul className="mt-2">
                                <li className="text-blue-500">deborahegonu.dev</li>
                                <li>deborah.o.egonu@gmail.com</li>
                                <li>0812 501 8789</li>
                            </ul>
                        </div>
                        <div className="mb-3" id="education-section">
                        <h3 className="text-lg uppercase font-bold text-gray-900">education</h3>
                            <div id="schoolOne" className="my-2">
                                <h4 className="font-semibold text-gray-900">BlueCrest University</h4>
                                <div className="text-sm text-gray-400 font-light py-1">
                                    <span>2015 - 2019</span> / <span>Accra, Ghana</span>
                                </div>
                                <p className="font-medium text-sm text-gray-700">B.Sc. Information Technology</p>
                            </div>
                        </div>   
                        <div className="mb-3" id="languages-section">
                        <h3 className="text-lg uppercase font-bold text-gray-900">languages</h3>
                            <div id="web-dev" className="my-2">
                                <h4 className="font-semibold  text-sm uppercase text-gray-900 py-2">Web Development</h4>
                                <ul className="flex flex-row text-black text-sm font-medium">
                                    <li>HTML | &nbsp;</li>
                                    <li> CSS | &nbsp; </li>
                                    <li> SCSS | &nbsp; </li>
                                    <li> Javascript | &nbsp; </li>
                                    <li> jQuery | &nbsp; </li>  
                                    <li> MySQL | &nbsp; </li>  
                                    <li> Node JS  </li>  
                                </ul>
                            </div>
                            <div id="mobile-dev" className="my-2">
                                <h4 className="font-semibold  text-sm uppercase text-gray-900 py-2">Mobile Development</h4>
                                <ul className="flex flex-row text-black text-sm font-medium">
                                    <li>Dart | &nbsp;</li>
                                    <li> Flutter </li>
                                </ul>
                            </div>
                            <div id="others" className="my-2">
                                <h4 className="font-semibold  text-sm uppercase text-gray-900 py-2">Frame works /Others</h4>
                                <ul className="flex flex-row text-black text-sm font-medium">
                                    <li>React JS | &nbsp;</li>
                                    <li>Next JS | &nbsp;</li>
                                    <li>Python | &nbsp;</li>
                                    <li> Java </li>
                                </ul>
                            </div>
                            
                        </div>   
                        <div id="skills-section">
                        <h3 className="text-lg uppercase font-bold text-gray-900">Skills</h3>
                            <div id="technical-skills" className="my-2">
                                <h4 className="font-semibold  text-sm uppercase text-gray-900 py-2">Technical</h4>
                                <ul className="flex flex-row text-black text-sm font-medium">
                                    <li>Prototyping | &nbsp;</li>
                                    <li> Responsive Design | &nbsp; </li>
                                </ul>
                            </div>
                            <div id="soft-skills" className="my-2">
                                <h4 className="font-medium text-sm uppercase text-gray-900 py-2">Soft</h4>
                                <ul className="flex flex-row text-black text-sm font-medium">
                                    <li>Communication | &nbsp;</li>
                                    <li> Problem-solving | &nbsp; </li>
                                    <li> Design Thinking | &nbsp; </li>
                                </ul>
                            </div>
                        </div>   
                        <div id="activities">
                        <h3 className="text-lg uppercase font-bold text-gray-900">Activities</h3>
                            <div id="qwf" className="my-2">
                                <h4 className="font-semibold  text-sm uppercase text-gray-900 py-2">#QWF - Head of IT</h4>
                                <ul className="flex flex-row text-black text-sm font-medium">
                                    <li>Prototyping | &nbsp;</li>
                                    <li> Responsive Design | &nbsp; </li>
                                </ul>
                            </div>
                        </div>   
                    </div>
                </div>
                
            </div>
        </>
    )
}