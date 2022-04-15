import {Wrapper} from "../../utils/Wrapper";
import Token from "../../utils/Token";
import {useContext} from "react";
import StorefrontContext from "../../../context/StorefrontContext";

const IncrementSelector = () => {

  const { order }  = useContext(StorefrontContext);

  // @ts-ignore I am not sure why the functions are annoying TS
  const { update, selectedIncrement } = order;

  const pricePerMile = .04;
  const blockSize = 1000;
  const exampleTiers = 25;

  const tiers = [];

  for (let i = 0; i < exampleTiers; i++) {
    let tierMiles = i * blockSize;
    tiers.push({
      currency: tierMiles,
      price: Math.round(pricePerMile * tierMiles)
    });
  }

  return (
    <Wrapper style={{ border: '5px solid #EEF2F5', padding: '1rem' }}>
      <div>
        <span style={{ marginRight: '.5rem' }}>Select currency:</span>
        <select value={selectedIncrement} onChange={(elem) => update(elem.target.value)}>
          { tiers.map((tier) => {
            return <option key={tier.currency} value={tier.currency}>
              Buy { tier.currency } <Token noSpan token={'lp.currency.name'} /> for ${ tier.price }
            </option>
          }) }
        </select>
      </div>
    </Wrapper>
  )
}

export default IncrementSelector;
