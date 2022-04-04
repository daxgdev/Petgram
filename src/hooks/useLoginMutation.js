import { gql, useMutation } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const useLoginMutation = () => {
  const [loginMutation, { loading, error }] = useMutation(LOGIN_MUTATION);
  return { loginMutation, loading, error };
};
