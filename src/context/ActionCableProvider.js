import React, { useEffect, useState } from "react";
import ActionCableContext from "./ActionCableContext";

const ActionCableProvider = ({ children, cableUrl }) => {
  const [CableApp, setCableApp] = useState({});

  const loadConsumer = async () => {
    const { createConsumer } = await import("@rails/actioncable");
    return createConsumer;
  };

  useEffect(() => {
    if (typeof window !== "undefined" && cableUrl && CableApp.cable === undefined) {
      loadConsumer().then((createConsumer) => {
        setCableApp({
          cable: createConsumer(cableUrl)
        });
      });
    }
  }, [cableUrl]);

  return(
    <ActionCableContext.Provider 
      value={CableApp.cable}
    >
      {children}
    </ActionCableContext.Provider>
  )
};

export default ActionCableProvider