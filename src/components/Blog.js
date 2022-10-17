export const Blog = ({ data }) => {
  return (
    <div className="blog">
      <h2 className="blog-title">{data.title}</h2>
      <p className="blog-author">
        Written by <strong>{data.author}</strong> on{" "}
        {new Date(data.publishedDate).toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <p className="blog-body">{data.body}</p>
      <button className="btn btn-blog">Read More</button>
    </div>
  );
};
