import { createContext } from 'react';

interface StorefrontContextModel {
  configuration: {
    language: {
      current: string;
      change: (lang: string) => void;
      tokens: { [key: string]: string }
      available: string[];
    },
    loading: {
      isLoading: true,
      setLoading: (set: boolean) => void;
    }
  }
  order: {
    selectedIncrement: number,
    update: (selectedIncrement: 0, totalPrice: 0) => void;
  }
  member: {}
  pageContent: any
}

const StorefrontContext = createContext<Partial<StorefrontContextModel>>({});

export default StorefrontContext;
