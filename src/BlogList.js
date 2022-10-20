import { Link } from "react-router-dom";

const BlogList = ({blogs, title, handleDelete}) => {
    //const blogs = props.blogs;
    //const title = props.title;

    //console.log(props,blogs);

    // Using passed in attributes - we create a blog display for each blog passed
    return (
        <div className="blog-list">
            <h2> {title} </h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                        <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList;