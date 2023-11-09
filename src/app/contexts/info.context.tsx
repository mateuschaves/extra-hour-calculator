import React, {createContext, useContext, useState} from 'react';
import { ProviderProps } from '.';

export type InfoContextDataProps = {
  valueHour: string;
  setValueHour: (value: string) => void;
};

const initialState: InfoContextDataProps = {
  valueHour: '',
  setValueHour: () => {},
};

export const InfoContext = createContext<InfoContextDataProps>(initialState);

export function InfoContextProvider({children}: ProviderProps) {
  const [valueHour, setValueHour] = useState('');
  
  return (
    <InfoContext.Provider
      value={{
       valueHour,
       setValueHour
      }}>
      {children}
    </InfoContext.Provider>
  );
}

export const useInfoContext = (): InfoContextDataProps => {
  const context = useContext(InfoContext);
  if (!context) {
    throw new Error('useInfoContext must be used within a InfoContext.');
  }

  return context;
};
