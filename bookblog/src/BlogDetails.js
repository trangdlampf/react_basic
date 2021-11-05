import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })  
  }

  // <h2>Blog details - { id }</h2>
  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }  
      { error && <div>{ error }</div> } 
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <p> { blog.body }</p>
          <button onClick={handleClick}>Delete Blog</button>
        </article>  
      ) } 
    </div>
  );
}
 
export default BlogDetails;