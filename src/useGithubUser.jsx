import useSWR from "swr";

export function useGithubUser(username) {
  if (username) {
    const { data, error, isLoading, mutate } = useSWR(`https://api.github.com/users/${username}`);

    const handleRefetchBtn = () => {
      mutate();
    }

    return { data, error, isLoading, handleRefetchBtn };
  }

  return { data: null, error: null, isLoading: false };
}
