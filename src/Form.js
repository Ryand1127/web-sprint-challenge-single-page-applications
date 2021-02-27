import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as yup from 'yup';
import axios from 'axios';
import Styled from 'styled-components';
import Confirm from './Confirm.js';

const StyledImg = Styled.div`
width: 100%;
border: 1px solid black;
text-align: center;
background-image:url('https://blog.tableschairsbarstools.com/wp-content/uploads/2018/08/Header.jpg');
background-position: 0px 450px;
height: 30vh;
    p{
        margin: 5% auto 0 auto;
        font-size: 3rem;
        color: black;
        background: white;
        width: 30%;
        text-shadow: 3px 1px darkgrey;
        border: 3px solid black;
        border-radius: 15px 15px;
    }
`

const StyledForm = Styled.div`

width: 50%;
margin: 2% auto;
background-color: #b5291f;
border-radius: 25px 25px;
padding: 1%;
border: 1px solid white;
    h2{
        text-align:center;
        color: white;
    }
`


const initialValue = {
    name: "",
    size: "",
    sauce: "",
    Pepperoni: false,
    Mushroom: false,
    Cheese: false,
    Sausage: false,
    Meatball: false,
    Onion: false,
    Basil: false,
    Garlic: false,
    Ham: false,
    Pinapple: false,
    Instructions: "",
    Quantity: ""

}

const schema = yup.object().shape({
    name: yup.string().required('Pizza name is Required').min(2, 'Must be at least 2 chars long.'),
    size: yup.string(),
    sauce: yup.string().required('Sauce is Required'),
    Pepperoni: yup.boolean(),
    Mushroom: yup.boolean(),
    Cheese: yup.boolean(),
    Sausage: yup.boolean(),
    Meatball: yup.boolean(),
    Onion: yup.boolean(),
    Basil: yup.boolean(),
    Garlic: yup.boolean(),
    Ham: yup.boolean(),
    Pinapple: yup.boolean(),
    Instructions: yup.string(),
    Quantity: yup.string(),
})

