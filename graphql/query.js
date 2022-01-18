import gql from 'graphql-tag';

export const cardsQuery = gql`
query cardsQuery {
  cards(locale:"es") {
    data {
      id
      attributes {
        title
        shortDescription
        description
        culture
        cover {
          data {
            id
            attributes {
              url
              caption
              alternativeText
            }
          }
        }
      }
    }
  }
}
`;

export const cardQuery = gql`
query cardQuery($id: ID!) {
  card(id: $id) {
    data {
      id
      attributes {
        title
        shortDescription
        description
        culture
        cover {
          data {
            id
            attributes {
              url
              caption
              alternativeText
            }
          }
        }
      }
    }
  }
}
`;


