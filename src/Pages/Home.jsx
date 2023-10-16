import Header from "../components/Header"
import Pagination from "../components/Pagination"
import Blogs from "../components/Blogs"

function Home() {
  return (
    <div>
        <Header/>
        <div>
            <Blogs/>
            <Pagination/>
        </div>
    </div>
  )
}

export default Home