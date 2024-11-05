import { useParams, Link } from "react-router-dom";

//This is a hook from react-router-dom that allows you to access the parameters of the current route. 
//In this case, it will be used to get the id of the post from the URL.

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams();
    const post = posts.find((post) => post.id.toString() === id);
    //This method searches through the posts array to find the post whose ID matches the id from the URL
    return (
        <main className="PostPage">
            <article className="post">
                {post &&  
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <button onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                }
                {!post &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage

/*It uses conditional rendering to show either the post details (title, date, body, and 
delete button) or a "Post Not Found" message if the post does not exist. */