/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const createCartProduct = /* GraphQL */ `mutation CreateCartProduct(
  $input: CreateCartProductInput!
  $condition: ModelCartProductConditionInput
) {
  createCartProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCartProductMutationVariables,
  APITypes.CreateCartProductMutation
>;
export const updateCartProduct = /* GraphQL */ `mutation UpdateCartProduct(
  $input: UpdateCartProductInput!
  $condition: ModelCartProductConditionInput
) {
  updateCartProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCartProductMutationVariables,
  APITypes.UpdateCartProductMutation
>;
export const deleteCartProduct = /* GraphQL */ `mutation DeleteCartProduct(
  $input: DeleteCartProductInput!
  $condition: ModelCartProductConditionInput
) {
  deleteCartProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCartProductMutationVariables,
  APITypes.DeleteCartProductMutation
>;
