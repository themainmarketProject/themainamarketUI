import gql from "graphql-tag";

const GET_CATEGORIES = gql`
  query {
    categories {
      id
      name
      subCategories {
        name
        id
      }
    }
  }
`;


// Get products by page number and number per page
const PRODUCTS = gql`
  query {
    products(pageNumber: 1, perPage: 3) {
      id
      name
      avatarUrl
    }
  }
`;
