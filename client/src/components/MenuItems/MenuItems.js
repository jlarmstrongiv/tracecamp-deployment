import React from 'react'
import { useViewMenuItemsQuery } from '../../generated/apollo-components'

const MenuItems = () => {
    // any js
    const {data, loading, error} = useViewMenuItemsQuery()

    if (loading) return 'loading'
    if (error) return 'error'

    return (
    <div>{data.menuitems.map(menuitem => (
    <div>{menuitem.name}</div>
    ))}</div>
    )
}

export default MenuItems;