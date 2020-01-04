import React from 'react'
import {useViewRestaurantsAndMenusQuery} from '../../generated/apollo-components'

const Restaurants = () => {
    // any js
    const {data, loading, error} = useViewRestaurantsAndMenusQuery()

    if (loading) return 'loading'
    if (error) return 'error'

    return (
    <div>{data.restaurants.map(restaurant => (
    <div>{restaurant.name}</div>
    ))}</div>
    )
}

export default Restaurants