import styled from 'styled-components';

export const BoxColor = ({r,g,b}) => {
    const componentToHex = (c) => {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    const hex = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

    const BoxColor = styled.div`
        padding: 10px;
        text-align: center;
        background-color: ${({hex}) => hex};
        margin:15px 10px;
        border-radius: 10px;
    `

    return (
        <BoxColor hex={hex}>
            <p>rgba({r},{g},{b})</p>
            <p>{hex}</p>
        </BoxColor>
    )
}