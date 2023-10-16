import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import Blogdetails from "../components/Blogdetails";


function BlogPage() {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog,setBlog] = useState(null);
    const [relatedBlog,setRelatedBlog] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading,loading} = useContext(AppContext);
    
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        try{
            let url = `${newBaseUrl}get-blog?blogId=${blogId}` 

            const res = await fetch(url);
            const data = res.json();

            setBlog(data.blog);
            setRelatedBlog(data.relatedBlog);
        } 
        catch(error){
            console.log("error in blog ID call");
            setBlog(null);
            setRelatedBlog([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])

    return (
        <div>
            <Header/>
            <div>
                <button onClick={()=>navigation(-1)}>
                    Back
                </button>
            </div>
            {
                loading ?
                (
                    <div>
                        <p>loading</p>
                    </div>
                ) :
                (
                    blog ?
                    (
                        <div>
                            <Blogdetails post = {blog} />
                            <h2> Related Blog </h2>
                            {
                                relatedBlog.map( (post) => (
                                    <div key={post.id}>
                                        <Blogdetails post={post} />
                                    </div>
                                ))
                            }
                        </div>
                    ):
                    (
                        <div>
                            <p> No Blogs Found </p>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default BlogPage