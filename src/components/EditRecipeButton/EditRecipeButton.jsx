import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Button, Form, Grid, Header, Segment, Modal, Icon } from 'semantic-ui-react';

export default function EditRecipeButton({ updateRecipe, recipe }) {
    const [open, setOpen] = React.useState(false)
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
        // e.preventDefault()
        console.log('hitting submit')
        const formData = new FormData();
        
        for (let key in state){
            formData.append(key, state[key]);
        }
        updateRecipe(state)
    } 

    return (
        <>
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='mini'
            trigger={<Button>Edit Recipe</Button>}
        >
            <Modal.Content>
                <Grid textAlign='center'  verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h3' textAlign='center'>
                        Edit Recipe   
                        </Header>            
                        <Form autoComplete="off" onSubmit={handleSubmit}>
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
                            </Segment>
                            {error ? <ErrorMessage error={error} /> : null}
                        </Form>                        
                    </Grid.Column>
                </Grid>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> Cancel
                </Button>
                <Button color='green' inverted onClick={() => {setOpen(false); handleSubmit();}}>
                    <Icon name='checkmark' /> Submit
                </Button>
            </Modal.Actions>
        </Modal>
        </>
    )    
}