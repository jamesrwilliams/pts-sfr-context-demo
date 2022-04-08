import React, {useContext} from "react";
import StorefrontContext from "../context/StorefrontContext";
import styled from "styled-components";
import {Wrapper} from "./utils/Wrapper";

const HeaderElement = styled.div`
  background: #001E59;
  margin-bottom: 1rem;
`

const Header = () => {

  const { configuration: { language } } = useContext(StorefrontContext);

  return (
    <HeaderElement>
      <Wrapper style={{ display: 'flex', padding: '1rem 0' }}>
        <img
          alt={"GlobalRewards"}
          src={'https://dz57b37czzuk6.cloudfront.net/storefronts/globalrewards/accelerator/master/static/images/logo_global-rewards.svg'} />
        <span style={{ flexGrow: 1 }} />
        <select value={language.current} onChange={(val) => language.change(val.target.value)}>
          { language.available.map((option) => (
            <option key={option} value={option}>{ option }</option>
          )) }
        </select>
      </Wrapper>
    </HeaderElement>
  )
}

export default Header;
