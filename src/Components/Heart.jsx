// import { useState } from 'react'

// function Heart(){
// const HeartToggle =()=>{
//   const[isLiked , setLiked]=useState(false);
//      const toggleLike =()=>{
//       setLiked(!Liked);

//      }
// return(
//     <div>
//   <button onClick={toggleLike}>
//     {isLiked? "🤍": "❤️"}
//   </button>
//   </div>
// )
// };
// }
// export default Heart;

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