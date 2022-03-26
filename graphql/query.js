import gql from 'graphql-tag';

// For the menu
export const culturesQuery = gql`
query culturesQuery {
  cultures {
    data {
      id
      attributes {
        name
        cards {
          data {
            id
            attributes {
              title
              shortDescription
              power
              culture {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }
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
    }
  }
}
`;

// For the Culture Archive
export const cultureQuery = gql`
query cultureQuery($id: ID!) {
  culture(id: $id) {
    data {
      id
      attributes {
        name
        cards {
          data {
            id
            attributes {
              title
              shortDescription
              power
              culture {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }
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
    }
  }
}
`;

// For the Cards list
export const cardsQuery = gql`
query cardsQuery {
  cards {
    data {
      id
      attributes {
        title
        shortDescription
        description
        power
        culture {
          data {
            id
            attributes {
              name
            }
          }
        }
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

// For the Card page
export const cardQuery = gql`
query cardQuery($id: ID!) {
  card(id: $id) {
    data {
      id
      attributes {
        title
        shortDescription
        description
        power
        culture {
          data {
            id
            attributes {
              name
            }
          }
        }
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


