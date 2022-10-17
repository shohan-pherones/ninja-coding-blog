import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const abortCtrl = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCtrl.signal })
        .then((res) => {
          if (!res.ok) throw new Error("Something went wrong");
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setErrorMsg(err.message);
          }
        });
    }, 1000);

    return () => abortCtrl.abort();
  }, [url]);

  return { data, isPending, errorMsg };
};

export default useFetch;
