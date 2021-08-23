import Link from 'next/link'

export default function Navbar() {

    return(
        <div className="mx-5">
            <nav className="flex flex-row w-full justify-center h-16 items-center">
                <ul className="flex max-w-xl flex-row justify-evenly">
                    <li>
                        <Link href="./about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li className="">
                        <Link href='/'>
                            <a>Work</a>
                        </Link>
                    </li>
                    <li >
                        <Link  href='./resume/'>
                            <a>Resume</a>
                        </Link>
                        
                    </li>
                    <li className="">
                        <Link  href='./courses/'>
                            <a>Learn</a>
                        </Link>
                        
                    </li>
                </ul>
            </nav>
        </div>
    )
}