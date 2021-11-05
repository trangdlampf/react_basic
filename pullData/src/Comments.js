import CommentsList from "./CommentsList";
import useFetch from "./useFetch";

const Comments = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:8001/blogs')
  
    return (
      <div className="comments">
        <p>Data from localhost: http://localhost:8001/blogs</p>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { blogs && <CommentsList blogs={blogs} /> }
      </div>
    );
}

export default Comments;