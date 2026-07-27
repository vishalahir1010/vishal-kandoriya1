import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";


function LiveCommentsFeed(){

  const [comments,setComments] = useState([]);


  useEffect(()=>{

    const unsubscribe = onSnapshot(
      collection(db,"comments"),

      (snapshot)=>{

        const data = snapshot.docs.map((doc)=>({
          id:doc.id,
          ...doc.data()
        }));

        console.log("Comments:",data);

        setComments(data);

      },

      (error)=>{
        console.log("Error:",error);
      }

    );


    return ()=>unsubscribe();


  },[]);



  return (

    <div>

      <h2>Live Comments Feed</h2>


      {
        comments.length === 0 ?

        <h3>No Comments Available</h3>

        :

        comments.map((comment)=>(

          <div key={comment.id}>

            <p>
              {comment.username} : {comment.text}
            </p>

          </div>

        ))

      }


    </div>

  );

}


export default LiveCommentsFeed;