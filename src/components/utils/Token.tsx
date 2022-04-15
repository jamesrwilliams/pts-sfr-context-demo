import {useContext} from "react";
import StorefrontContext from "../../context/StorefrontContext";

const Token = ({token, noSpan = false}: { token: string; noSpan?: boolean }) => {

  // @ts-ignore
  const { configuration } = useContext(StorefrontContext);

  // @ts-ignore
  const { language: { tokens } } = configuration;

  if(tokens[token]) {
    return  noSpan ? tokens[token] : <span>{ tokens[token] }</span>
  } else {
    return <>Missing token: { token }</>
  }
}

export default Token;
