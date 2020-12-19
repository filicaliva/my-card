import {cards} from './OurCards/ourcards'
import Image from 'next/image'

export default function  AboutUs() {
    return(
        <div className="about">
            <h2 className="about__text">
                My-Card Team
            </h2>

            <div className="wrapper about__cards ">
            {
                cards.map((item) => {
                    return (
                        <div key={item.id} className={`creating__image show-card__card creating__image_${item.bgColor}`}>
                            <div className="creating__image-form show-card__image-form">
                                <div className=' show-card__form'>
                                    <img src={`/img/${item.link}.jpg`} className="show-card__picture" />


                                    <div className={`image__form-text image__form-text_${item.posText}`}>
                                        <p className="image__form-describe show-card__form-describe">{item.describe}</p>
                                        <p className="image__form-name show-card__form-name">{item.name}</p>
                                    </div>



                                </div>

                                <div className="layoutIcons">
                                    {
                                        item.icons.map((link) => {
                                            return (
                                                <a key={link.name} href={`${link.href}`} >
                                                    <Image src={`/icons/${link.name}.svg`} width='20px' height='20px' />
                                                </a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}