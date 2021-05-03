import React, { useState } from 'react';
import { Button, Form, Segment, Modal, Icon, Divider } from 'semantic-ui-react';


export default function UpdateProfileForm({ editProfile }) {
    const [open, setOpen] = React.useState(false)
    const [state, setState] = useState({
        name: '',
        bio: ''
    });

    function handleChange(e){
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        // e.preventDefault();
        const formData = new FormData();
        for (let key in state){
            formData.append(key, state[key])
        }
        editProfile(state)
    }
       
    return (
        <>
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='tiny'
            trigger={<Button>Edit Profile</Button>}
        >
            <Modal.Content>
                <h4>Edit Profile</h4>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                    <Segment textAlign='center'>
                        <Form.Input     
                            name="name"
                            type="name"
                            placeholder="name"
                            value={state.name}
                            onChange={handleChange}
                            required
                        />
                        <Form.TextArea     
                            name="bio"
                            type="bio"
                            placeholder="bio"
                            value={state.bio}
                            onChange={handleChange}
                            required
                        />
                    </Segment>
                </Form>
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