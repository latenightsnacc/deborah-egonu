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
                            <a>Portfolio</a>
                        </Link>
                        
                    </li>
                    <li>
                        <a href='./courses/courses'>Courses</a>
                    </li>
                    <li>
                        <a href='./contact'>Hire me</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}