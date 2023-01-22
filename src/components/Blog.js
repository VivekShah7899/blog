import React,{useContext,useState,useEffect} from 'react'
import { LoginContext } from '../Contexts/LoginContext'
import './Blog.css'
function Blog() {
  const {username}=useContext(LoginContext)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error))
  }, []);

  return (
    <div className='container'>
      <h1 className='blog-header'>Blog Posts</h1>
      {posts.map(post => (
        <div className='blog-list' key={post.id}>
          <div className='blog-item'>
            <h2 className='blog-title'>{post.title}</h2>
            <p className='blog-description'>{post.body}</p>
          </div>
          <div className='blog-image'>
             <img src={`https://picsum.photos/200/300?random=${post.id}`} alt={post.title} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Blog
