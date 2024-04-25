import React from 'react'

const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    })
    .then(res => {
        if (res.status === 200){
            setPost(
                posts.filter(post => {
                    return post.id !== id;
                })
            )
        }
        else {
            return;
        }
    })
}
const Delete_data = () => {
  return (
    <div className="posts-container">
      {posts.map((post) => {
         return (
            <div className="post-card" key={post.id}>
               {/* ... */}
               <div className="button">
                  <div className="delete-btn" onClick={() => deletePost(post.id)}>
                     Delete
                  </div>
               </div>    
            </div>
         );
      })}
   </div>
  )
}

export default Delete_data