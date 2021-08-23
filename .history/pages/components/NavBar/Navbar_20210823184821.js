import Link from 'next/link'

export default function Navbar() {

    return(
        <div className="mx-5">
            <nav className="flex flex-row w-full justify-center h-16 items-center">
                <ul className="flex w-full flex-row justify-evenly uppercase text-sm font-light group hover:text-gray-300">
                    <li className='hover:text-black hover:font-normal'>
                        <Link href="./about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li className='hover:text-black border-b-2 border-blue-400'>
                        <Link href='/'>
                            <a>Work</a>
                        </Link>
                    </li>
                    <li className='hover:text-black'>
                        <Link  href='./resume/'>
                            <a>Resume</a>
                        </Link>
                        
                    </li>
                    <li className='hover:text-black'>
                        <Link  href='./courses/'>
                            <a>Learn</a>
                        </Link>
                        
                    </li>
                </ul>
            </nav>
        </div>
    )
}