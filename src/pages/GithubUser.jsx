import { useState, useEffect } from "react";

export const GithubUser = ({ username }) => {
  const API_URL = `https://api.github.com/users/${username}`

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      {
        data && (
          <div>
            <img style={{borderRadius: "10%"}} src={data.avatar_url} alt="user avatar" />
            <h1>{data.login}</h1>
            <h1>{data.name}</h1>
          </div>
        )
      }
    </>
  )
}
