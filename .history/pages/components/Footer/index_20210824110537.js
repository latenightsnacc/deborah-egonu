/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="flex flex-col w-full text-center h-20 items-center justify-center">
            <ul className="w-full flex flex-row justify-center py-5">
                <li>
                    <Link href='/' >
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </li>
                <li className="mx-10">
                    <Link href="github.com">
                        <i className="fab fa-github"></i>
                    </Link>
                </li>
                <li>
                    <Link href="github.com">
                        <i className="fab fa-dribbble"></i>
                    </Link>
                </li>
            </ul>
            <p className="text-center font-light py-5">Built with &hearts;</p>
        </div>
    )
}