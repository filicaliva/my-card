import { cards } from '../Cards/cards'
import { renderPdf } from './renderCard'
import Image from 'next/image'

export default function ShowCard() {
    return (
        <div className="wrapper show-card ">
            {
                cards.map((item) => {
                    return (
                        <div key={item.id} className={`creating__image show-card__card creating__image_${item.bgColor}`}>
                            <div className="creating__image-form show-card__image-form">
                                <div className=' show-card__form'>
                                    <img src={`/img/${item.link}.jpg`} className="show-card__picture" />

                                    <img src='/icons/upload.svg' onClick={()=>renderPdf(item)} className='image__picture'/>
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
                                                    <Image src={`/icons/${link.name}.svg`} width='16px' height='16px' />
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

    )
}