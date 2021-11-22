import axios from 'axios';
import { useState, useEffect } from 'react';

function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => { setPosts(response.data) })
            .catch((error) => { console.log(error) })
    }

    return (
        <>
            {posts.map((post) => <h2 key={post.id}> {post.title}</h2>)}
        </>
    )
}



export default Posts;