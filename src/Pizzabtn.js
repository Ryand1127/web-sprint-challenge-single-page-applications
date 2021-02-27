import React from 'react';
import { Link, } from "react-router-dom/cjs/react-router-dom.min";
import Styled from 'styled-components';

const StyledPizza = Styled.div`
margin-top: -45px;
width: 100%;
height: 30vh;
text-align: center;
background-image:url('https://doughboyspizza.com/wp-content/uploads/2017/09/DOUGHBOYS-HEADER_HOME_pizza.jpg');

h2{
    color: white;
    font-size: 3.2rem;
    text-align: center;
    text-shadow: 8px 5px black;
}

button{
    text-align: center;
    font-size: 2rem;
    background-color: white;
    border: 3px solid black;
    border-radius: 15px 15px;

    &:hover{
        transform: scale(1.5);
      }
}
`
const StyledReview = Styled.div`

display: flex;
justify-content: space-between;

    div{
        margin: 9%;
        max-width: 300px;
        background-color: #b5291f;
        padding: 2%;
        border-radius: 20px 20px;
        border: 3px solid black;
        text-align: center;
    }

    h3 {
        font-size: 1.8rem;
        background-color: white;
        border: 3px solid black;
        border-radius: 15px 15px;
    }

    p {
        font-size: 1.2rem;
        color: white;
    }



`

export default function Pizzabtn() {


    return(
        <div>
        <StyledPizza>
            <h2>The Best Pizza for the Best Coders!</h2>
            <Link to="/pizza"><button>Want Pizza?</button></Link>
        </StyledPizza>
            <StyledReview>
                <div>
                    <h3>Ryan Dill</h3>
                    <p>This was the best pizza I think I have ever had in my life.</p>
                </div>
                <div>
                    <h3>John Smith</h3>
                    <p>So good. I could come back for more and more. It made me a better coder!</p>
                </div>
            </StyledReview>
        </div>


    )



}