import React, { useState } from 'react'

export default function useLikeButton(initialLikes =0) {
    const [like , setLike] = useState(false)
    const [likeCount , setLikeCount] = useState(initialLikes)

    const toggleLike = ()=>{
        if(like){
            setLike(false)
            setLikeCount((prev)=>prev-1)
        }else{
            setLike(true)
            setLikeCount((prev)=>prev+1)
        }
    }
  return {like, likeCount ,toggleLike};
}
