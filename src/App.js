import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Form from './Form.js'
import Pizzabtn from "./Pizzabtn.js";
import Styled from "styled-components";
import Confirmed from "./Confirmed.js";

// Creating a styled Component to keep the app clean
const StyledHeader = Styled.header`
  display:flex;
  justify-content: space-between;
  background-color: #b5291f;

  h1{
    Color: white;
    margin-left: 5%;
    font-size: 3.8rem;
  }

  nav{
    margin-top: 4%;
    margin-right:8%;
  }

  button{
    font-size: 2rem;
    background-color: white;
    border: 3px solid black;
    margin: 0 15px;
    border-radius: 15px 15px;

    &:hover{
      transform: scale(1.5);
    }
  }
`

const App = () => {
  return (
    <div>
    <StyledHeader>
      <h1>Lambda Eats!</h1>
      <nav>
        <Link to="/"><button>Home</button></Link>
        <button>Help</button>
      </nav>
    </StyledHeader>
    {/* components below, Switch and Routing paths as well. */}
    <Switch>
      <Route exact path="/">
        <Pizzabtn/>
      </Route>
      <Route exact path="/pizza">
        <Form/>
      </Route>
      <Route exact path="/pizza/confirmed">
        <Confirmed/>
      </Route>
    </Switch>

    </div>
  );
};
export default App;
