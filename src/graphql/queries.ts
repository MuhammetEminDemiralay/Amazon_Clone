/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    title
    description
    image
    images
    options
    avgRating
    ratings
    price
    oldPrice
    cartProducts {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
export const syncProducts = /* GraphQL */ `query SyncProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProducts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProductsQueryVariables,
  APITypes.SyncProductsQuery
>;
export const getCartProduct = /* GraphQL */ `query GetCartProduct($id: ID!) {
  getCartProduct(id: $id) {
    id
    userSub
    quantity
    option
    productID
    product {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCartProductQueryVariables,
  APITypes.GetCartProductQuery
>;
export const listCartProducts = /* GraphQL */ `query ListCartProducts(
  $filter: ModelCartProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listCartProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userSub
      quantity
      option
      productID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCartProductsQueryVariables,
  APITypes.ListCartProductsQuery
>;
export const syncCartProducts = /* GraphQL */ `query SyncCartProducts(
  $filter: ModelCartProductFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCartProducts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userSub
      quantity
      option
      productID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCartProductsQueryVariables,
  APITypes.SyncCartProductsQuery
>;
