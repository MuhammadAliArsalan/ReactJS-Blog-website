import { Link } from 'react-router-dom';

/*Link: This is a component from react-router-dom. It works like an anchor (<a>) tag in HTML,
but it prevents the entire page from reloading  when you navigate between routes. It’s used
to link to a specific post’s details page. */

const Post = ({ post }) => {
    return (
        <article className="post">
{/*The title and date are wrapped in a Link that takes users to a detailed post page.*/}
            <Link to={`post/${post.id}`}>
                <h2>{post.title}</h2>
                <p className="postDate">{post.datetime}</p>
            </Link>
            <p className="postBody">{
                (post.body).length <= 25
                    ? post.body
                    : `${(post.body).slice(0, 25)}...` 
//If the content is longer than 25 characters, it shows only the first 25 characters followed by "..." to indicate the text is truncated.
            }</p>
        </article>
    )
}

export default Post