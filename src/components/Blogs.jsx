import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import Blogdetails from "./Blogdetails";

function Blogs() {
    //consume
    const {posts,loading} = useContext(AppContext);
    console.log(posts)
    return (
        <div className='w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]  justify-center items-center'>
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
                        <Blogdetails key={post.id} post={post} />
                    ) ))
                )
            }
        </div>
    )
}

export default Blogs