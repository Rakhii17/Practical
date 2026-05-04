import { useState } from 'react'

function Heart(){
    const[liked,setLiked]=useState(false);

    return(
        <button onClick={()=>setLiked(!liked)}>
            {liked? "❤️": "🤍"}
        </button>
    )
}
export default Heart;
