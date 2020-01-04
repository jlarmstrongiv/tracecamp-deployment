import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type AggregateMenuItem = {
   __typename?: 'AggregateMenuItem',
  count: Scalars['Int'],
};

export type AggregateRestaurant = {
   __typename?: 'AggregateRestaurant',
  count: Scalars['Int'],
};

export type AggregateUser = {
   __typename?: 'AggregateUser',
  count: Scalars['Int'],
};


export type MenuItem = {
   __typename?: 'MenuItem',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  restaurant: Restaurant,
};

export type MenuItemConnection = {
   __typename?: 'MenuItemConnection',
  pageInfo: PageInfo,
  edges: Array<MenuItemEdge>,
  aggregate: AggregateMenuItem,
};

export type MenuItemEdge = {
   __typename?: 'MenuItemEdge',
  node: MenuItem,
  cursor: Scalars['String'],
};

export enum MenuItemOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type MenuItemWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  restaurant?: Maybe<RestaurantWhereInput>,
  AND?: Maybe<Array<MenuItemWhereInput>>,
  OR?: Maybe<Array<MenuItemWhereInput>>,
  NOT?: Maybe<Array<MenuItemWhereInput>>,
};

export type MenuItemWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  deleteRestaurant?: Maybe<Restaurant>,
};


