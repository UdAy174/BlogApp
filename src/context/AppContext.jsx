import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//step1
export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    //Blog data Addition

    async function fetchBlogPost(page=1,tag=null,category){
        setLoading(true);
        let url = `${baseUrl} ?page=${page}`;

        if(tag){
            url += `&tag=${tag}`;
        }

        if(category){
            url += `&category=${category}`;
        }
        console.log("printing the final URL");
        console.log(url);
        try{
            const result = await fetch(url)
            const data = await result.json();
            console.log(data)
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            console.log("Error in fetching data")
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false)
    }


    
    function handlePageChange(page){
        setPage(page);
        fetchBlogPost(page);
    }

    const value = {
        posts, 
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchBlogPost
    }

    return (
        <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
    )
}