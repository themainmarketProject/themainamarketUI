import gql from "graphql-tag";

export const GET_CATEGORIES = gql`
  query {
    categories {
      id
      name
      subCategories {
        name
        id
        products {
          avatarUrl
          name
        }
      }
    }
  }
`;


// Get products by page number and number per page
export const PRODUCTS = gql`
  query {
    products(pageNumber: 1, perPage: 10) {
      id
      name
      price
      avatarUrl
    }
  }
`;

// Get Subcategories by page number and number per page

export const SUB_CATEGORIES = gql`
  query {
    subCategories(pageNumber: 1, perPage: 5) {
      id
      name
      products {
        id
        avatarUrl
      }
    }
  }
`;