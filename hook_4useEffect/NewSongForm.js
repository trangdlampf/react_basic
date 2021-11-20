import React, { useState } from 'react';

/* addSong is passed as prop from SongList, Line 23 to below_on_Line_4 */
const NewSongForm = ({addSong}) => {

  // setTitle on Line 17 is passed into setTitle on Line below  
  const [title, setTitle] = useState(''); 
  // useState can be used multiple times for different data
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(title);
    addSong(title);
    setTitle(''); // this clears every time User clicks add_button
  } 

  /* onChange tracks what the User types */
  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:
        <input type='text' value={title} required onChange={(e) => { setTitle(e.target.value) }} />
      </label>
      
      <input type='submit' value='add' />
    </form>
  );
}
 
export default NewSongForm;