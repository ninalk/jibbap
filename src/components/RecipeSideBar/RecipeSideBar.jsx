import React, { useEffect, useState } from 'react';
import RemoveRecipeButton from '../../components/RemoveRecipeButton/RemoveRecipeButton';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

export default function RecipeSideBar({user, recipe, updateRecipe, removeRecipe}) {   
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
        <Segment>
            <p><em>Date created: {recipe.date}</em></p>
            <p><em>Special notes: {recipe.description}</em></p>
        </Segment>

        { recipe.user === user._id ?
          <>
          <Button onClick={handleEditClick}>Edit Recipe</Button>
          <RemoveRecipeButton removeRecipe={removeRecipe} recipe={recipe}/>
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
                          type="ingredients"
                          value={state.ingredients}
                          placeholder="Enter ingredients"
                          style={{ minHeight: 100 }}
                          onChange={handleChange}
                      />
                      <Form.TextArea     
                          name="instructions"
                          type="instructions"
                          value={state.instructions}
                          placeholder="Enter brief instructions"
                          style={{ minHeight: 100 }}
                          onChange={handleChange}
                      />
                      <Button
                        type="submit"
                        className="btn"
                        color="teal"
                        size="mini"
                      >
                      Submit
                      </Button>
                      <Button
                          type="button"
                          className="btn"
                          color="teal"
                          size="mini"
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
            : ''
        }
        </>
    )
}