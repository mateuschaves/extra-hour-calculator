import React, {createContext, useContext, useState} from 'react';
import { ProviderProps } from '.';

export type InfoContextDataProps = {
  valueHour: string;
  setValueHour: (value: string) => void;
  nightTax: string;
  setNightTax: (value: string) => void;
  holidayTax: string;
  setHolidayTax: (value: string) => void;
  normalTax: string;
  setNormalTax: (value: string) => void;
};

const initialState: InfoContextDataProps = {
  valueHour: '',
  setValueHour: () => {},
  nightTax: '70',
  setNightTax: () => {},
  holidayTax: '100',
  setHolidayTax: () => {},
  normalTax: '50',
  setNormalTax: () => {},
};

export const InfoContext = createContext<InfoContextDataProps>(initialState);

export function InfoContextProvider({children}: ProviderProps) {
  const [valueHour, setValueHour] = useState(initialState.valueHour);
  const [nightTax, setNightTax] = useState(initialState.nightTax);
  const [holidayTax, setHolidayTax] = useState(initialState.holidayTax);
  const [normalTax, setNormalTax] = useState(initialState.normalTax);
  
  return (
    <InfoContext.Provider
      value={{
        valueHour,
        setValueHour,
        nightTax,
        setNightTax,
        holidayTax,
        setHolidayTax,
        normalTax,
        setNormalTax,
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
