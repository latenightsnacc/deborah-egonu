export default function Navbar() {
    return(
        <>
            <nav className="flex flex-row w-full justify-between">
                <a>
                    <div>Deborah Egonu</div>
                </a>
                <ul className="flex flex-row">
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