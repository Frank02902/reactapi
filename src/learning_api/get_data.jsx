import React from 'react'
import { useState, useEffect } from 'react'
const get_data = () => {
// post is an array to hold the posts while getpost updates the valus of the post
    const [post, getpost] = useState([]);
    const [loaded, setloaded] = useState(5)

    const getdata = () => {
        fetch('https://jsonplaceholder.typicode.com/posts?')
        .then(response =>response.json())
        .then(data => {
            getpost(data)
            console.log(data)
            setloaded(true)
        })
    .catch((er) =>{
        console.log(er.message);
        setloaded(false)
    });
    }


  return (
    <div>
        <button onClick={getdata}>get data</button>
        {loaded? <h1>data gotten is </h1> : !loaded ? <h1>failed to get data</h1> : <h1>yoo</h1>}
        {post.map(data => {
            return(
                <h1>{data.id}</h1>
            )
        })}
    </div>
  )
}

export default get_data