import React from 'react';

const SidebarContext = React.createContext({});

export const SidebarProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <SidebarContext.Provider
      value={{}}
    >
      {children}
    </SidebarContext.Provider>
  )
};

export const useSidebarContext = () => React.useContext(SidebarContext);