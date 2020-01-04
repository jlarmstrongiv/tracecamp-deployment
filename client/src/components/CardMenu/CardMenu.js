import React from 'react';
import Card from 'react-bootstrap/Card';
import {useViewMenuItemsQuery} from '../../generated/apollo-components';

function CardMenus(props) {

    const {data, loading, error} = useViewMenuItemsQuery()

    if (loading) return 'loading'
    if (error) return 'error'

    return (
        data.menuItems.map(menuitem => (
            <Card key={menuitem.id} style={{ width: '390px', display: 'inline-block', margin: '20px' }}>
                <Card.Body>
                    <Card.Img variant="top" src={`https://source.unsplash.com/600x400/?${menuitem.name}`} />
                    <Card.Title>{menuitem.name}</Card.Title>
                    <Card.Text>
                        {menuitem.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        )));
    
}

export default CardMenus;