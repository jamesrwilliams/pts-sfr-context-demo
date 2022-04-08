import Token from "./utils/Token";
import {Wrapper} from "./utils/Wrapper";
import Placeholder from "./utils/Placeholder";

const MarketingBlock = () => {
  return (
    <Wrapper>
      <Placeholder style={{ height: '250px' }} title={'Marketing Block'} />
      <p style={{ fontSize: '18px' }}><Token token={'hero.description'} /></p>
    </Wrapper>
  )
}

export default MarketingBlock;
