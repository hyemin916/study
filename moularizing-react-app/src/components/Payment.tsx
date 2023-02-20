import React from "react";
import usePaymentMethods from "../hooks/usePaymentMethods";
import { PaymentMethods } from "./PaymentMethods";
import useRoundUp from "../hooks/useRoundUpt";

const formatCheckboxLabel = (agreeToDonate: boolean, tip: number) =>
  agreeToDonate
    ? "Thanks for your donation."
    : `I would like to donate $${tip} to charity.`;

const Payment = ({ amount }: { amount: number }) => {
  const { paymentMethods } = usePaymentMethods();

  const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(amount);

  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods paymentMethods={paymentMethods} />
      <div>
        <label>
          <input
            type="checkbox"
            onChange={updateAgreeToDonate}
            checked={agreeToDonate}
          />
          <p>{formatCheckboxLabel(agreeToDonate, tip)}</p>
        </label>
      </div>
      <button>${total}</button>
    </div>
  );
};

export default Payment;
