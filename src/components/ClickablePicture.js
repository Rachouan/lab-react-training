import { useState } from "react"

export const ClickablePicture = ({img,imgClicked}) => {
    const [currentImage,setCurrentImage] = useState(img);
    const onSetCurrentImage = () => setCurrentImage(currentImage === img ? imgClicked : img);
    return (
        <img src={currentImage} onClick={onSetCurrentImage}/>
    )
}