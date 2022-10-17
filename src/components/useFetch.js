import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error("Something went wrong");
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
        })
        .catch((err) => {
          setErrorMsg(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, isPending, errorMsg };
};

export default useFetch;
