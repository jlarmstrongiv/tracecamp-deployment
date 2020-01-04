import React from 'react'
import {useParams} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import {useRestaurantSearchQuery} from '../../generated/apollo-components'

const SearchResults = () => {
    const {term} = useParams()

    const {data, loading, error} = useRestaurantSearchQuery({
        variables: {
            search: term
        }
    })

    if (loading) return 'loading'
    if (error) return 'error'

    return (
        data.restaurants.map(restaurant => (
            <Card key={restaurant.id} style={{ width: '390px', display: 'inline-block', margin: '20px' }}>
            <Card.Body>
                <Card.Img variant="top" src={`https://source.unsplash.com/600x400/?${restaurant.city}`} />
                <Card.Title>{restaurant.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{restaurant.city}, {restaurant.state}</Card.Subtitle>
                <LinkContainer to={`/restaurants/${restaurant.id}`}>
        <Card.Link>Restaurant Page</Card.Link>
                </LinkContainer>
            </Card.Body>
        </Card>
        )));
}

export default SearchResults;

        // <div>
        //     {data.restaurants.map(restaurant => (
        //         <div key={restaurant.id}>{restaurant.name}</div>
        //     ))}
        // </div>