import React, { useState, useEffect } from 'react'

export default function () {
  const [Edits, setEdits] = useState([])
  const [Edit, setEdit] = useState(1)
  const [title, settitle] = useState("")
  const [body, setbody] = useState("")

  const getPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json()
    const ids = data.map(post => post.id);
    setEdits(ids)
  }



    const updatePost = async (id, title, body) => {
      const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        body: {
          title: title,
          body: body
        },
        method: "PUT"
      });
      // return result.ok 
      console.log(result)
    }


    useEffect(() => {
      getPost()
    }, [])

    const handleSubmit = (e) => {
      e.preventDefault()
       updatePost(1, title, body)


    }
    return (
      <div>
        <h2>UpdatePost</h2>
        <form onSubmit={handleSubmit}>
          title
          <input type="text" value={title} onChange={(e) => settitle(e.target.value)} />
          body
          <textarea value={body} onChange={(e) =>  setbody(e.target.value)} />
          <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }

