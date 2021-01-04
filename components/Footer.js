import Link from 'next/link'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export default function Footer() {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('https://pure-citadel-12988.herokuapp.com/', fetcher)
    const [count, setCount] = useState(10)
    useEffect(() => {
        if (data  !== undefined) {
            setCount(data.count)
        }

    }, [data])



    return (
        <footer className="footer wrapper" >
            <div className="footer__container">
                <h3 className="footer__text">
                    MY-CARDS
                    CREATED:
                    {count}

                </h3>
                <Link href='/team' >
                    <a className="footer__link">
                        TEAM
                </a>
                </Link>
            </div>
            <p className='footer-inc' >© {new Date().getFullYear()} My-Card, Inc. All rights reserved</p>
            <p className='footer-credential' >Our site does not store the information you add when you create my-card. Our site does not save photos or pictures that you add when you create my-card. Our site does not save the my-cards you have created. Our site does not store any information at all.</p>
        </footer>
    )
}