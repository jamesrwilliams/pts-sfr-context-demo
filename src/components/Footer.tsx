import { Wrapper } from "./utils/Wrapper";
import styled from "styled-components";
import Token from "./utils/Token";

const FooterElement = styled.footer`
  background: #eee;
  padding: 1rem 0;
`;

const Footer = () => {
  return (
    <FooterElement>
      <Wrapper>
        <Token token={'footer.copyright'} />
      </Wrapper>
    </FooterElement>
  )
}

export default Footer;
