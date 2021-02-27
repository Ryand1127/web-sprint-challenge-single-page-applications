import React from 'react'
import {Link} from 'react-router-dom'
import Styled from 'styled-components'

const StyledConfirm = Styled.div`

width: 50%;
background-color: #b5291f;
text-align: center;
margin: 0 auto;
border-radius: 25px 25px;
border: 1px solid white;
padding: 1%;
font-size: 1.8rem;


    h2{
        color: white;
    }
    p{
        color: white;
    }
    button{
        text-align: center;
        font-size: 2rem;
        background-color: white;
        border: 3px solid black;
        border-radius: 15px 15px;
    }
`


export default function Confirm(props){
console.log(props.pizzaOrder)
    return(
        <StyledConfirm>
            {props.pizzaOrder.map(pizza => (
                <div>
                <h2>Pizza Name: {pizza.name}</h2>
                <p>Size of Pizz: {pizza.size}</p>
                <p>Sauce: {pizza.sauce}</p>
                <p>Special Instructions: {pizza.Instructions}</p>
                <p>Number of Pizza: {pizza.Quantity}</p>
                <Link to="/pizza/confirmed">
                <button>Is this okay?</button>
                </Link>
                </div>
                
            ))}
            
        </StyledConfirm>
        
    )


}