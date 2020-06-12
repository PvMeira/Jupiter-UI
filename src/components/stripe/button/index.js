import React from "react";
import StripeCheckout from "react-stripe-checkout";

const CheckOutButton = ({ price }) => {
  const formatedPrice = price * 100;
  const publishableKey =
    "pk_test_51Gt6GHDxfk3TYdcL3zVzuYCdtIOvOJhFlXYpf62WH2MqFLE36aIrbU1H0960DtnWU6KJF3gBI3yqYbjLHBo7d1Je00nyt36AJC";

  const onTokenResponse = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Jupiter-ui-payment'
      billingAddress
      shippingAddress
      image='https://img.icons8.com/dusk/64/000000/open-source.png'
      description={`Your total  is $ ${price}`}
      amount={formatedPrice}
      panelLabel='Pay Now'
      token={onTokenResponse}
      stripeKey={publishableKey}
    />
  );
};

export default CheckOutButton;
