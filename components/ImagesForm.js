import { useState } from "react"

export default function ImagesForm({images, setImages}) {


    const chooseImg = (id) => {
        setImages(images.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    class: 'images-form__border'
                }
            } else {
                return {
                    ...item,
                    class: ''
                }
            }
        }))
    }

    return (
        <div className="images-form">
            {
                images.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={`images-form__item bg-Group_${item.id} ${item.class}`}
                            onClick={() => chooseImg(item.id)}
                        ></div>
                    )
                })
            }
        </div>
    )
}