import gql from 'graphql-tag';

export const VIEW_RESTAURANTS_AND_MENUS = gql`
query viewRestaurantsAndMenus {
  restaurants {
    city
    state
    name
    description
    id
    menuitems {
      name
      description
    }
  }
}
`
export const LIST_RESTAURANTS_BY_STATE = gql`
query listRestaurantsByState($state: String!){
  restaurants(where: {
    state: $state
  }) {
    name
    state
    city
    menuitems {
      name
      description
    }
  }
}
`

export const LIST_RESTAURANTS_BY_CITY = gql`
query listRestaurantsByCity($city: String!){
  restaurants(where: {
    city: $city
  }) {
    name
    state
    city
    menuitems {
      name
      description
    }
  }
}
`

export const MY_RESTAURANT = gql`
query myRestaurant(
  $name: String!
) {
  restaurant(where: {
    name: $name
  }) {
    name
    description
    city
    state
    menuitems {
      name
      description
    }
  }
}
`

export const VIEW_MENU_ITEMS = gql`
query viewMenuItems{
  menuItems {
    name
    description
  }
}
`

// export const RESTAURANT_SEARCH = gql`
// query restaurantSearch($name: String!) {
//   restaurants(
//     where: {
//       name_contains: $name
//     }
//   ){
//     id
//     name
//     description
//   }
// }
// `

export const RESTAURANT_BY_ID = gql`
query RestaurantByID($id: ID!){
  restaurant(where: {
    id: $id
  }) {
    name
    description
    city
    state
    menuitems{
      name
      description
    }
  }
}
`

export const RESTAURANT_SEARCH = gql`
query restaurantSearch($search: String!) {
  restaurants(
    where: {
      OR: [
        {
          name_contains: $search
        },
        {
          city_contains:  $search
        },
        {
          state_contains:  $search
        },
      ]
      
    }
  ){
    id
    name
    description
    state
    city
  }
}
`