import React from 'react';
import Card from 'react-bootstrap/Card';
import {useViewRestaurantsAndMenusQuery} from '../../generated/apollo-components';
import { LinkContainer } from 'react-router-bootstrap';

function Cards(props) {

    const {data, loading, error} = useViewRestaurantsAndMenusQuery()

    if (loading) return 'loading'
    if (error) return 'error'

    return (
        data.restaurants.map(restaurant => (
            <Card key={restaurant.id} style={{ width: '390px', display: 'inline-block', margin: '20px' }}>
                <Card.Body>
                    <Card.Img variant="top" src={`https://source.unsplash.com/600x400/?${restaurant.city}`} />
                    <Card.Title>{restaurant.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{restaurant.city}, {restaurant.state}</Card.Subtitle>
                    <Card.Text>
                        HurrDurr this is a Restaurant
                    </Card.Text>
                    <LinkContainer to={`/restaurants/${restaurant.id}`}>
                        <Card.Link>Restaurant Page</Card.Link>
                    </LinkContainer>
                </Card.Body>
            </Card>
        )));
    
}

export default Cards;