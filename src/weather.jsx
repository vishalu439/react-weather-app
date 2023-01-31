import { useState } from "react";

let Weather=({data,loading})=>{
    console.log(data)
    
    if(loading)
    {
      return(
      <h1>loading...</h1>



      )

    }

else{

return(
<>

<h1>dtata</h1>









</>








)


}


}
export default Weather;