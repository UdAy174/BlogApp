
import './App.css'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'

function App() {
  const {fetchBlogPost} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation(); 

  useEffect(() => {
    const  page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPost(Number(page), tag);
    }

    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPost(Number(page),null,category);
    }
    else{fetchBlogPost(Number(page))}
  },[location.pathname, location.search]);


  return (
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/blog/:blogId" element = {<BlogPage/>} />
      <Route path="/tags/:tag" element = {<TagPage/>} />
      <Route path="/categories/:category" element = {<CategoryPage/>} />
    </Routes>
  );
}

export default App
