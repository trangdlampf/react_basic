import CommentsList from "./CommentsList";
import useFetch from "./useFetch";

const Comments = () => {
    const { error, isPending, data: blogs } = useFetch('https://jsonplaceholder.typicode.com/todos/')
  
    return (
      <div className="comments">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { blogs && <CommentsList blogs={blogs} /> }
      </div>
    );
}

export default Comments;