import HomeList from "./HomeList";
import useFetch from "./useFetch";
import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]) 
  // const { error, isPending, data } = useFetch('http://localhost:8001/blogs')
  // const { error, isPending, data: blogs } = useFetch('http://localhost:8001/blogs')

  /*    { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> } */
  return (
    <div className="home">
        <p>Data that is internal to the file</p>
        { blogs && <HomeList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;
