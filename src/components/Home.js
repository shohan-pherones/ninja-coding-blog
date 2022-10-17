import { useState } from "react";
import { Blog } from "./Blog";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Learn React in 30 days",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur, suscipit est tempore labore aperiam! Blanditiis debitis beatae doloribus odit sequi. Voluptates est beatae dolor tenetur quo temporibus consequuntur ullam?",
      author: "Shohan",
      publishedDate: "2022-10-17T12:00:35.846Z",
    },
    {
      id: 2,
      title: "Grid area can makes your life easier",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur, suscipit est tempore labore aperiam! Blanditiis debitis beatae doloribus odit sequi. Voluptates est beatae dolor tenetur quo temporibus consequuntur ullam?",
      author: "Tumpa",
      publishedDate: "2022-10-16T14:00:44.342Z",
    },
    {
      id: 3,
      title: "UDEMY offers 30% OFF! on all courses",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur, suscipit est tempore labore aperiam! Blanditiis debitis beatae doloribus odit sequi. Voluptates est beatae dolor tenetur quo temporibus consequuntur ullam?",
      author: "Ayesha",
      publishedDate: "2022-10-15T11:00:41.345Z",
    },
  ]);

  return (
    <div className="blogs">
      {blogs.map((blog) => (
        <Blog key={blog.id} data={blog} />
      ))}
    </div>
  );
};

export default Home;
