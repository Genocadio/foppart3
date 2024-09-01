import { useQuery, gql } from '@apollo/client';

const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }
      }
    }
  }
`;

const useRepositories = () => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const repositories = data
    ? data.repositories.edges.map(edge => edge.node)
    : [];

  return { repositories, loading, refetch };
};

export default useRepositories;
