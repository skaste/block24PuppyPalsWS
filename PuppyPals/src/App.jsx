import { puppyList } from "./data";
import { useState } from "react";

function App() {

const [puppies, setPuppies] = useState(puppyList);
const [featPupId, setFetPupId] = useState(null);
console.log("puppyList:", puppyList);
  return (
   <>
   {
   puppies.map((puppy) => {
    return <p onClick={()=>{setFetPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
    })
    }
    {featPupId && <p>{featPupId}</p>}
   </>
  );
}

export default App
