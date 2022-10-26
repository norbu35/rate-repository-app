import { useMutation, useApolloClient } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutation';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const [mutate, { loading }] = useMutation(SIGN_IN);
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  const signIn = async (credentials) => {
    const { data } = await mutate({
      variables: {
        credentials,
      },
    });

    await authStorage.setAccessToken(data.authenticate.accessToken);
    client.resetStore();
  };

  return [signIn, loading];
};

export default useSignIn;
