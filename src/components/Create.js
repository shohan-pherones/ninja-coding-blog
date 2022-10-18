import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date().toISOString();
    const blog = { title, body, author, img: imgLink, publishedDate: now };

    setIsPending(true);
    sendData(blog);

    setTitle("");
    setBody("");
    setAuthor("");
    setImgLink("");
  };

  const sendData = (data) => {
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      setIsPending(false);
      console.log("New blog added");
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>
        Add a <span style={{ color: "var(--color-primary" }}>New Blog</span>
      </h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Blog title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Blog body:</label>
          <textarea
            required
            cols="30"
            rows="5"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="form-control">
          <label>Blog author:</label>
          <input
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Blog image link:</label>
          <input
            type="text"
            required
            value={imgLink}
            onChange={(e) => setImgLink(e.target.value)}
          />
        </div>
        {!isPending && <button className="btn">Publish Blog</button>}
        {isPending && <button className="btn">Publishing...</button>}
      </form>
    </div>
  );
};

export default Create;