export default function Form(){

    const [pizzaValue, setPizzaValue] = useState(initialValue);
    const [pizzaOrder, setPizzaOrder] = useState([])
    const [errors, setErrors] = useState(initialValue);
    const [disabled, setDisabled] = useState(false);


    const submit = evt => {
        evt.preventDefault()
        const newPizza = {
            name: pizzaValue.name, 
            sauce: pizzaValue.sauce,
            size: pizzaValue.size, 
            Pepperoni: pizzaValue.Pepperoni, 
            Mushroom: pizzaValue.Mushroom,
            Cheese: pizzaValue.Cheese,
            Sausage: pizzaValue.Sausage,
            Meatball: pizzaValue.Meatball,
            Onion: pizzaValue.Onion,
            Basil: pizzaValue.Basil,
            Garlic: pizzaValue.Garlic,
            Ham: pizzaValue.Ham,
            Pinapple: pizzaValue.Pinapple,
            Instructions: pizzaValue.Instructions,
            Quantity: pizzaValue.Quantity
            }
        axios.post(`https://reqres.in/api/users?page=2`, newPizza)
        .then(res => {

            setPizzaOrder([...pizzaOrder, res.data])
            setPizzaValue({name: "",
            size: "",
            sauce: "",
            Pepperoni: false,
            Mushroom: false,
            Cheese: false,
            Sausage: false,
            Meatball: false,
            Onion: false,
            Basil: false,
            Garlic: false,
            Ham: false,
            Pinapple: false,
            Instructions: "",
            Quantity: ""})
            
        })
    }
    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({...errors, [name]: '' }))
        .catch(err => setErrors({...errors, [name]: err.errors[0] }))
    };

    const changeHandler = (e) => {
        const {name, value, type, checked} = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormErrors(name, valueToUse)
        setPizzaValue({...pizzaValue, [name]: valueToUse})
    };

    useEffect(() => {
    
        schema.isValid(pizzaValue).then(valid => setDisabled(!valid))
    
    }, [pizzaValue])


    return(
        <div>
            <StyledImg>
                <p>Build your own Pizza!</p>
            </StyledImg>
        <StyledForm>
        <h2>Build your Own Pizza</h2>
        <div style={{color : 'black'}}>
            <div>{errors.name}</div>
            <div>{errors.size}</div>
            <div>{errors.sauce}</div>
            <div>{errors.Quantity}</div>
        </div>
        <form onSubmit={submit}>
                <div>
                    <h3>Name your Pizza</h3>
                    <p>Required</p>
                </div>
            <div>
                <input
                name="name"
                type="text"
                placeholder="Name Here"
                value={pizzaValue.name}
                onChange={changeHandler}
                />
            </div>
                <div>
                    <h3>Choice of Size</h3>
                    <p>Required</p>
                </div>
            <div>
                <select>
                  <option selected disabled hidden name="size" value="" onChange={changeHandler}>Select</option>
                  <option type="dropdown" name="size" value="Small" onChange={changeHandler}>Small</option>
                  <option type="dropdown" name="size" value="Medium" onChange={changeHandler}>Medium</option>
                  <option type="dropdown" name="size" value="Large" onChange={changeHandler}>Large</option>
                </select>
            </div>
                <div>
                    <h3>Choice of Sauce</h3>
                    <p>Required</p>
                </div>
            <div>
                <label>
                    Original Red
                    <input
                    type="radio"
                    name="sauce"
                    onChange={changeHandler}
                    value="Original Red"
                    />
                </label>
                <label>
                    Garlic Ranch
                    <input
                    type="radio"
                    name="sauce"
                    onChange={changeHandler}
                    value="Garlic Ranch"
                    />
                </label>
                <label>
                    BBQ Sauce
                    <input
                    type="radio"
                    name="sauce"
                    onChange={changeHandler}
                    value="BBQ Sauce"
                    />
                </label>
                <label>
                    Spinach Alfredo
                    <input
                    type="radio"
                    name="sauce"
                    onChange={changeHandler}
                    value="Spinach Alfredo"
                    />
                </label>
            </div>
                <div>
                    <h3>Choice of Sauce</h3>
                    <p>Required</p>
                </div>
            <div>
                <label>
                    Pepperoni
                    <input
                    type="checkbox"
                    name="Pepperoni"
                    onChange={changeHandler}
                    checked={pizzaValue.Pepperoni}                        
                    />
                </label>
                <label>
                    Mushroom
                    <input
                    type="checkbox"
                    name="Mushroom"
                    onChange={changeHandler}
                    checked={pizzaValue.Mushroom}                        
                    />
                </label>
                <label>
                    Cheese
                    <input
                    type="checkbox"
                    name="Cheese"
                    onChange={changeHandler}
                    checked={pizzaValue.Cheese}                        
                    />
                </label>
                <label>
                    Sausage
                    <input
                    type="checkbox"
                    name="Sausage"
                    onChange={changeHandler}
                    checked={pizzaValue.Sausage}                        
                    />
                </label>
                <label>
                    Meatball
                    <input
                    type="checkbox"
                    name="Meatball"
                    onChange={changeHandler}
                    checked={pizzaValue.Meatball}                        
                    />
                </label>
                <label>
                    Onion
                    <input
                    type="checkbox"
                    name="Onion"
                    onChange={changeHandler}
                    checked={pizzaValue.Onion}                        
                    />
                </label>
                <label>
                    Basil
                    <input
                    type="checkbox"
                    name="Basil"
                    onChange={changeHandler}
                    checked={pizzaValue.Basil}                        
                    />
                </label>
                <label>
                    Garlic
                    <input
                    type="checkbox"
                    name="Garlic"
                    onChange={changeHandler}
                    checked={pizzaValue.Garlic}                        
                    />
                </label>
                <label>
                    Ham
                    <input
                    type="checkbox"
                    name="Ham"
                    onChange={changeHandler}
                    checked={pizzaValue.Ham}                        
                    />
                </label>
                <label>
                    Pinapple
                    <input
                    type="checkbox"
                    name="Pinapple"
                    onChange={changeHandler}
                    checked={pizzaValue.Pinapple}                        
                    />
                </label>
            </div>
                <div>
                    <h3>Special Instructions</h3>
                </div>
            <div>
                <input
                name="Instructions"
                type="text"
                placeholder="Any special instructions?"
                value={pizzaValue.Instructions}
                onChange={changeHandler}  
                />  
            </div>
            <div>
                <input
                name="Quantity"
                type="number"
                placeholder="0"
                value={pizzaValue.Quantity}
                onChange={changeHandler}
                />
                <button disabled={disabled}>
                Submit Pizza!  $25.99
                </button>
            </div>
        </form>
        </StyledForm>
        <Confirm pizzaOrder={pizzaOrder}/>
        </div>


    )

}