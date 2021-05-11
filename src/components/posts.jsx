import { useRef } from "react";

const Posts = ({loading, posts, setPostsPerPage}) => {
    const pageRef = useRef(posts.length);
    
    const onSubmit = e => {
        e.preventDefault();
        setPostsPerPage(pageRef.current.value);
    }

    if(loading) return <h2>loading...</h2>

    return (
        <>
        <ul className="posts">
            <div>
                <h2>Posts</h2>
                {posts.map(post => 
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                    </div>)}
            </div>
        </ul>
        <form onSubmit={onSubmit}>
            <label htmlFor="postsPerPage">Number of posts</label>
            <input type="number" id="postsPerPage" ref={pageRef}></input>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Posts;