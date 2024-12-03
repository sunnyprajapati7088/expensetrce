import React, { useEffect, useState } from 'react'

function Counter({name}) {
    const [count, setCount] = useState(0);
    console.log(count,"state")
    useEffect(() => {
       console.log("mount",count)
       
    }, [])
    useEffect(()=>{
        console.log("update", count);
        return (() => {
            console.log("unmountUpdate", count);
        })
    },[count])
    
  return (
    <div className="text-center text-3xl"><div>{name}</div>
      {count}
      <button
        className="text-center text-3xl"
        onClick={() => setCount(count + 1)}
      >
        inc
      </button>
      <button
        className="text-center text-3xl ml-5"
        onClick={() => setCount(0)}
      >
        reset
      </button>
    </div>
  );
}

export default Counter
