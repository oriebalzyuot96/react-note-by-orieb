import React, { useState , useEffect } from 'react';

import NewSongForm from './NewSongForm';

import uuid from 'uuid/v1';

//rather than cc =>sfc

//use state 
const SongList = () => {
  const [songs,setSongs]=useState([{tittle:"A",id:1},{tittle:"B",id:2},{tittle:"C",id:3}]);

  const addSong=(title) =>{

    setSongs([...songs,{tittle:title,id:uuid()},])

  }


  /*******************/
  /*use effect */


  const [age,setAge]=useState(20);



    // useEffect(()=>{
    //   console.log("upload", songs);

    // })

  //need to use effect when age data is change ??
  
    /****
     * first pass the array with use effect essationaly  you need to watch 
     *   so this will fetch just when the songs in added array second parameter is changed .
     * 
     */

     //this function is fetch when songs state is changed 
      useEffect(()=>{
        console.log("upload page", "done");

      },[])


    //this function is fetch when songs state is changed 
      useEffect(()=>{
        console.log("upload Song", songs);

      },[songs])

    //this function is fetch when age state is changed 

      useEffect(()=>{
        console.log("upload Age", age);

      },[age])

  /************************/

  return (
    <div className="songList">

    <ul>
        {songs.map(song=>{
          return(
            <li key={song.id}>{song.tittle}</li>

          )

        })}
    </ul>


    <NewSongForm addSong={addSong}></NewSongForm>

    {/* /****use effect */}
    <button onClick={() => setAge(age + 1)}>Add 1 to Age: {age} </button>


    {/* <button onClick={addSong}>Add New Song </button> */}
    


    </div>
    );
}
 
export default SongList;