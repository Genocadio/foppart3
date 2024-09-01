// hooks/useMe.js
import { useQuery, gql } from '@apollo/client';

// Define the me query
const ME_QUERY = gql`
  query {
    me {
      id
      username
    }
  }
`;

const useMe = () => {
  const { data, loading, error } = useQuery(ME_QUERY);

  return {
    data,
    loading,
    error,
    isSignedIn: data?.me !== null,
  };
};

export default useMe;
