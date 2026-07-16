import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import {collection,onSnapshot,query,orderBy} from "../firebase";

function LiveCommentsFeed(){
  const [comments,setComments] = useState([]);
  useEffect(()=>{
    const commentsQuery = query(
      collection(db,"comments"),
      orderBy("createdAt", "desc" )
    );

    const unsubscribe = onSnapshot(commentsQuery, (snapshot)=>{
    const commentData = snapshot.docs.map(
          (doc)=>({
            id:doc.id,
            ...doc.data()
          })
        );
        setComments(commentData);
      }
    );
    return ()=>unsubscribe();
  },[]);
  return (

    <div>
      <h2> Live Comments Feed</h2>
      {
        comments.map((comment)=>(
          <div key={comment.id}>
            <p>{comment.username}: {comment.text}</p>
          </div>
        ))
      }
    </div>
  );
}


export default LiveCommentsFeed;