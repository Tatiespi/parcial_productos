import React, { useState } from "react";
import { Usercontext } from " ./Usercontext";
const user = {};
export const UserProvider = ({ children }) => {
  const [user, setuser] = useState();
  return (
    <Usercontext.Provider value={{ user, setuser }}>
      {children}
    </Usercontext.Provider>
  );
};