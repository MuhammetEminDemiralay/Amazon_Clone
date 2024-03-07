/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
  onCreateProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
  onUpdateProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
  onDeleteProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onCreateCartProduct = /* GraphQL */ `subscription OnCreateCartProduct(
  $filter: ModelSubscriptionCartProductFilterInput
) {
  onCreateCartProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCartProductSubscriptionVariables,
  APITypes.OnCreateCartProductSubscription
>;
export const onUpdateCartProduct = /* GraphQL */ `subscription OnUpdateCartProduct(
  $filter: ModelSubscriptionCartProductFilterInput
) {
  onUpdateCartProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCartProductSubscriptionVariables,
  APITypes.OnUpdateCartProductSubscription
>;
export const onDeleteCartProduct = /* GraphQL */ `subscription OnDeleteCartProduct(
  $filter: ModelSubscriptionCartProductFilterInput
) {
  onDeleteCartProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCartProductSubscriptionVariables,
  APITypes.OnDeleteCartProductSubscription
>;
