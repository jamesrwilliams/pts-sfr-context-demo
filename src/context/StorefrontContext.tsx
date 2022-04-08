import { createContext } from 'react';

interface IThemeContext {
  configuration: {
    language: {
      current: string;
      change: (lang: string) => void;
      tokens: { [key: string]: string }
      available: string[];
    }
  }
  order: {
    selectedIncrement: 0,
    update: (selectedIncrement: 0, totalPrice: 0) => void;
  }
  member: {}
}

const StorefrontContext = createContext<Partial<IThemeContext>>({});

export default StorefrontContext;
