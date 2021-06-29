import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const StripeKey =
		"pk_test_51J7k5QCQQY2LRo8nYIpDbWRcs47bs0qlP0JOzvPG29yEMVfcIWmP81ZVqbV86gGlTEN9YZdgxzGHr5B6fhmqg5J000N3Dalfcx";
	const onToken = (token) => alert("Payment Successful");
	return (
		<StripeCheckout
			label="Pay Now"
			name="Crwn Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			currency="EUR"
			stripeKey={StripeKey}
		/>
	);
};

export default StripeCheckoutButton;
