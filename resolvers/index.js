//user mutation resolvers
const mutations = require("./mutations");
const queries = require("./queries");

module.exports = {
  Query: {
    test: () => "query is successful",
  },
  Mutation: {
    mutate: () => "Mutation is successful",
  },
};
