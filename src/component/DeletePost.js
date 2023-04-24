import React,{useState,useEffect} from 'react'

export default function DeletePost() {
    const [postIds, setPostIds] = useState([])
    const [postId, setPostId] = useState(1)

    const getPosts = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json()
        const ids = data.map(post => post.id);
        setPostIds(ids)
        
    }

const deletePost = async (id) =>{
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE"
    });
    return result.ok
}

useEffect(() => {
  getPosts()
}, [])


const handleSubmit = (e) =>{
e.preventDefault();
let isDeleted = deletePost(postId)
if (isDeleted){
    const newPostId = postIds.filter((id)=> id !== postId)
    setPostIds(newPostId)
}
}

  return (
    <div style={{paddingBottom: "5rem"}}>
        <h2>DeletePost</h2>
        <form onSubmit={handleSubmit} >
            <select value={postId} onChange={(e) => setPostId(e.target.value)}>
                {
                    postIds.map((id)=>{
                        return(<option value={id} key={id}>
                            {id}
                        </option>)
                    })
                }
            </select>
            <button type="submit">Delete Post</button>
        </form>
    </div>
  )
}
