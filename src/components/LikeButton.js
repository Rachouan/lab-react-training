import { useState } from "react"

export const LikeButton = () => {
    const colors = ['purple','blue','green','yellow','orange','red'];
    const [likes,setLikes] = useState(0);
    const [color,setColor] = useState(colors[likes]);

    const onSetLikes = () => {
        setLikes(likes+1);
        setColor(colors[(likes+1)%colors.length]);
    }

    return (
        <button style={{background:color,padding: '10px',color:'white',border:'none'}} onClick={onSetLikes}>{likes} likes</button>
    )
}