
import React, { useEffect, useState } from 'react';
// const socket = zmq.socket("sub");

export default function ZeroMQ() {
  const [messagesReceived, setMessagesReceived] = useState(0);

  window.api.receive("fromMain", (event, arg) => {
    setMessagesReceived(messagesReceived + 1);
  });


  return (
    <div>
      { messagesReceived }
    </div> 
  )
}

