
import './App.css'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'
import { Route, Routes } from 'react-router-dom'

function App() {
  const {fetchBlogPost} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPost();
  },[]);


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
