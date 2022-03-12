import styled from 'styled-components'
import {Rating} from './Rating';

const Card = styled.div`
    padding: 20px;
    border-radius: 10px;
    background-color: #455eb5;
    color: #fff;
    display: inline-flex;
    margin: 0 10px;
    align-items: center;
    text-align: left;
`

const CardImg = styled.div`
    width: 100px;
    height: 100px;
    background: center / cover no-repeat url(${({img}) => img});
    border-radius: 60px;
    margin-right: 10px;
`

export const DriverCard = ({name,rating,car,img}) => {
    return (
        <Card>
            <CardImg img={img}/>
            <div>
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>{car.model} &middot; {car.licensePlate}</p>
            </div>
        </Card>
    )
}