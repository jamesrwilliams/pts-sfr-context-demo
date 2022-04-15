import React, {useContext} from "react";
import storefrontContext from "../context/StorefrontContext";
import LoadingSpinner from "./utils/LoadingSpinner";
import PageBuilder from "./PageBuilder";

const Storefront = () => {

  const context = useContext(storefrontContext);

  if(context?.configuration?.loading.isLoading) {
    return <LoadingSpinner />
  }

  return <PageBuilder pageData={context.pageContent} />
}

export default Storefront;
