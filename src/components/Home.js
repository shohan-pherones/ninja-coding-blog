import BlogList from "./BlogList";
import ErrorMsg from "./ErrorMsg";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    errorMsg,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isPending && <ErrorMsg msg={!errorMsg ? "Loading..." : errorMsg} />}
      {blogs && <BlogList blogs={blogs} secTitle={"All Blogs"} />}
    </div>
  );
};

export default Home;
