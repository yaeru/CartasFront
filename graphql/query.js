import gql from 'graphql-tag';

// For the menu
export const culturesQuery = gql`
query culturesQuery {
  cultures {
    data {
      id
      attributes {
        name
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
        cards {
          data {
            id
            attributes {
              title
              shortDescription
              favor
              attack
              life
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
        cards {
          data {
            id
            attributes {
              title
              shortDescription
              favor
              attack
              life
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
        favor
        attack
        life
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
        favor
        attack
        life
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

// For the Decks Archive
export const decksQuery = gql`
query decksQuery {
  decks {
    data {
      id
      attributes {
        name
        description
      }
    }
  }
}
`;

// For the Deck page
export const deckQuery = gql`
query deckQuery($id: ID!) {
  deck(id: $id) {
    data {
      id
      attributes {
        name
        description
        cards {
          data {
            id
            attributes {
              title
              shortDescription
              attack
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


// For the User page
export const userQuery = gql`
query userQuery($id: ID!){
  usersPermissionsUser(id: $id) {
    data {
      id
      attributes {
        username
        email
        decks {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
`;

// For user Profile
export const usersDeckQuery = gql`
query usersDeckQuery{
  usersPermissionsUsers {
    data {
      id
      attributes {
        username
        email
        decks {
          data {
            id
            attributes {
              name
              description
            }
          }
        }
      }
    }
  }
}
`;
