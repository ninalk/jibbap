import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import * as recipesApi from '../../utils/recipe-api';
import { useHistory } from 'react-router-dom';

export default function FormPage(props){
    const [error, setError] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [state, setState] = useState({
        cuisine: '',
        recipeName: '',
        description: '',
        cookTime: '',
        ingredients: '',
        instructions: ''
    });
    const history = useHistory();

    function handleFileInput(e){
        setSelectedFile(e.target.files[0]);
    }

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e){
        e.preventDefault()
        console.log(' handling form submit')

        const formData = new FormData();
        formData.append('photo', selectedFile);
        
        for (let key in state){
            formData.append(key, state[key]);
        }

        try {
            await recipesApi.create(formData);
            history.push('/');
        } catch(err){
            console.log(err.message)
            setError(err.message)
        }
    }

    return (
        <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h1' textAlign='center'>
                Create Recipe   
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
                        placeholder="Enter ingredients (example: rice, eggs, salt)"
                        onChange={handleChange}
                    />
                    <Form.TextArea     
                        name="instructions"
                        label="Instructions"
                        placeholder="Enter instructions (example: Boil. Remove from heat. Serve.)"
                        onChange={handleChange}
                    />
                    <Form.Field> 
                        <Form.Input
                          type="file"
                          name="photo"
                          placeholder="upload image"
                          onChange={handleFileInput}
                        />      
                    </Form.Field>
                    <Button
                      type="submit"
                      className="btn"
                      color="teal"
                    >
                    Submit Recipe
                    </Button>
                  </Segment>
                  {error ? <ErrorMessage error={error} /> : null}
                </Form>
               
            </Grid.Column>
          </Grid>
        </>
    )
}