import Link from 'next/link'

export default function Footer() {
    return (
        <div className="flex flex-row text-center h-14 items-center justify-center">
            <p className="text-center font-light">Built with &hearts;</p>
            <ul>
                <li>
                    <Link>
                        <i className="fa fa"></i>
                    </Link>
                </li>
            </ul>
        </div>
    )
}