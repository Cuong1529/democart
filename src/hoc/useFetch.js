import axios from "axios";
import { useState, useEffect } from "react";

function useFetch(url = "", params = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    let isSubscribe = true;
    (async function fetchData() {
      try {
        const response = await axios.get(url, params);
        if (isSubscribe && response.status === 200) {
          const { data = null } = response;
          setData(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        isSubscribe && setIsLoading(false);
      }
    })();
    return () => (isSubscribe = false);
  }, []);
  return { isLoading, data };
}

export default useFetch;
