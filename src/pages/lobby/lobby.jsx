import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Lobby = () => {
  const [value, setValue] = useState();
  const navigate=useNavigate()
  const handleJoinRoom=useCallback(()=>{
    navigate(`/room/${value}`)
  },[navigate,value])
  
  return (
    <>
<h1 className="text-blue"> Please Enter The Room Code</h1>
    
    <div
    style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column'
    }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Room Code"
        style={{
          width:'30%',
          marginTop:'40px',
          marginBottom:'20px'
        }}
        
      />
      <button onClick={handleJoinRoom}
      style={{
        width:'10%',
        color:'blue',
        backgroundColor:'lightblue'

      }}
      >Join</button>
    </div>

    </>
  );
};

export default Lobby;
