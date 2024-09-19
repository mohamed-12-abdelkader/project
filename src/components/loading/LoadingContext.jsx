import React, { createContext, useState, useContext } from "react";

// Create the Loading context
const LoadingContext = createContext();

// Custom hook to use the Loading context
export const useLoading = () => useContext(LoadingContext);

// Provider component
export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
