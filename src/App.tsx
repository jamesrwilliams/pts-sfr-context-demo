import React, {useState} from 'react';
import { StorefrontContextProvider } from "./context/StorefrontContextProvider";
import Storefront from "./components/Storefront";
import BannerMessage from "./components/temp/BannerMessage";

const App = () => {

  // NOTE: This is for demo purposes only...
  const [bannerVisible, setBannerVisible] = useState(true);
  const banner = <BannerMessage>
    <span>
      <a target={'_blank'} rel={"noreferrer"} href="https://github.com/jamesrwilliams/pts-sfr-context-demo">
        View on GitHub
      </a>
    </span>
    <span>🚀 This is a page built using live data from SFCC... 👀</span>
    <button onClick={() => setBannerVisible(false)}></button>
  </BannerMessage>

  return (
    <StorefrontContextProvider>
      { bannerVisible ? banner : <></> }
      <Storefront />
    </StorefrontContextProvider>
  );
}

export default App;
