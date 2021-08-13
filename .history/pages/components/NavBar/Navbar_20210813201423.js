export default function Navbar() {
    return(
        <>
            <nav className="flex flex-row w-full justify-between">
                <a className="d-block w-1/2">
                    <div>Deborah Egonu</div>
                </a>
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