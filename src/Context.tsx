import React, { createContext, useState, ReactNode, SetStateAction, Dispatch } from 'react';
import { Event } from 'graph-navigation-js'

interface ModuleState {
  eventHandler: (event: Event) => void;
  fetching: boolean;
}

interface ModuleContextProps {
  state: ModuleState;
  setState: Dispatch<SetStateAction<ModuleState>>;
}

export const moduleContext = createContext<ModuleContextProps>({
  state: { eventHandler: () => {}, fetching: false },
  setState: () => {},
});

interface ModuleContextProviderProps {
  children: ReactNode;
}

export const ModuleContextProvider: React.FC<ModuleContextProviderProps> = ({ children }) => {
  const [state, setState] = useState<ModuleState>({ eventHandler: () => {}, fetching: false });

  return (
    <moduleContext.Provider value={{ state, setState }}>
      {children}
    </moduleContext.Provider>
  );
};
