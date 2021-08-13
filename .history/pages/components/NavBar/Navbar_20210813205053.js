import Link from 'next/link'

export default function Navbar() {

    return(
        <>
            <nav className="flex flex-row w-full justify-between h-16 items-center">
                <Link href="/">
                    <a className="d-block w-1/2">
                        <div>Deborah Egonu</div>
                    </a>
                </Link>
                
                <ul className="flex w-1/2 flex-row justify-evenly">
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Portfolio</a>
                    </li>
                    <li>
                        <a href='#'>Courses</a>
                    </li>
                    <li>
                        <a href='#'>Hire me</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}