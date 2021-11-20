import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ]);
  const [age, setAge] = useState(20); // Demonstrates useEffect and Line 34

  const addSong = (title) => { // title comes from form
    setSongs([...songs, { title: title, id: uuid() }]);
  }

  // callback function, is updated during lifecycle, used to connect to Db 
  useEffect(() => {
    console.log('useEffect callback 1', songs);
  }, [songs]); // [songs] is the callback that causes useEffect when [songs] changes
  useEffect(() => {
    console.log('useEffect callback 2', age);
  }, [age]);

  /* addSong  sends the title to the form on Line 23 using props */
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return ( <li key={song.id}>{song.title}</li> );
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => {
          setAge(age + 1)
        } }>Add 1 to age: {age}</button>
    </div>
  );
}

export default SongList;