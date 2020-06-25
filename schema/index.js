const gql = require("graphql-tag");

const query = gql`
  type Query {
    test: String
  }
  type Mutation {
    mutate: String
  }
`;

module.exports = [query];
