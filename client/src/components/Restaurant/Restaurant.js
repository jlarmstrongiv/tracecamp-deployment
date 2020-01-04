import React from 'react'
import {useRestaurantByIdQuery} from '../../generated/apollo-components'
import ListGroup from 'react-bootstrap/ListGroup'
import { useParams, Link } from 'react-router-dom'

const Restaurant = () => {
    const params = useParams()
    // any js
    const {data, loading, error} = useRestaurantByIdQuery({
        variables: {
            id: params.id
        }
    })

    if (loading) return 'loading'
    if (error) return 'error'

    const {name, description, city, state, menuitems} = data.restaurant

    return (
        <React.Fragment>

        <center>
                <div>
            <br />
                {name}
            <br />
                {city}, {state}
            <br />
                <img src={`https://source.unsplash.com/800x400/?${city}`} />
            <br />
                </div>
        </center>
        <p style={{maxWidth: '720px', margin: '0 auto'}}>
            {description}
        </p>
            <div>
                <ListGroup>
                    {menuitems.map(menuitem => (
                    <ListGroup.Item key={menuitem.id}>{menuitem.name}
                        <br />
                            <img src={`https://source.unsplash.com/400x200/?${menuitem.name}`} />

                        <br />
                            {menuitem.description}
                        <br />
                    </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>

        </React.Fragment>
        
        
    )
}

export default Restaurant