import React, { createContext, useContext } from 'react';
import { ITarotReading } from '../interfaces/ITarotReading';

interface TarotReadingContextType {
    categories: ITarotReading[];
    setCategories: React.Dispatch<React.SetStateAction<ITarotReading[]>>;
}

export const TarotReadingContext = createContext<TarotReadingContextType>({} as TarotReadingContextType)

export const useTarotReadingContext = () => useContext(TarotReadingContext);


export const TarotReadingStorage = ({ children }: { children: any }) => {
  const [categories, setCategories] = React.useState([] as ITarotReading[]);

  return (
    <TarotReadingContext.Provider value={{ categories, setCategories }}>
      {children}
    </TarotReadingContext.Provider>
  );
};
