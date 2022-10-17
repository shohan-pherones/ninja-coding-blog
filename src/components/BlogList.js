const BlogList = ({ blogs, secTitle }) => {
  return (
    <div>
      <span className="section-title">{secTitle}</span>
      {blogs.map((blog) => (
        <div className="blog-list" key={blog.id}>
          <div className="blog-title">{blog.title}</div>
          <div className="blog-author">
            Written by <strong>{blog.author}</strong> on{" "}
            {new Date(blog.publishedDate).toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div className="blog-body">{blog.body}</div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
