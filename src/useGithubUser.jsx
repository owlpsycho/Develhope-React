import { useEffect } from "react";
import { useState } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Errore nella richiesta");
      }
      const dataJSON = await response.json();
      setData(dataJSON);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      fetchData();
  }, [username]);

  return {data, error, loading}
}
