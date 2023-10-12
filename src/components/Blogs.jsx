import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import './Blogs.css'

function Blogs() {
    //consume
    const {posts,loading} = useContext(AppContext);
    console.log(posts)
    return (
        <div>
            {
                loading ? 
                (<Spinner/>) : 
                (
                    posts.length === 0 ?
                    (
                        <div>
                            <p>No Post Found</p>
                        </div>
                    ) :
                    (posts.map( (post) => (
                        <div key={post.id}>
                            <p className='text-xl'>{post.title}</p>
                            <p>
                                By <span>{post.author}</span> on <span>{post.category}</span>
                            </p>
                            <p>Posted on {post.date}</p>
                            <p>{post.content}</p>
                            <div>
                                {
                                    post.tags.map((tag,index)=> {
                                        return <span key={index}>{`#${tag}`}</span>
                                    })
                                }
                            </div>
                        </div>
                    ) ))
                )
            }
        </div>
    )
}

export default Blogs