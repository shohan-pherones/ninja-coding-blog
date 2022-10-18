import { Link } from "react-router-dom";

const BlogList = ({ blogs, secTitle }) => {
  return (
    <div>
      <span className="section-title">{secTitle}</span>
      {blogs.map((blog) => (
        <div className="blog-list" key={blog.id}>
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
          <Link to={`/blogs/${blog.id}`} className="blog-link">
            <button className="btn">Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
