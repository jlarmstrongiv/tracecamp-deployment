import { prisma } from '../generated/prisma-client'
import faker from 'faker'
import { restaurants as realRestaurants } from './restaurants.json'
import { menuitems as itemsofmenus } from './menu-items.json'
import { reviews as restdescrips } from './rest-descriptions.json'

let psuedoRestaurants = realRestaurants;
let psuedoMenuItems = itemsofmenus;
let pseudoDescriptions = restdescrips;

// console.log(psuedoRestaurants.map(psuedoRestaurant => psuedoRestaurant.name))
// put terrible yelp reviews

const restaurants = realRestaurants.map(({name, city, state}) => {
    const menuItemNumber = faker.random.number({
        max: 5,
        min: 2,
        precision: 1
    })
    const randDescrip = faker.random.arrayElement(pseudoDescriptions)
    return {
        name,
        description: randDescrip.review,
        city,
        state,
        numMenuItems: menuItemNumber,
        menuitems: [...Array(menuItemNumber)].map(_ => {
            const randomItem = faker.random.arrayElement(psuedoMenuItems)
            return {
                name: randomItem.name,
                description: randomItem.description
            }
        })
    }
});


// console.log(restaurants.map(restaurant => restaurant.name))

(async () => {
    

    for (const restaurant of restaurants) {
        const dbRestaurant = await prisma.createRestaurant({
            name: restaurant.name,
            description: restaurant.description,
            city: restaurant.city,
            state: restaurant.state,
            numMenuItems: restaurant.numMenuItems,
        })
        for(const menuitem of restaurant.menuitems) {
            const dbMenuItem = await prisma.createMenuItem({
                name: menuitem.name,
                description: menuitem.description,
                restaurant: {
                    connect: {
                        id: dbRestaurant.id
                    }
                }
            })
        }
    }
//     console.log(JSON.stringify(restaurants, null, 2))
}) ()