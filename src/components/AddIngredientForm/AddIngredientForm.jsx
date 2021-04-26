import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'

export default function AddIngredientForm(props){
    const [state, setState] = useState({
        quantity: 0,
        measurement: '',
        product: ''
    });

    function handleChange(e){
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log('is handlesUbmit being called?')
            
        // Have to submit the form now! We need a function!
        props.handleAddIngredient(state)
    }

    return (
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment>
                <Form.Input     
                    name="quantity"
                    type="quantity"
                    placeholder="quantity"
                    value={ state.quantity}
                    onChange={handleChange}
                    required
                />
                <Form.Input     
                    name="measurement"
                    type="measurement"
                    placeholder="measurement"
                    value={ state.measurement}
                    onChange={handleChange}
                    required
                />
                <Form.Input     
                    name="product"
                    type="product"
                    placeholder="product"
                    value={ state.product}
                    onChange={handleChange}
                    required
                />
                <Button
                    type="submit"
                    className="btn"
                >
                    Add Ingredient
                </Button>
            </Segment>
        </Form>
    )

}