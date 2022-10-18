import { useHistory, useParams } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    errorMsg,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Blog deleted");
      history.push("/");
    });
  };

  return (
    <div>
      {isPending && <ErrorMsg msg={!errorMsg ? "Loading..." : errorMsg} />}
      {blog && (
        <div className="blog-list">
          <h2 className="blog-title">{blog.title}</h2>

          <p className="blog-author">
            Written by <strong>{blog.author}</strong> on{" "}
            {new Date(blog.publishedDate).toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <div className="blog-img">
            <img src={blog.img} alt={blog.title} />
          </div>
          <p className="blog-body">{blog.body}</p>
          <button className="btn" onClick={handleDelete}>
            Delete Blog
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
