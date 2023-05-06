import React, { useContext, useState, useEffect} from "react";
import { ActionCableContext } from "context";

const useActionCable = ({ 
    channel, 
    identifier,
    onReceived,
    onConnected,
    onDisconnected    
  }) => {
    
    const cable = useContext(ActionCableContext);
    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
      if (!subscription && cable) {
        const chnl = cable.subscriptions.create({
            channel: channel,
            ...identifier
          },
          {
            connected: () => {              
              console.log(`Connected to ${channel} ${JSON.stringify(identifier)}`)
              onConnected && onConnected();
            },
            disconnected: () => {
              console.log(`Disconnected from ${channel}`)
              onDisconnected && onDisconnected();
            },
            received: (data) => {
              if(data){
                onReceived && onReceived(data);              
              }              
            },
          }
        );
  
        setSubscription(chnl);
      }
  
      return () => {
        if (cable) {
          setSubscription(null)
          cable.disconnect();
        }
      };
    }, [cable]);

  }

  export default useActionCable;