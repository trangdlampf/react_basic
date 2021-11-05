import SourceList from "./SourceList";
import useFetch from "./useFetch";

const Source = () => {
    const { error, isPending, data: blogs } = useFetch('https://jsonplaceholder.typicode.com/todos/')
  
    return (
      <div className="source">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { blogs && <SourceList blogs={blogs} /> }
      </div>
    );
}

export default Source;