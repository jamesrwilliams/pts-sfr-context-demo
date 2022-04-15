import React, {FC, useEffect, useState} from 'react';
import StorefrontContext from './StorefrontContext';

export const StorefrontContextProvider: FC = ({children}) => {

  const [currentLanguage, setCurrentLanguage] = useState('en-GB');
  const [tokens, setTokens] = useState({});
  const [pageContent, setPageContent] = useState({});
  const [selectedIncrement, setSelectedIncrement] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const changeLanguage = (lang: string) => setCurrentLanguage(lang);

  useEffect(() => {
    // Hardcoding this for demo.
    const translationsEndpoint = `https://dz57b37czzuk6.cloudfront.net/storefronts/globalrewards/accelerator/master/tokens/${currentLanguage}.json`;
    let pageContentEndpoint = `https://bgwp-010.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-whitelabel-Site/default/buy-Serialize`;

    if(window) {
      const params = new URLSearchParams(document.location.search);
      let override = params.get('pts-cc-content');
      if(override) {
        pageContentEndpoint = override;
      }
    }

    fetch(translationsEndpoint)
      .then((res) => res.json())
      .then((response) => {
        setTokens(response);
      }).finally(() => {
      })

    // This is hideous as I am faking a slow response to show the loading screen...
    fetch(pageContentEndpoint)
      .then((res) => res.json())
      .then((pageContent) => {
        setPageContent(pageContent);

        // Force a timeout for loading...
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      }).catch((error) => {
        console.log({error});
        alert(`Failed to load data from content endpoint: ${pageContentEndpoint}`);
        setLoading(false);
    });

  }, [currentLanguage])

  // Remember this is related to the model in StorefrontContext.tsx
  // The "StorefrontContextModel"
  const configuration = {
    language: {
      current: currentLanguage,
      change: changeLanguage,
      tokens,
      available: ['ar-QA', 'en-GB', 'en-US']
    },
    loading: {
      isLoading,
      setLoading
    },
    order: {
      selectedIncrement: 0,
      update: () => console.log('Update called')
    }
  }

  const order = {
    selectedIncrement,
    update: setSelectedIncrement,
  }

  // @ts-ignore
  return <StorefrontContext.Provider value={{ configuration, order, pageContent }}>
    { children }
  </StorefrontContext.Provider>;
}
