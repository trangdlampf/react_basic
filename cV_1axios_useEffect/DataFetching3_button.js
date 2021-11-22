import React, { useState, useEffect } from "react";
import axios from 'axios';

const GetData3 = () => {

    const [post, setPost] = useState([]);
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () =>{
        setIdFromButtonClick(id);    
    }

    useEffect( () => {

        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`) // originally id
            .then(res => {
                console.log(res);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [idFromButtonClick] // originally was 'id' to 'idFromButtonClick'
    )

    return (  
        <div>
            <p>GetData3</p>
            <input type="text" value={id} onChange={ e => setId( e.target.value )} />
            <button type="button" value={id} onClick={handleClick}>Click to Get Data</button>
            <div key={post.id} >{post.title}</div>
            { /* <div>{
                posts.map(
                    post => <li key={post.id}>
                        {post.title}
                    </li>    
                )
            }</div> */ }
        </div>
    );
}
 
export default GetData3;
