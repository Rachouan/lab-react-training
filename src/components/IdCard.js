import styled from 'styled-components'

const ID = styled.div`
    padding: 20px;
    border-radius: 10px;
    display: flex;
    text-align: left;
    margin: 10px;
    background-color: #f4f4f4;
    align-items: flex-start;
    width: 100%;
`

const IDImg = styled.img`
   width: 100px;
   margin-right: 10px;
`

export const IdCard = ({ lastName, firstName, picture, gender,height,birth}) => {
    return (
        <ID>
            <IDImg src={picture} alt={`Picture of ${firstName}`} />
            <div>
                <p><b>First name:</b> {firstName}</p>
                <p><b>Last name:</b> {firstName}</p>
                <p><b>Gender:</b> {gender}</p>
                <p><b>Height:</b> {height}</p>
                <p><b>Birth:</b> {birth}</p>
            </div>
            
        </ID>
    )
}