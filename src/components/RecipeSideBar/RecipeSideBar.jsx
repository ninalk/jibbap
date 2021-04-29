import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

export default function RecipeSideBar({recipe, updateRecipe}) {   
    const [showForm, setShowForm] = useState('none');
    const [error, setError] = useState('');
    const [state, setState] = useState({
        cuisine: recipe.cuisine,
        recipeName: recipe.recipeName,
        description: recipe.description,
        cookTime: recipe.cookTime,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions
    });

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log('hitting submit')
        const formData = new FormData();
        
        for (let key in state){
            formData.append(key, state[key]);
        }
        setShowForm('none')
        updateRecipe(state)
    }

    function handleCancelClick(){
        setShowForm('none')
    }
    
    function handleEditClick() {
        setShowForm('contents')
    }

    return (
        <>
        <Button onClick={handleEditClick}>Edit Recipe</Button>
        <Segment>
            <p><em>Date Created: {recipe.date}</em></p>
            <p><em>Special Notes: {recipe.description}</em></p>
        </Segment>
        
        <Grid textAlign='center' style={{ height: '80vh', display: showForm }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h3' textAlign='center'>
                Edit Recipe   
              </Header>            
                <Form autoComplete="off"  onSubmit={handleSubmit}>
                <Segment raised>               
                    <Form.Input                    
                      name="cuisine"
                      placeholder="cuisine"
                      value={state.cuisine}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input
                      type="recipeName"                  
                      name="recipeName"
                      placeholder="recipe name"
                      value={ state.recipeName}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input             
                      name="description"
                      type="description"
                      placeholder="description"
                      value={ state.description}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input     
                      name="cookTime"
                      type="cookTime"
                      placeholder="cook time"
                      value={ state.cookTime}
                      onChange={handleChange}
                      required
                    />
                    <Form.TextArea     
                        name="ingredients"
                        label="Ingredients"
                        // value={state.ingredients}
                        placeholder="Enter ingredients"
                        onChange={handleChange}
                    />
                    <Form.TextArea     
                        name="instructions"
                        label="Instructions"
                        // value={state.instructions}
                        placeholder="Enter brief instructions"
                        onChange={handleChange}
                    />
                    <Button
                      type="submit"
                      className="btn"
                      color="teal"
                    >
                    Submit
                    </Button>
                    <Button
                        type="submit"
                        className="btn"
                        color="teal"
                        onClick={handleCancelClick}
                        >
                        Cancel
                    </Button>
                    </Segment>
                    {error ? <ErrorMessage error={error} /> : null}
                </Form>
               
            </Grid.Column>
          </Grid>
        </>
    )
}