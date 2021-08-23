import Link from 'next/link'

export default function Navbar() {

    return(
        <div className="mx-5">
            <nav className="flex flex-row w-full justify-between h-16 items-center">
                <Link href="/">
                    <a className="d-block w-1/2">
                        <div>Deborah Egonu</div>
                    </a>
                </Link>
                
                <ul className="flex w-1/2 flex-row justify-evenly">
                    <li>
                        <Link href="./about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='./portfolio/portfolio'>
                            <a>Work</a>
                        </Link>
                        
                    </li>
                    <li>
                        <Link  href='./courses/courses'>
                            <a>Resume</a>
                        </Link>
                        
                    </li>
                </ul>
            </nav>
        </div>
    )
}