import React, { createContext, useContext } from 'react';
import { ICard } from '../interfaces/ICard';

interface CardContextType {
  cards: ICard[];
  setCards: React.Dispatch<React.SetStateAction<ICard[]>>;
}

export const CardContext = createContext<CardContextType>(
  {} as CardContextType
);

export const useCardContext = () => useContext(CardContext);

export const CardStorage = ({ children }: { children: any }) => {
  const [cards, setCards] = React.useState([] as ICard[]);

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      {children}
    </CardContext.Provider>
  );
};
