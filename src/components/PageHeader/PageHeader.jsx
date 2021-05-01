import React from 'react';
import icon from '../../images/JJ_icon_white-01.png';
import { Link } from 'react-router-dom';
import { Header, Segment, Image, Icon, Dropdown } from 'semantic-ui-react';


export default function PageHeader({ profileUser, user, handleLogout }){
    return (
        <Segment clearing className="nav-bar">
            <Header as='h3' floated='right' className='dropdown-menu'>
                <Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image>
                <Dropdown floating>
                    <Dropdown.Menu className="left">
                        <Dropdown.Item>
                            <Link to={`/${user.username}`}><Icon className="user circle outline"></Icon>My Profile</Link>          
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to='/new'><Icon className="utensils"></Icon>Create Recipe</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to='' onClick={handleLogout}><Icon className="lock"></Icon>Logout</Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Header>                      
            <Header as='h3' className='logo' floated='left'>
                <Image src={icon} size='medium'/><Link to="/" className='logo-text'> JIBBAP JOURNEY</Link>
            </Header>
        </Segment>
    )
}