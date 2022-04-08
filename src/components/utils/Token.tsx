import {useContext} from "react";
import StorefrontContext from "../../context/StorefrontContext";

const Token = ({token}: { token: string; }) => {

  // @ts-ignore
  const { configuration } = useContext(StorefrontContext);

  // @ts-ignore
  const { language: { tokens } } = configuration;

  if(tokens[token]) {
    return <span>{ tokens[token] }</span>
  } else {
    return <><mark title={'MISSING TOKEN'}><code>{ token }</code></mark></>
  }
}

export default Token;
