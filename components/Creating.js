import { useEffect, useState } from "react"


import { renderPdf } from '../components/Cards/renderCard'
import ShareIcon from '../public/icons/share.svg'
import UploadIcon from '../public/icons/upload.svg'
import ImagesForm from "./ImagesForm"


export default function Creating() {
    const [name, setName] = useState('')
    const [describe, setDescribe] = useState('')
    const [nameLength, setNameLength] = useState(0)
    const [describeLength, setDescribeLength] = useState(0)
    const [showForm, setShowForm] = useState(true)
    const [showCustomForm, setShowCustomForm] = useState(true)
    const [customHandleForm, setHandleCustomForm] = useState('hide')
    const [doneForm, setDoneForm] = useState('hide')
    const [customValue, setCustomValue] = useState('')

    const [file, setFile] = useState({})
    const [customFile, setCustomFile] = useState({})
    const [link, setLink] = useState('')
    const [customLink, setCustomLink] = useState('')
    const [posLeft, setPosLeft] = useState(null)


    const [bgColor, setBgColor] = useState('yellow')
    const [posText, setPosText] = useState('bottom')
    const titleName = ['fb', 'instagram', 'linkedin', 'telegram', 'twitter', 'vk', 'snapchat', 'penguin', 'messenger', 'line', 'tik_tok', 'whatsapp', 'youtube', 'discord', 'skype', 'viber', 'icq', 'wechat', 'www', 'behance', 'dribble', 'github', 'kakao', 'reddit', 'gmail', 'badoo', 'tumblr']

    const [icons, setIcons] = useState(() => {
        const arr = [];
        for (let i = 0; i < titleName.length; i++) {
            const item = titleName[i];
            arr.push(
                {
                    name: item,
                    id: i,
                    class: 'hide',
                    value: ''
                }
            )
        }
        return arr
    })

    const [images, setImages] = useState(() => {
        const arr = []
        for (let i = 1; i < 9; i++) {
            arr.push({
                id: i,
                class: i == 2 ? 'images-form__border' : ''
            })
        }
        return arr
    })

    const posForm = id => {
        if (window.pageXOffset <= 680) {
            for (let i = 0; i < 4; i++) {
                if (id === 3 + 5 * i || id === 4 + 5 * i) {
                    setPosLeft('0px')
                    break;
                }
            }
        }
        setPosLeft(null)

    }

    const handleForm = (id, bool) => {
        posForm(id)
        const arr = icons.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    class: bool ? 'show' : 'hide'
                }
            } else {
                return item
            }
        })
        setIcons(arr);
    }

    useEffect(() => {
        images.filter((item) => {
            if (item.class !== '') {
                item.id <= 4 ? setPosText('top') : setPosText('bottom')
                switch (item.id) {
                    case 2:
                    case 6:
                        setBgColor('yellow')
                        break;
                    case 3:
                    case 7:
                        setBgColor('blue')
                        break;
                    case 4:
                    case 8:
                        setBgColor('pink')
                        break;

                    default:
                        setBgColor('white')
                        break;
                }
            }
        })

    }, [images])

    const setValue = (value, id) => {
        const arr = icons.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    value
                }
            } else {
                return item
            }
        })
        setIcons(arr);
    }

    const showImage = (e) => {
        setLink(URL.createObjectURL(e.target.files[0]))
        setFile({ ...e })
        if (showForm) {
            setShowForm(e => !e)
        }

    }

    const showCustomImage = (e) => {
        setCustomLink(URL.createObjectURL(e.target.files[0]))
        setCustomFile({ ...e })
        if (showCustomForm) {
            setShowCustomForm(e => !e)
        }

    }

    const handleName = (e) => {
        setName(e.target.value)
        setNameLength(e.target.value.length)
    }

    const handleDescribe = (e) => {
        setDescribe(e.target.value)
        setDescribeLength(e.target.value.length)
    }

    const preparePdf = () => {
        const data = {
            name,
            bgColor,
            posText,
            describe,
            icons: icons.filter((item) => {
                return item.value !== ''
            })
        }

        let customIcon = undefined
        if (Object.keys(customFile).length !== 0) {
            customIcon = {
                link: customValue,
                file: customFile
            }
        }

        

        renderPdf(data, file, customIcon).then(() => {
            setDoneForm('showDone')
            setShowForm(true)
        })
    }


    return (
        <div className='wrapper'>
            <ImagesForm images={images} setImages={setImages} />
            <div className="creating">
                <div className="creating__text">
                    <div className="creating__inputs">
                        <input type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            maxLength='20'
                            className='inputs__form-name input-form'
                            value={name}
                            onChange={(e) => handleName(e)}
                        />
                        <p className="inputs__name input-length" >{nameLength}/20</p>

                        <input type="text"
                            name="describe"
                            id="describe"
                            className='inputs__form-describe input-form'
                            placeholder="About me"
                            maxLength='20'
                            value={describe}
                            onChange={(e) => handleDescribe(e)}
                        />
                        <p className="inputs__describe input-length" >{describeLength}/20</p>
                    </div>

                    <div className="creating__icons">
                        {
                            icons.map((item) => {
                                return (
                                    <div className="item" key={item.name}>
                                        <div className={"item__form " + item.class} style={{ right: posLeft }} id={item.name}>
                                            <input
                                                type="text"
                                                name={item.name}
                                                id={item.name + 'Icon'}
                                                className='form__link'
                                                value={item.value}
                                                placeholder='Add link'
                                                onChange={(e) => setValue(e.target.value, item.id)}
                                            />
                                            <input
                                                type="button"
                                                value="Done"
                                                className='form__button'
                                                onClick={() => handleForm(item.id, false)}
                                            />
                                        </div>
                                        <img
                                            src={`/icons/${item.name}.svg`}
                                            className='item__icon'
                                            onClick={(e) => handleForm(item.id, true)}
                                            width='35px'
                                            height='35px'
                                            layout='fixed'
                                        />

                                    </div>

                                )
                            })
                        }


                        <div className="item">
                            <div className={`item__form ${customHandleForm} custom__form `}>
                                <div className="">
                                    <input
                                        type="text"
                                        className='form__link'
                                        value={customValue}
                                        placeholder='Add link'
                                        onChange={(e) => setCustomValue(e.target.value)}
                                    />

                                    <input id='addCustomIcon' type="file" accept="image/jpeg" onChange={(e) => showCustomImage(e)} hidden />
                                    <label htmlFor='addCustomIcon' className={`form__link custom__image show'}`} >Add icon</label>


                                </div>
                                <input
                                    type="button"
                                    value="Done"
                                    className='form__button'
                                    onClick={() => setHandleCustomForm('hide')}
                                />
                            </div>

                            {
                                showCustomForm ? (
                                    <div
                                        className='custom__icon'
                                        onClick={() => setHandleCustomForm('show')}
                                    >?</div>
                                ) : (
                                        <img
                                            src={customLink}
                                            className='custom__icon_size'
                                            onClick={() => setHandleCustomForm('show')}

                                        />
                                    )
                            }


                        </div>
                    </div>

                </div>


                <div className={`creating__image creating__image_${bgColor}`}>
                    <div className="creating__image-form">
                        <div className={`done ${doneForm}`}>
                            <div className="done__cancel" onClick={() => { setDoneForm('hide') }} >x</div>
                            <div className="done__h5">DONE 👍</div>
                            <div className="done__text">You have successfully saved my-card 👌</div>
                        </div>
                        <input id='addImage' type="file" accept="image/jpeg" onChange={(e) => showImage(e)} hidden />
                        <label htmlFor="addImage" className={`creating__add-image ${showForm === false ? 'hide' : 'show'}`} >+</label>



                        <div className={`image__form ${showForm === true ? 'hide' : 'show'}`}>
                            <img src={link} className="image__picture" />


                            {/* <div className="image__form-icons">
                                <label htmlFor="addImage" >
                                    <UploadIcon className='icon-upload' />
                                </label>

                                <ShareIcon className='icon-share' onClick={() => preparePdf()} />
                            </div> */}

                            <img src='/icons/download.svg' onClick={() => preparePdf()} className='image__upload' />


                            <div className={`image__form-text image__form-text_${posText}`}>
                                <p className="image__form-describe">{describe}</p>
                                <p className="image__form-name">{name}</p>
                            </div>

                        </div>

                        <div className="layoutIcons">
                            {
                                icons.map((item) => {
                                    if (item.value !== '') {
                                        return (
                                            <img
                                                src={`/icons/${item.name}.svg`}
                                                width='30px'
                                                height='30px'
                                            />
                                        )
                                    }
                                })
                            }

                            {
                                !showCustomForm ? (
                                    <img
                                        src={customLink}
                                        className='custom__icon_size'
                                        style={{ height: '30px', width: '30px' }}
                                    />
                                ) : (
                                        <div className="none"></div>
                                    )
                            }

                        </div>



                    </div>

                </div>


            </div>
        </div>
    )
}