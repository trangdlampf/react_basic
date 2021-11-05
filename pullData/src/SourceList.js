import { Link } from 'react-router-dom';

const SourceList = ({ blogs }) => {
  return (
    <div className="source-list">
      <p>Data from External Website: https://jsonplaceholder.typicode.com/todos/</p>  
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
 
export default SourceList;