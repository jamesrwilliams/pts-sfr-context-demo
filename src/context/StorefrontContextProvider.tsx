import React, {FC, useEffect, useState} from 'react';
import StorefrontContext from './StorefrontContext';

export const StorefrontContextProvider: FC = ({children}) => {

  const [currentLanguage, setCurrentLanguage] = useState('en-GB');
  const [tokens, setTokens] = useState({});

  const [selectedIncrement, setSelectedIncrement] = useState(0);

  const changeLanguage = (lang: string) => setCurrentLanguage(lang);

  useEffect(() => {
    console.log('Current Language changed', currentLanguage);

    // Hardcoding this for demo.
    const translationsEndpoint = `https://dz57b37czzuk6.cloudfront.net/storefronts/globalrewards/accelerator/master/tokens/${currentLanguage}.json`

    fetch(translationsEndpoint)
      .then((res) => res.json())
      .then((response) => {
        setTokens(response);
      }).finally(() => {
      })

  }, [currentLanguage])

  const configuration = {
    language: {
      current: currentLanguage,
      change: changeLanguage,
      tokens,
      available: ['ar-QA', 'en-GB', 'en-US']
    }
  }

  const order = {
    selectedIncrement,
    update: setSelectedIncrement
  }

  // @ts-ignore
  return <StorefrontContext.Provider value={{ configuration, order }}>
    { children }
  </StorefrontContext.Provider>;
}
