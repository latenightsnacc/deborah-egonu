/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="flex flex-col w-full text-center mt-5 h-20 items-center justify-center">
            <ul className="w-full flex flex-row justify-center py-3">
                <li>
                    <Link href='https://www.linkedin.com/in/deborahegonu/' >
                        <i className="fab fa-linkedin fa-2x"></i>
                    </Link>
                </li>
                <li className="mx-10">
                    <Link href="https://github.com/latenightsnacc">
                        <i className="fab fa-github fa-2x"></i>
                    </Link>
                </li>
                <li>
                    <Link href="https://dribbble.com/latenitesnacc">
                        <i className="fab fa-dribbble fa-2x"></i>
                    </Link>
                </li>
            </ul>
            <p className="text-center font-light pb-5">Built with &hearts;</p>
        </div>
    )
}