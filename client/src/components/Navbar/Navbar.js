import React from 'react';
import {Nav, Form, FormControl, Button, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';

function Navbars(props) {
    const [restaurant,setRestaurant] = React.useState('')

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">100 Hipster Food Consumption Spots</Navbar.Brand>
            <Nav className="mr-auto">
                <LinkContainer to="/restaurants">
                    <Nav.Link>Restaurants</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/menuitems">
                    <Nav.Link>Menu Items</Nav.Link>
                </LinkContainer>
            </Nav>
            <Form inline onSubmit={(event) => event.preventDefault()}>
                <FormControl value={restaurant} onChange={(event) => setRestaurant(event.target.value)} type="text" placeholder="Search" className="mr-sm-2" />
                <Link to={`/search/${restaurant}`}>
                <Button variant="outline-info">
                    Search
                </Button>
                </Link>
            </Form>
        </Navbar>
        );
    
}

export default Navbars;