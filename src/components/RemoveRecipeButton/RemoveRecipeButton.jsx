import React from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';

export default function RemoveRecipeButton({ removeRecipe, recipe }) {
    const [open, setOpen] = React.useState(false)

    function handleDeleteClick() {
        const recipeId = recipe._id
        console.log(recipeId, 'id')
        removeRecipe(recipeId)
    }

        

    return (
        <>
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='mini'
            trigger={<Button>Delete Recipe</Button>}
        >
            <Modal.Content>
                <p>Are you sure you want to delete this recipe?</p>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick={() => setOpen(false)} onClick={handleDeleteClick} >
                    <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
        </>
    )    
}