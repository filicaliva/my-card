import { cards } from '../Cards/cards'
import { renderPdf } from './renderCard'
import { useEffect, useState } from 'react'

export default function ShowCard() {
    const [arr, setArr] = useState(cards)
    const [doneForm, setDoneForm] = useState('show')



    const preRender = (item) => {
        renderPdf(item)
        setArr(arr.map((i) => {
            if (i.id === item.id) {
                return {
                    ...item,
                    showForm: 'showDone'
                }
            } else {
                return i
            }
        }))
    }

    const hideForm = (item) => {
        setArr(arr.map((i) => {
            if (i.id === item.id) {
                return {
                    ...item,
                    showForm: 'hide'
                }
            } else {
                return i
            }
        }))
    }

    return (
        <div className="wrapper show-card ">
            {
                arr.map((item) => {
                    return (
                        <div key={item.id} className={`creating__image show-card__card creating__image_${item.bgColor}`}>
                            <div className="creating__image-form show-card__image-form">
                                <div className={`done ${item.showForm}`}>
                                    <div className="done__container">
                                        <div className="done__h5">DONE 👍</div>
                                        <div className="done__cancel" onClick={() => { hideForm(item) }} >x</div>
                                    </div>
                                    <div className="done__text">You have successfully saved my-card 👌</div>
                                </div>
                                <div className=' show-card__form'>
                                    <img src={`/img/${item.link}.jpg`} className="show-card__picture" />

                                    <img src='/icons/download.svg' onClick={() => preRender(item)} className='image__picture' />
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
                                                    <img src={`/icons/${link.name}.svg`} width='16px' height='16px' />
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