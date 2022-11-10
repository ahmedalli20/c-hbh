import React, {useState, useEffect} from "react";

function Home() {

    const[data, setData] = useState([])
  
    useEffect(() => {
      fetch('')
      .then(res => res.json())
      .then(info => setData(info))
    }, []) 


    return(
        <div>
            
        </div>

    )
}

export default Home;