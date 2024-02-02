import React, { createContext, useState } from 'react';

// Define the type for context
type ColorContextType = {
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
  secretIndex: number;
  setSecretIndex: React.Dispatch<React.SetStateAction<number>>;
};

// Create context with a default value
export const ColorContext = createContext<ColorContextType>({
  colors: [],
  setColors: () => {},
  secretIndex: 0,
  setSecretIndex: () => {}
});

type Props = {
  children: React.ReactNode;
};

export const ColorProvider = ({ children }: Props) => {
  const [colors, setColors] = useState<string[]>([]);
  const [secretIndex, setSecretIndex] = useState<number>(0);

  // Provide context value to children components
  const contextValue: ColorContextType = {
    colors,
    setColors,
    secretIndex,
    setSecretIndex
  };

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
};
