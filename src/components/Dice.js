import { useState } from "react";
export const Dice = () => {
    const [diceFace,setDiceFace] = useState(0);
    const [diceImage,setDiceImage] = useState('-empty');

    const setRandomDice = () => { setTimeout(() => { 
        const randomDiceFace = Math.max(Math.round(Math.random() * 6))
        setDiceFace(randomDiceFace); 
        onSetDiceImage(randomDiceFace);
        console.log(diceFace);
    },1000)};

    const onSetDiceFace = () => {
        clearTimeout(setRandomDice);
        setDiceFace(0);
        onSetDiceImage();
        setRandomDice()
    }

    const onSetDiceImage = (randomDiceFace) => setDiceImage(randomDiceFace > 0 ? randomDiceFace :  '-empty');
    return (
        <img style={{width: '100px',cursor:'pointer'}} src={`./assets/images/dice${diceImage}.png`} onClick={onSetDiceFace}/>
    )
}