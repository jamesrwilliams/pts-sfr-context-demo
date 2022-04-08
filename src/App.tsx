import React from 'react';
import { StorefrontContextProvider } from "./context/StorefrontContextProvider";
import Storefront from "./components/Storefront";

const App = () => (
  <StorefrontContextProvider>
    <Storefront />
  </StorefrontContextProvider>
);

export default App;
