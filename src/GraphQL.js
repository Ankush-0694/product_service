const { ProductMutation } = require("./product/api/mutation");
const { ProductQuery } = require("./product/api/query");

const { CartQuery } = require("./cart/api/query");
const { CartMutation } = require("./cart/api/mutation");
const { ReviewMutation } = require("./review/api/mutation");
const { getProductByIdData } = require("./product/data/data");

const resolvers = {
  Query: {
    ...ProductQuery,
    ...CartQuery,
  },
  Mutation: {
    ...ProductMutation,
    ...CartMutation,
    ...ReviewMutation,
  },
  Product: {
    __resolveReference(ref) {
      console.log(ref);
      return getProductByIdData(ref.id);
    },
  },
};

module.exports = { resolvers };