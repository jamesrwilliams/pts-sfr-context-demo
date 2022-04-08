import Header from "./Header";
import PaymentForm from "./PaymentForm";
import Footer from "./Footer";
import React from "react";
import MarketingBlock from "./MarketingBlock";
import IncrementSelector from "./IncrementSelector";
import OrderSummary from "./OrderSummary";
import {Wrapper} from "./utils/Wrapper";

const Storefront = () => {
  return (
    <main className={'storefront'}>
      <Header />
      <MarketingBlock />
      <IncrementSelector />
      <Wrapper style={{ display: 'flex', flexBasis: '50%' }}>
        <PaymentForm />
        <OrderSummary />
      </Wrapper>
      <Footer />
    </main>
  )
}

export default Storefront;
