import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header";


function BlogPage() {
    const [blog,setBlog] = useState(null);
    const [relatedBlog,setRelatedBlog] = useState([]);
    const location = useLocation();
    const navigation = useNavigation();
    const {setLoading,loading} = useContext(AppContext);
    
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        try{
            let url = `${baseUrl}?blogId=${blogId}`

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
                <button onClick={}>

                </button>
            </div>
        </div>
    )
}

export default BlogPage