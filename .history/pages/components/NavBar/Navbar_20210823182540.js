import Link from 'next/link'

export default function Navbar() {

    return(
        <div className="mx-5">
            <nav className="flex flex-row w-full justify-center h-16 items-center">
                <ul className="flex w-xl flex-row justify-center">
                    <li>
                        <Link href="./about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li className="mx-20">
                        <Link href='/'>
                            <a>Work</a>
                        </Link>
                    </li>
                    <li >
                        <Link  href='./resume/'>
                            <a>Resume</a>
                        </Link>
                        
                    </li>
                    <li className="ml-20">
                        <Link  href='./courses/'>
                            <a>Learn</a>
                        </Link>
                        
                    </li>
                </ul>
            </nav>
        </div>
    )
}