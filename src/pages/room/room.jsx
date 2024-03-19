import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomId } = useParams();
  const myMetting = async (element) => {
    const appId = 1517097661;
    const secretServer = "6bb5879e7dc09cd946e2dc984d5a48b8";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      secretServer,
      roomId,
      Date.now().toString(),
      "Enter your name"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONOneCall,
      },
    });

  };
  return <div>
   <div ref={myMetting}   
    />
  </div>
   
  
};

export default Room;
