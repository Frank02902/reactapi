import React from 'react'
import { useState, useEffect } from 'react'

const get_data = () => {
// post is an array to hold the posts while getpost updates the valus of the post
    const [post, getpost] = useState([]);

    const getdata = () => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response =>response.json())
        .then(data => {
            getpost(data)
            console.log(data)
        })
    .catch((er) =>{
        console.log(er.message);
    });
    }


  return (
    <div>
        <button onClick={getdata}>get data</button>
        <h1>data gotten is </h1>
        {post.map(data => {
            return(
                <h1>{data.id}</h1>
            )
        })}
    </div>
  )
}

export default get_data