import React from 'react';
import Styled from 'styled-components';

const StyledConfirmed = Styled.div`

text-align: center;

div{
    width:100%;
    border:1px solid black;
    background-image: url('https://electrek.co/wp-content/uploads/sites/3/2019/08/domino-rad-power-header.jpg?quality=82&strip=all');
    height: 30vh;
}

p{
    color: white;
    font-size: 3.2rem;
    text-align: center;
    text-shadow: 3px 0px black;
}

`

export default function Confirmed(){

    return(
        <StyledConfirmed>
            <div>
                <p>Oh yeah! Your pizza is on the way! Enjoy!</p>
            </div>
            <p> Feel free to order from us any time!</p>
            <img src="https://thumbs.dreamstime.com/b/pizza-delivery-smile-motorcycle-boy-delivers-hot-pizzas-cartoon-n-110596227.jpg" alt="pizza delivery man"/>
        </StyledConfirmed>
    )

}
