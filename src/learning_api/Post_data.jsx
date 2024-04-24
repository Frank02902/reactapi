import React from 'react'
import { useState } from 'react'

const Post_data = () => {

    const [title, settitle] = useState('');
const [body, setbody] = useState('');

    const addpost = async (title, body) => {
        await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: Math.random().toString(36).slice(2),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => res.json())
        .then(data => {
            setpost(data => [data, ...post]);
            settitle('');
            setbody('data posted');
        })
        .catch(err=>{
            console.log(err.message);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addpost(title, body);
     };    

  return (
    <div className="app">
      <div className="add-post-container">
         <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" value={title}
               onChange={(e) => settitle(e.target.value)}
            />
            <textarea name="" className="form-control" id="" cols="10" rows="8" 
               value={body} onChange={(e) => setbody(e.target.value)} 
            ></textarea>
            <button type="submit">Add Post</button>
         </form>
      </div>
      {/* ... */}
   </div>
  )
}

export default Post_data