import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TokensContextType {
  userTokens: number;
  canjeToken: (cost: number) => boolean;
  resetTokens: () => void;
  setTokens: (tokens: number) => void;
}

const TokensContext = createContext<TokensContextType | undefined>(undefined);

interface TokensProviderProps {
  children: ReactNode;
}

export const TokensProvider: React.FC<TokensProviderProps> = ({ children }) => {
  const [userTokens, setUserTokens] = useState(6);

  const canjeToken = (cost: number): boolean => {
    if (userTokens >= cost) {
      setUserTokens(prev => prev - cost);
      return true;
    }
    return false;
  };

  const resetTokens = () => {
    setUserTokens(6);
  };

  const setTokens = (tokens: number) => {
    setUserTokens(tokens);
  };

  const value: TokensContextType = {
    userTokens,
    canjeToken,
    resetTokens,
    setTokens,
  };

  return (
    <TokensContext.Provider value={value}>{children}</TokensContext.Provider>
  );
};

export const useTokens = (): TokensContextType => {
  const context = useContext(TokensContext);
  if (context === undefined) {
    throw new Error('useTokens must be used within a TokensProvider');
  }
  return context;
};
