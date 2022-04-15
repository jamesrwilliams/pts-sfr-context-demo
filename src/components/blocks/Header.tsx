import React, {useContext} from "react";
import storefrontContext from "../../context/StorefrontContext";
import styled from "styled-components";
import {Wrapper} from "../utils/Wrapper";
import Debug from "../temp/Debug";

const HeaderElement = styled.header`
  background: #001E59;
  margin-bottom: 1rem;
`

// TODO: Replace this `any` with a model once we know what data would come back for this "block".
const Header = ({ data }: any) => {

  // For some reason the payload is an array of objects?
  // Probably should move this logic to the Slicer, so we're only exposing the props we want...
  const meta = data[0].data;

  // TODO: Work out why TS is mad at this. I think there is something wrong with how I am
  //  initializing the `storefrontContext`.
  // @ts-ignore
  const { configuration: { language } } = useContext(storefrontContext);

  return <HeaderElement id={'header'}>
    <Wrapper style={{ display: 'flex', padding: '1rem 0' }}>
      <img
        alt={meta.alt}
        title={meta.alt}
        src={'https://dz57b37czzuk6.cloudfront.net/storefronts/globalrewards/accelerator/master/static/images/logo_global-rewards.svg'} />
      <span style={{ flexGrow: 1 }} />
      <select value={language.current} onChange={(val) => language.change(val.target.value)}>
        { language.available.map((option: string) => (
          <option key={option} value={option}>{ option }</option>
        )) }
      </select>
    </Wrapper>
    <Wrapper>
      <Debug title={'Data from SFCC'} data={data} />
    </Wrapper>
  </HeaderElement>
}

export default Header;
