import React, {useContext} from "react";
import storefrontContext from "../context/StorefrontContext";
import LoadingSpinner from "./utils/LoadingSpinner";
import PageBuilder from "./PageBuilder";

const Storefront = () => {

  const context = useContext(storefrontContext);

  if(context?.configuration?.loading.isLoading) {
    return <LoadingSpinner />
  }

  // @ts-ignore
  window.storefront = {
    version: '0.0.0',
    languages: {
      current: context.configuration?.language.current,
      set: (newLang: string) => {
        return context.configuration?.language.available.includes(newLang)
            ? context.configuration?.language.change(newLang)
            : 'not available'
      },
      available: context.configuration?.language.available,
    }
  }

  return <PageBuilder pageData={context.pageContent} />
}

export default Storefront;
