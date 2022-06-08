import styled from "styled-components";
import Debug from "../temp/Debug";
import {Wrapper} from "../utils/Wrapper";
import Token from "../utils/Token";

const MainElement = styled.section`
  font-size: 2rem;
`;

// TODO: Replace this `any` with a model once we know what data would come back for this "block".
const MainBlock = ({data}: any) => (
  <MainElement id={'main'}>
    <Wrapper>
      <div><Token token={'hero.heading'} /></div>
      <Debug title={'MainBlock data'} data={data} />
    </Wrapper>
  </MainElement>
)

export default MainBlock;
