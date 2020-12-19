import Link from 'next/link'

export default function Footer({data}) {
    return (
        <footer className="footer wrapper" >
            <div className="footer__container">
                <h3 className="footer__text">
                    MY-CARDS
                    CREATED:
                    {data}
                    
                </h3>
                <Link href='/about' >
                    <a className="footer__link">
                        TEAM
                </a>
                </Link>
            </div>
            <p className='footer-inc' >© {new Date().getFullYear()} My-Card, Inc. All rights reserved</p>
        </footer>
    )
}