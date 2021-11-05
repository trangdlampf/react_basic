import { Link } from 'react-router-dom';

const HomeList = ({ blogs }) => {
  return (
    <div className="comment-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>ID is { blog.id }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default HomeList;