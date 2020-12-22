import { useState } from "react"

export default function ImagesForm({ images, setImages }) {


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
        <>
            <h2 class="images-form__title" >create my-card</h2>
            <div className="images-form">
                {
                    images.map((item) => {
                        return (
                            <img class={`group-${item.id} images-form__item bg-Group_${item.id} ${item.class}`}
                                key={item.id}
                                alt={`form-${item.id}`}
                                onClick={() => chooseImg(item.id)}
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAEEAQMAAABXy+mmAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAB1JREFUeNrtwTEBAAAAwqD1T20Gf6AAAAAAAADgNxpoAAExsY3xAAAAAElFTkSuQmCC" />
                        )
                    })
                }
            </div>
        </>
    )
}