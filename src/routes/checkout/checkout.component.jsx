import { useSelector } from "react-redux";
import "../../components/payment-form/payment-form.css";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";
import { useCallback, useState } from "react";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const [modalOpen, setModalOpen] = useState(false);

  const onPayNowClicked = useCallback(() => {
    setModalOpen(true);
  }, [setModalOpen]);

  const onOverlayClicked = useCallback(() => {
    setModalOpen(false);
  }, [setModalOpen]);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>

      <input type="button" className="purchase--btn" value="Pay Now" onClick={onPayNowClicked} />

      {modalOpen && <PaymentForm onOverlayClicked={onOverlayClicked} />}
    </CheckoutContainer>
  );
};

export default Checkout;
