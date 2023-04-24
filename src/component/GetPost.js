import React, { useState, useEffect } from "react";
 
export default function GetPost() {
  const [post, setPost] = useState([]);

  const getPost = async () => {
    const respond = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await respond.json();
    console.log(data);

    setPost(data);
  };

  useEffect(() => { 
    getPost();
  }, []);

  return (
    <div>
      <h2>Get Post</h2>
      {post.map((el) => (
        <div key={el.id}>
          <h3>{el.title}</h3>
          <p>{el.body}</p>
        </div>
      ))}
    </div>
  );
}