export type MutationDeleteRestaurantArgs = {
  where: RestaurantWhereUniqueInput
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  user?: Maybe<User>,
  users: Array<User>,
  usersConnection: UserConnection,
  restaurant?: Maybe<Restaurant>,
  restaurants: Array<Restaurant>,
  restaurantsConnection: RestaurantConnection,
  menuItem?: Maybe<MenuItem>,
  menuItems: Array<MenuItem>,
  menuItemsConnection: MenuItemConnection,
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryRestaurantArgs = {
  where: RestaurantWhereUniqueInput
};


export type QueryRestaurantsArgs = {
  where?: Maybe<RestaurantWhereInput>,
  orderBy?: Maybe<RestaurantOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryRestaurantsConnectionArgs = {
  where?: Maybe<RestaurantWhereInput>,
  orderBy?: Maybe<RestaurantOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMenuItemArgs = {
  where: MenuItemWhereUniqueInput
};


export type QueryMenuItemsArgs = {
  where?: Maybe<MenuItemWhereInput>,
  orderBy?: Maybe<MenuItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMenuItemsConnectionArgs = {
  where?: Maybe<MenuItemWhereInput>,
  orderBy?: Maybe<MenuItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type Restaurant = {
   __typename?: 'Restaurant',
  id: Scalars['ID'],
  name: Scalars['String'],
  description: Scalars['String'],
  city: Scalars['String'],
  state: Scalars['String'],
  numMenuItems?: Maybe<Scalars['Int']>,
  menuitems?: Maybe<Array<MenuItem>>,
  welcome?: Maybe<Scalars['String']>,
  menuItemsCount?: Maybe<Scalars['Int']>,
};


export type RestaurantMenuitemsArgs = {
  where?: Maybe<MenuItemWhereInput>,
  orderBy?: Maybe<MenuItemOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type RestaurantConnection = {
   __typename?: 'RestaurantConnection',
  pageInfo: PageInfo,
  edges: Array<RestaurantEdge>,
  aggregate: AggregateRestaurant,
};

export type RestaurantEdge = {
   __typename?: 'RestaurantEdge',
  node: Restaurant,
  cursor: Scalars['String'],
};

export enum RestaurantOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  StateAsc = 'state_ASC',
  StateDesc = 'state_DESC',
  NumMenuItemsAsc = 'numMenuItems_ASC',
  NumMenuItemsDesc = 'numMenuItems_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type RestaurantWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  city_not?: Maybe<Scalars['String']>,
  city_in?: Maybe<Array<Scalars['String']>>,
  city_not_in?: Maybe<Array<Scalars['String']>>,
  city_lt?: Maybe<Scalars['String']>,
  city_lte?: Maybe<Scalars['String']>,
  city_gt?: Maybe<Scalars['String']>,
  city_gte?: Maybe<Scalars['String']>,
  city_contains?: Maybe<Scalars['String']>,
  city_not_contains?: Maybe<Scalars['String']>,
  city_starts_with?: Maybe<Scalars['String']>,
  city_not_starts_with?: Maybe<Scalars['String']>,
  city_ends_with?: Maybe<Scalars['String']>,
  city_not_ends_with?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  state_not?: Maybe<Scalars['String']>,
  state_in?: Maybe<Array<Scalars['String']>>,
  state_not_in?: Maybe<Array<Scalars['String']>>,
  state_lt?: Maybe<Scalars['String']>,
  state_lte?: Maybe<Scalars['String']>,
  state_gt?: Maybe<Scalars['String']>,
  state_gte?: Maybe<Scalars['String']>,
  state_contains?: Maybe<Scalars['String']>,
  state_not_contains?: Maybe<Scalars['String']>,
  state_starts_with?: Maybe<Scalars['String']>,
  state_not_starts_with?: Maybe<Scalars['String']>,
  state_ends_with?: Maybe<Scalars['String']>,
  state_not_ends_with?: Maybe<Scalars['String']>,
  numMenuItems?: Maybe<Scalars['Int']>,
  numMenuItems_not?: Maybe<Scalars['Int']>,
  numMenuItems_in?: Maybe<Array<Scalars['Int']>>,
  numMenuItems_not_in?: Maybe<Array<Scalars['Int']>>,
  numMenuItems_lt?: Maybe<Scalars['Int']>,
  numMenuItems_lte?: Maybe<Scalars['Int']>,
  numMenuItems_gt?: Maybe<Scalars['Int']>,
  numMenuItems_gte?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  menuitems_every?: Maybe<MenuItemWhereInput>,
  menuitems_some?: Maybe<MenuItemWhereInput>,
  menuitems_none?: Maybe<MenuItemWhereInput>,
  AND?: Maybe<Array<RestaurantWhereInput>>,
  OR?: Maybe<Array<RestaurantWhereInput>>,
  NOT?: Maybe<Array<RestaurantWhereInput>>,
};

export type RestaurantWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type UserConnection = {
   __typename?: 'UserConnection',
  pageInfo: PageInfo,
  edges: Array<UserEdge>,
  aggregate: AggregateUser,
};

export type UserEdge = {
   __typename?: 'UserEdge',
  node: User,
  cursor: Scalars['String'],
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type ViewRestaurantsAndMenusQueryVariables = {};


export type ViewRestaurantsAndMenusQuery = (
  { __typename?: 'Query' }
  & { restaurants: Array<(
    { __typename?: 'Restaurant' }
    & Pick<Restaurant, 'city' | 'state' | 'name' | 'description' | 'id'>
    & { menuitems: Maybe<Array<(
      { __typename?: 'MenuItem' }
      & Pick<MenuItem, 'name' | 'description'>
    )>> }
  )> }
);

export type ListRestaurantsByStateQueryVariables = {
  state: Scalars['String']
};


export type ListRestaurantsByStateQuery = (
  { __typename?: 'Query' }
  & { restaurants: Array<(
    { __typename?: 'Restaurant' }
    & Pick<Restaurant, 'name' | 'state' | 'city'>
    & { menuitems: Maybe<Array<(
      { __typename?: 'MenuItem' }
      & Pick<MenuItem, 'name' | 'description'>
    )>> }
  )> }
);

export type ListRestaurantsByCityQueryVariables = {
  city: Scalars['String']
};


export type ListRestaurantsByCityQuery = (
  { __typename?: 'Query' }
  & { restaurants: Array<(
    { __typename?: 'Restaurant' }
    & Pick<Restaurant, 'name' | 'state' | 'city'>
    & { menuitems: Maybe<Array<(
      { __typename?: 'MenuItem' }
      & Pick<MenuItem, 'name' | 'description'>
    )>> }
  )> }
);

export type MyRestaurantQueryVariables = {
  name: Scalars['String']
};


export type MyRestaurantQuery = (
  { __typename?: 'Query' }
  & { restaurant: Maybe<(
    { __typename?: 'Restaurant' }
    & Pick<Restaurant, 'name' | 'description' | 'city' | 'state'>
    & { menuitems: Maybe<Array<(
      { __typename?: 'MenuItem' }
      & Pick<MenuItem, 'name' | 'description'>
    )>> }
  )> }
);

export type ViewMenuItemsQueryVariables = {};


export type ViewMenuItemsQuery = (
  { __typename?: 'Query' }
  & { menuItems: Array<(
    { __typename?: 'MenuItem' }
    & Pick<MenuItem, 'name' | 'description'>
  )> }
);

export type RestaurantByIdQueryVariables = {
  id: Scalars['ID']
};


export type RestaurantByIdQuery = (
  { __typename?: 'Query' }
  & { restaurant: Maybe<(
    { __typename?: 'Restaurant' }
    & Pick<Restaurant, 'name' | 'description' | 'city' | 'state'>
    & { menuitems: Maybe<Array<(
      { __typename?: 'MenuItem' }
      & Pick<MenuItem, 'name' | 'description'>
    )>> }
  )> }
);

export type RestaurantSearchQueryVariables = {
  search: Scalars['String']
};


export type RestaurantSearchQuery = (
  { __typename?: 'Query' }
  & { restaurants: Array<(
    { __typename?: 'Restaurant' }
    & Pick<Restaurant, 'id' | 'name' | 'description' | 'state' | 'city'>
  )> }
);


export const ViewRestaurantsAndMenusDocument = gql`
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
    `;
export type ViewRestaurantsAndMenusComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ViewRestaurantsAndMenusQuery, ViewRestaurantsAndMenusQueryVariables>, 'query'>;

    export const ViewRestaurantsAndMenusComponent = (props: ViewRestaurantsAndMenusComponentProps) => (
      <ApolloReactComponents.Query<ViewRestaurantsAndMenusQuery, ViewRestaurantsAndMenusQueryVariables> query={ViewRestaurantsAndMenusDocument} {...props} />
    );
    
export type ViewRestaurantsAndMenusProps<TChildProps = {}> = ApolloReactHoc.DataProps<ViewRestaurantsAndMenusQuery, ViewRestaurantsAndMenusQueryVariables> | TChildProps;
export function withViewRestaurantsAndMenus<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ViewRestaurantsAndMenusQuery,
  ViewRestaurantsAndMenusQueryVariables,
  ViewRestaurantsAndMenusProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ViewRestaurantsAndMenusQuery, ViewRestaurantsAndMenusQueryVariables, ViewRestaurantsAndMenusProps<TChildProps>>(ViewRestaurantsAndMenusDocument, {
      alias: 'viewRestaurantsAndMenus',
      ...operationOptions
    });
};

/**
 * __useViewRestaurantsAndMenusQuery__
 *
 * To run a query within a React component, call `useViewRestaurantsAndMenusQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewRestaurantsAndMenusQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewRestaurantsAndMenusQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewRestaurantsAndMenusQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ViewRestaurantsAndMenusQuery, ViewRestaurantsAndMenusQueryVariables>) {
        return ApolloReactHooks.useQuery<ViewRestaurantsAndMenusQuery, ViewRestaurantsAndMenusQueryVariables>(ViewRestaurantsAndMenusDocument, baseOptions);
      }
export function useViewRestaurantsAndMenusLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ViewRestaurantsAndMenusQuery, ViewRestaurantsAndMenusQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ViewRestaurantsAndMenusQuery, ViewRestaurantsAndMenusQueryVariables>(ViewRestaurantsAndMenusDocument, baseOptions);
        }
export type ViewRestaurantsAndMenusQueryHookResult = ReturnType<typeof useViewRestaurantsAndMenusQuery>;
export type ViewRestaurantsAndMenusLazyQueryHookResult = ReturnType<typeof useViewRestaurantsAndMenusLazyQuery>;
export type ViewRestaurantsAndMenusQueryResult = ApolloReactCommon.QueryResult<ViewRestaurantsAndMenusQuery, ViewRestaurantsAndMenusQueryVariables>;
export const ListRestaurantsByStateDocument = gql`
    query listRestaurantsByState($state: String!) {
  restaurants(where: {state: $state}) {
    name
    state
    city
    menuitems {
      name
      description
    }
  }
}
    `;
export type ListRestaurantsByStateComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ListRestaurantsByStateQuery, ListRestaurantsByStateQueryVariables>, 'query'> & ({ variables: ListRestaurantsByStateQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ListRestaurantsByStateComponent = (props: ListRestaurantsByStateComponentProps) => (
      <ApolloReactComponents.Query<ListRestaurantsByStateQuery, ListRestaurantsByStateQueryVariables> query={ListRestaurantsByStateDocument} {...props} />
    );
    
export type ListRestaurantsByStateProps<TChildProps = {}> = ApolloReactHoc.DataProps<ListRestaurantsByStateQuery, ListRestaurantsByStateQueryVariables> | TChildProps;
export function withListRestaurantsByState<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ListRestaurantsByStateQuery,
  ListRestaurantsByStateQueryVariables,
  ListRestaurantsByStateProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ListRestaurantsByStateQuery, ListRestaurantsByStateQueryVariables, ListRestaurantsByStateProps<TChildProps>>(ListRestaurantsByStateDocument, {
      alias: 'listRestaurantsByState',
      ...operationOptions
    });
};

/**
 * __useListRestaurantsByStateQuery__
 *
 * To run a query within a React component, call `useListRestaurantsByStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useListRestaurantsByStateQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListRestaurantsByStateQuery({
 *   variables: {
 *      state: // value for 'state'
 *   },
 * });
 */
export function useListRestaurantsByStateQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListRestaurantsByStateQuery, ListRestaurantsByStateQueryVariables>) {
        return ApolloReactHooks.useQuery<ListRestaurantsByStateQuery, ListRestaurantsByStateQueryVariables>(ListRestaurantsByStateDocument, baseOptions);
      }
export function useListRestaurantsByStateLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListRestaurantsByStateQuery, ListRestaurantsByStateQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ListRestaurantsByStateQuery, ListRestaurantsByStateQueryVariables>(ListRestaurantsByStateDocument, baseOptions);
        }
export type ListRestaurantsByStateQueryHookResult = ReturnType<typeof useListRestaurantsByStateQuery>;
export type ListRestaurantsByStateLazyQueryHookResult = ReturnType<typeof useListRestaurantsByStateLazyQuery>;
export type ListRestaurantsByStateQueryResult = ApolloReactCommon.QueryResult<ListRestaurantsByStateQuery, ListRestaurantsByStateQueryVariables>;
export const ListRestaurantsByCityDocument = gql`
    query listRestaurantsByCity($city: String!) {
  restaurants(where: {city: $city}) {
    name
    state
    city
    menuitems {
      name
      description
    }
  }
}
    `;
export type ListRestaurantsByCityComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ListRestaurantsByCityQuery, ListRestaurantsByCityQueryVariables>, 'query'> & ({ variables: ListRestaurantsByCityQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ListRestaurantsByCityComponent = (props: ListRestaurantsByCityComponentProps) => (
      <ApolloReactComponents.Query<ListRestaurantsByCityQuery, ListRestaurantsByCityQueryVariables> query={ListRestaurantsByCityDocument} {...props} />
    );
    
export type ListRestaurantsByCityProps<TChildProps = {}> = ApolloReactHoc.DataProps<ListRestaurantsByCityQuery, ListRestaurantsByCityQueryVariables> | TChildProps;
export function withListRestaurantsByCity<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ListRestaurantsByCityQuery,
  ListRestaurantsByCityQueryVariables,
  ListRestaurantsByCityProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ListRestaurantsByCityQuery, ListRestaurantsByCityQueryVariables, ListRestaurantsByCityProps<TChildProps>>(ListRestaurantsByCityDocument, {
      alias: 'listRestaurantsByCity',
      ...operationOptions
    });
};

/**
 * __useListRestaurantsByCityQuery__
 *
 * To run a query within a React component, call `useListRestaurantsByCityQuery` and pass it any options that fit your needs.
 * When your component renders, `useListRestaurantsByCityQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListRestaurantsByCityQuery({
 *   variables: {
 *      city: // value for 'city'
 *   },
 * });
 */
export function useListRestaurantsByCityQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListRestaurantsByCityQuery, ListRestaurantsByCityQueryVariables>) {
        return ApolloReactHooks.useQuery<ListRestaurantsByCityQuery, ListRestaurantsByCityQueryVariables>(ListRestaurantsByCityDocument, baseOptions);
      }
export function useListRestaurantsByCityLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListRestaurantsByCityQuery, ListRestaurantsByCityQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ListRestaurantsByCityQuery, ListRestaurantsByCityQueryVariables>(ListRestaurantsByCityDocument, baseOptions);
        }
export type ListRestaurantsByCityQueryHookResult = ReturnType<typeof useListRestaurantsByCityQuery>;
export type ListRestaurantsByCityLazyQueryHookResult = ReturnType<typeof useListRestaurantsByCityLazyQuery>;
export type ListRestaurantsByCityQueryResult = ApolloReactCommon.QueryResult<ListRestaurantsByCityQuery, ListRestaurantsByCityQueryVariables>;
export const MyRestaurantDocument = gql`
    query myRestaurant($name: String!) {
  restaurant(where: {name: $name}) {
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
    `;
export type MyRestaurantComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MyRestaurantQuery, MyRestaurantQueryVariables>, 'query'> & ({ variables: MyRestaurantQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const MyRestaurantComponent = (props: MyRestaurantComponentProps) => (
      <ApolloReactComponents.Query<MyRestaurantQuery, MyRestaurantQueryVariables> query={MyRestaurantDocument} {...props} />
    );
    
export type MyRestaurantProps<TChildProps = {}> = ApolloReactHoc.DataProps<MyRestaurantQuery, MyRestaurantQueryVariables> | TChildProps;
export function withMyRestaurant<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MyRestaurantQuery,
  MyRestaurantQueryVariables,
  MyRestaurantProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, MyRestaurantQuery, MyRestaurantQueryVariables, MyRestaurantProps<TChildProps>>(MyRestaurantDocument, {
      alias: 'myRestaurant',
      ...operationOptions
    });
};

/**
 * __useMyRestaurantQuery__
 *
 * To run a query within a React component, call `useMyRestaurantQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyRestaurantQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyRestaurantQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useMyRestaurantQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyRestaurantQuery, MyRestaurantQueryVariables>) {
        return ApolloReactHooks.useQuery<MyRestaurantQuery, MyRestaurantQueryVariables>(MyRestaurantDocument, baseOptions);
      }
export function useMyRestaurantLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyRestaurantQuery, MyRestaurantQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyRestaurantQuery, MyRestaurantQueryVariables>(MyRestaurantDocument, baseOptions);
        }
export type MyRestaurantQueryHookResult = ReturnType<typeof useMyRestaurantQuery>;
export type MyRestaurantLazyQueryHookResult = ReturnType<typeof useMyRestaurantLazyQuery>;
export type MyRestaurantQueryResult = ApolloReactCommon.QueryResult<MyRestaurantQuery, MyRestaurantQueryVariables>;
export const ViewMenuItemsDocument = gql`
    query viewMenuItems {
  menuItems {
    name
    description
  }
}
    `;
export type ViewMenuItemsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ViewMenuItemsQuery, ViewMenuItemsQueryVariables>, 'query'>;

    export const ViewMenuItemsComponent = (props: ViewMenuItemsComponentProps) => (
      <ApolloReactComponents.Query<ViewMenuItemsQuery, ViewMenuItemsQueryVariables> query={ViewMenuItemsDocument} {...props} />
    );
    
export type ViewMenuItemsProps<TChildProps = {}> = ApolloReactHoc.DataProps<ViewMenuItemsQuery, ViewMenuItemsQueryVariables> | TChildProps;
export function withViewMenuItems<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ViewMenuItemsQuery,
  ViewMenuItemsQueryVariables,
  ViewMenuItemsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ViewMenuItemsQuery, ViewMenuItemsQueryVariables, ViewMenuItemsProps<TChildProps>>(ViewMenuItemsDocument, {
      alias: 'viewMenuItems',
      ...operationOptions
    });
};

/**
 * __useViewMenuItemsQuery__
 *
 * To run a query within a React component, call `useViewMenuItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewMenuItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewMenuItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewMenuItemsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ViewMenuItemsQuery, ViewMenuItemsQueryVariables>) {
        return ApolloReactHooks.useQuery<ViewMenuItemsQuery, ViewMenuItemsQueryVariables>(ViewMenuItemsDocument, baseOptions);
      }
export function useViewMenuItemsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ViewMenuItemsQuery, ViewMenuItemsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ViewMenuItemsQuery, ViewMenuItemsQueryVariables>(ViewMenuItemsDocument, baseOptions);
        }
export type ViewMenuItemsQueryHookResult = ReturnType<typeof useViewMenuItemsQuery>;
export type ViewMenuItemsLazyQueryHookResult = ReturnType<typeof useViewMenuItemsLazyQuery>;
export type ViewMenuItemsQueryResult = ApolloReactCommon.QueryResult<ViewMenuItemsQuery, ViewMenuItemsQueryVariables>;
export const RestaurantByIdDocument = gql`
    query RestaurantByID($id: ID!) {
  restaurant(where: {id: $id}) {
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
    `;
export type RestaurantByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RestaurantByIdQuery, RestaurantByIdQueryVariables>, 'query'> & ({ variables: RestaurantByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const RestaurantByIdComponent = (props: RestaurantByIdComponentProps) => (
      <ApolloReactComponents.Query<RestaurantByIdQuery, RestaurantByIdQueryVariables> query={RestaurantByIdDocument} {...props} />
    );
    
export type RestaurantByIdProps<TChildProps = {}> = ApolloReactHoc.DataProps<RestaurantByIdQuery, RestaurantByIdQueryVariables> | TChildProps;
export function withRestaurantById<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RestaurantByIdQuery,
  RestaurantByIdQueryVariables,
  RestaurantByIdProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, RestaurantByIdQuery, RestaurantByIdQueryVariables, RestaurantByIdProps<TChildProps>>(RestaurantByIdDocument, {
      alias: 'restaurantById',
      ...operationOptions
    });
};

/**
 * __useRestaurantByIdQuery__
 *
 * To run a query within a React component, call `useRestaurantByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestaurantByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestaurantByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRestaurantByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RestaurantByIdQuery, RestaurantByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<RestaurantByIdQuery, RestaurantByIdQueryVariables>(RestaurantByIdDocument, baseOptions);
      }
export function useRestaurantByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RestaurantByIdQuery, RestaurantByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RestaurantByIdQuery, RestaurantByIdQueryVariables>(RestaurantByIdDocument, baseOptions);
        }
export type RestaurantByIdQueryHookResult = ReturnType<typeof useRestaurantByIdQuery>;
export type RestaurantByIdLazyQueryHookResult = ReturnType<typeof useRestaurantByIdLazyQuery>;
export type RestaurantByIdQueryResult = ApolloReactCommon.QueryResult<RestaurantByIdQuery, RestaurantByIdQueryVariables>;
export const RestaurantSearchDocument = gql`
    query restaurantSearch($search: String!) {
  restaurants(where: {OR: [{name_contains: $search}, {city_contains: $search}, {state_contains: $search}]}) {
    id
    name
    description
    state
    city
  }
}
    `;
export type RestaurantSearchComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RestaurantSearchQuery, RestaurantSearchQueryVariables>, 'query'> & ({ variables: RestaurantSearchQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const RestaurantSearchComponent = (props: RestaurantSearchComponentProps) => (
      <ApolloReactComponents.Query<RestaurantSearchQuery, RestaurantSearchQueryVariables> query={RestaurantSearchDocument} {...props} />
    );
    
export type RestaurantSearchProps<TChildProps = {}> = ApolloReactHoc.DataProps<RestaurantSearchQuery, RestaurantSearchQueryVariables> | TChildProps;
export function withRestaurantSearch<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RestaurantSearchQuery,
  RestaurantSearchQueryVariables,
  RestaurantSearchProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, RestaurantSearchQuery, RestaurantSearchQueryVariables, RestaurantSearchProps<TChildProps>>(RestaurantSearchDocument, {
      alias: 'restaurantSearch',
      ...operationOptions
    });
};

/**
 * __useRestaurantSearchQuery__
 *
 * To run a query within a React component, call `useRestaurantSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestaurantSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestaurantSearchQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useRestaurantSearchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RestaurantSearchQuery, RestaurantSearchQueryVariables>) {
        return ApolloReactHooks.useQuery<RestaurantSearchQuery, RestaurantSearchQueryVariables>(RestaurantSearchDocument, baseOptions);
      }
export function useRestaurantSearchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RestaurantSearchQuery, RestaurantSearchQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RestaurantSearchQuery, RestaurantSearchQueryVariables>(RestaurantSearchDocument, baseOptions);
        }
export type RestaurantSearchQueryHookResult = ReturnType<typeof useRestaurantSearchQuery>;
export type RestaurantSearchLazyQueryHookResult = ReturnType<typeof useRestaurantSearchLazyQuery>;
export type RestaurantSearchQueryResult = ApolloReactCommon.QueryResult<RestaurantSearchQuery, RestaurantSearchQueryVariables>;