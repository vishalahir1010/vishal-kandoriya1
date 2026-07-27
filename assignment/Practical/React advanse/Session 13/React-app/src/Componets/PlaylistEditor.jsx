import { useState } from "react";
import { db } from "../firebase";

import { doc, updateDoc, deleteDoc} from "firebase/firestore";
function PlaylistEditor(){

const [playlistId,setPlaylistId] = useState("");
const [newName,setNewName] = useState("");
const updatePlaylist = async()=>{

if(!playlistId || !newName){
alert("Enter Playlist ID and Name");
return;
}
try{
const ref = doc(db,"playlists",playlistId);

await updateDoc(ref,{name:newName});
alert("Playlist Updated");
}
catch(error){
console.log(error);
}
};
const deletePlaylist = async()=>{
if(!playlistId){
alert("Enter Playlist ID");
return;
}

const confirmDelete =
window.confirm(
"Delete Playlist?"
);



if(confirmDelete){
try{
await deleteDoc(doc(db,"playlists",playlistId));
alert("Playlist Deleted");
}
catch(error){
console.log(error);
}
}
};

return(

<div>
<h2>Playlist Editor</h2>

<input type="text"placeholder="Playlist Document ID"value={playlistId}
onChange={(e)=>setPlaylistId(e.target.value)}/>

<br/><br/>

<input type="text"placeholder="New Playlist Name"
value={newName}onChange={(e)=>setNewName(e.target.value)}/>

<br/><br/>

<button onClick={updatePlaylist}>Update Playlist</button>

<button onClick={deletePlaylist}>Delete Playlist</button>
  </div>
 );
}
export default PlaylistEditor;