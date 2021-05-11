import './App.css';
import { useState, useEffect } from "react";
import Posts from "./components/posts";
import Pagination from "./components/Pagination";
import { useHistory } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([1,2,3]);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPosts(data));
    setLoading(false);
    history.push("/1");
  },[]);

  const lastPostOfPageIndex = currentPage * postsPerPage;
  const firstPostOfPageIndex = lastPostOfPageIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostOfPageIndex, lastPostOfPageIndex);

  const paginate = pageNumber => {
    history.push(`/${pageNumber}`);
    setCurrentPage(pageNumber);
  }

  return (
    <div className="App">
      <h1>Pagination app</h1>
      <Posts loading={loading} posts={currentPosts} setPostsPerPage={setPostsPerPage}/>
      <Pagination paginate={paginate}
                  totalNumberOfPosts={posts.length}
                  postsPerPage={postsPerPage}/>
    </div>
  );
}

export default App;
