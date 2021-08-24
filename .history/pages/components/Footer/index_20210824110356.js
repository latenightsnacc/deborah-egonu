/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="flex flex-col w-full text-center h-20 items-center justify-center">
            <p className="text-center font-light">Built with &hearts;</p>
            <ul className="w-full flex flex-row justify-center">
                <li>
                    <Link href='/' >
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </li>
                <li>
                    <Link href="github.com">
                        <i className="fab fa-github"></i>
                    </Link>
                </li>
            </ul>
        </div>
    )
}