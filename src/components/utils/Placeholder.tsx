import styled from "styled-components";

const PlaceholderElement = styled.div`
  background: #EEF2F5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3vw;
  font-weight: bold;
`;


const Placeholder = ({ title, ...props } : any) => {
  return <PlaceholderElement {...props}><span>{ title }</span></PlaceholderElement>
}

export default Placeholder;
