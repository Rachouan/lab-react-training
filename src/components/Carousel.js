import {useState,useReducer} from 'react';

const setCurrentImage = (state,action) => (state + (action.type === 'increment' ? 1 : -1)) % action.max;

export const Carousel = ({images}) => {
    const [currentImage,dispatch] = useReducer(setCurrentImage,0);
    const onSetCurrentImage = (type) => dispatch({type,max:images.length})
    console.log(currentImage);
    return (
        <div style={{display: 'flex',margin: '20px', alignItems: 'center',justifyContent: 'center'}}>
            <button style={{margin: '0 10px'}} onClick={() => onSetCurrentImage('decrement')}>Prev</button>
            <img src={images[Math.abs(currentImage)]}/>
            <button style={{margin: '0 10px'}} onClick={() => onSetCurrentImage('increment')}>Next</button>
        </div>
    )
}