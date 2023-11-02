import { useGithubUser } from "./useGithubUser";

export const GithubUser = ({username}) => {
  const { data, error, isLoading } = useGithubUser(username);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      <h1>{data?.login}</h1>
      <h2>{data?.name}</h2>
      <img src={data?.avatar_url} />
    </>
  );
};
