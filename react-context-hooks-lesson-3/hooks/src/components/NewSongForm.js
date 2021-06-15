import React ,{useState } from 'react';




//ask about add song ???? 

const NewSongForm = ({addSong}) => {   
         const [title, setTitle] = useState(''); //handle change text value ;


            //handle submit form ;


            const  handleSubmitForm = (e) =>{
                e.preventDefault();
                addSong(title);
                setTitle('');
                }


    return (


        <form onSubmit={handleSubmitForm}>

        <label>songName:</label>
        <input type="text"  value={title} required onChange={(e)=>setTitle(e.target.value)}></input>
        <input type="submit" value="addSong"></input>

        </form>


     );
}
 
export default NewSongForm;