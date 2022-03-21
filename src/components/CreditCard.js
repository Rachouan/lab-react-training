import styled from 'styled-components';

const CreditCardWrapper = styled.div`
    padding: 20px;
    width: 325px;
    margin: 0 10px;
    text-align: left;
    background-color: ${({bgColor}) => bgColor}};
    color: ${(color) => color};
    border-radius: 10px;
`;
const CreditLogo = styled.img`
    width: 40px;
    float: right;
    display: inline-block;
    margin-bottom: 20px;
`;

export const CreditCard = ({type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}) => {
    return (
        <CreditCardWrapper bgColor={bgColor} color={color}>
            <CreditLogo src={`../assets/images/{type.toLowerCase()}.png` }/>
            <div>
                <h3>{'**** '.repeat(4)} {number.substring(12)}</h3>
                <p>{owner}&#9;{bank}</p>
                <p>Expires {expirationMonth}/{expirationYear}</p>
            </div>
        </CreditCardWrapper>
    )
}