import Link from 'next/link'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export default function Footer() {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('https://pure-citadel-12988.herokuapp.com/', fetcher)
    const [count, setCount] = useState(10)
    useEffect(() => {
        if (data !== undefined) {
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
                <div className="social-media">
                    <div className="social-media__link">
                            <img src="/icons/fb.svg" width='35px'  />
                        <a key="tik_tok" href="https://www.tiktok.com/@mycard2021?_d=d9398de3llf7bl&language=ru&sec_uid=MS4wLjABAAAA5fh2U6TKirlDFjS05UJaslpgcczBUIiVzZ-sw-ln3zWU5qTzwEVzSK7ViCew4JQq&share_author_id=6911308918212494337&u_code=dg8dmk26lk9k9m&timestamp=1609768854&user_id=6911308918212494337&sec_user_id=MS4wLjABAAAA5fh2U6TKirlDFjS05UJaslpgcczBUIiVzZ-sw-ln3zWU5qTzwEVzSK7ViCew4JQq&utm_source=more&utm_campaign=client_share&utm_medium=android&share_app_name=musically&share_iid=6912079165790390017&share_link_id=d303c32f-60f8-430d-a17a-293b4791a762&source=h5_m" >
                            <img src="/icons/tik_tok.svg" width='35px'  />
                        </a>
                            <img src='/icons/youtube.svg' width='35px' />
                        <a key="telegram" href="https://t.me/my_card2021" >
                            <img src="/icons/telegram.svg" width='35px'  />
                        </a>
                    </div>
                    <div className="social-media__text">
                        <p className='footer-inc' >© {new Date().getFullYear()} My-Card, Inc. All rights reserved</p>
                    </div>
                </div>
                <Link href='/team' >
                    <a className="footer__link">
                        TEAM
                </a>
                </Link>
            </div>
            <p className='footer-credential' >Our site does not store the information you add when you create my-card. Our site does not save photos or pictures that you add when you create my-card. Our site does not save the my-cards you have created. Our site does not store any information at all.</p>

        </footer>
    )
}