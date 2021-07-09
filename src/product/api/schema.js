const { gql } = require("apollo-server");

const ProductSchema = gql`
  type Product @key(fields: "id") {
    id: ID
    productName: String
    productDescription: String
    productPrice: Int
    reviews: [Review]
  }

  type Query {
    getAllProducts: [Product]
    getProductById(id: ID!): Product
    getMultipleProducts(productIDArray: [ID]): [Product]
  }

  type Mutation {
    addProduct(
      productName: String
      productDescription: String
      productPrice: Int
    ): Product

    updateProduct(
      productID: ID
      productName: String
      productDescription: String
      productPrice: Int
    ): Product

    deleteProduct(productID: ID): Product
  }
`;
module.exports = { ProductSchema };
