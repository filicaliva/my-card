import Logo from '../public/logo.svg'
import Link from 'next/link'

export default function Header() {
    return (
        <div className="header">
            <Link href='/' >
                <a>
                    <Logo
                        className="header_image"
                    />
                </a>
            </Link>
        </div>
    )
}