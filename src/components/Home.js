import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import ErrorMsg from "./ErrorMsg";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) throw new Error("Something went wrong");
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        })
        .catch((err) => {
          setErrorMsg(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isPending && <ErrorMsg msg={!errorMsg ? "Loading..." : errorMsg} />}
      {blogs && <BlogList blogs={blogs} secTitle={"All Blogs"} />}
    </div>
  );
};

export default Home;
