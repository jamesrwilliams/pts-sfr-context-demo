import {Wrapper} from "./utils/Wrapper";
import Placeholder from "./utils/Placeholder";
import Token from "./utils/Token";
import {useContext} from "react";
import storefrontContext from "../context/StorefrontContext";

const OrderSummary = () => {

  // @ts-ignore
  const { order: { selectedIncrement } } = useContext(storefrontContext);

  return (
    <section style={{ width: '50%', border: '5px solid #EEF2F5' }}>
      <h3><Token token={'payment.order-summary.heading'} /></h3>
      <table>
        <tr>
          <td><Token token={'pts-order-summary.number-of-points.label'} /></td>
          <td>{ new Intl.NumberFormat().format(selectedIncrement) }</td>
        </tr>
        <tr>
          <td><Token token={'receipt.order-details.order-date.label'} /></td>
          <td>{ new Date().toLocaleDateString() }</td>
        </tr>
      </table>
    </section>
  )
}

export default OrderSummary;
