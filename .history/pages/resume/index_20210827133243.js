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
                        <div className="mb-3" id="contact-section">
                            <h3 className="text-lg font-bold uppercase text-gray-800">contact</h3>
                            <ul className="mt-2">
                                <li className="text-blue-500">deborahegonu.dev</li>
                                <li>deborah.o.egonu@gmail.com</li>
                                <li>0812 501 8789</li>
                            </ul>
                        </div>
                        <div id="education-section">
                        <h3 className="text-lg uppercase font-bold text-gray-900">education</h3>
                            <div id="schoolOne" className="my-2">
                                <h4 className="font-semibold text-gray-900">BlueCrest University</h4>
                                <div className="text-sm text-gray-400 font-light py-1">
                                    <span>2015 - 2019</span> / <span>Accra, Ghana</span>
                                </div>
                                <p className="font-medium text-sm text-gray-700">B.Sc. Information Technology</p>
                            </div>
                            <div id="schoolOne" className="my-2">
                                <h4 className="font-semibold text-gray-900">Fairview International School</h4>
                                <div className="text-sm text-gray-400 font-light py-1">
                                    <span>2012 - 2014</span> / <span>Accra, Ghana</span>
                                </div>
                                <p className="font-medium text-sm text-gray-700">High School Diploma</p>
                            </div>
                        </div>   
                        <div id="skills-section">
                        <h3 className="text-lg uppercase font-bold text-gray-900">Skills</h3>
                            <div id="technical-skills" className="my-2">
                                <h4 className="font-semibold  text-sm uppercase text-gray-900">Technical</h4>
                                <ul className="flex flex-row text-black text-sm font-medium">
                                    <li>Prototyping | &nbsp;</li>
                                    <li> Responsive Design | &nbsp; </li>
                                </ul>
                            </div>
                            <div id="soft-skills" className="my-2">
                                <h4 className="font-medium text-sm uppercase text-gray-900">Soft</h4>
                                <ul className="flex flex-row text-black text-sm font-medium">
                                    <li>Communication | &nbsp;</li>
                                    <li> Problem-solving | &nbsp; </li>
                                    <li> Design Thinking | &nbsp; </li>
                                </ul>
                            </div>
                        </div>   
                    </div>
                </div>
                
            </div>
        </>
    )
}