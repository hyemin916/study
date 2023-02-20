import React from "react";
import usePaymentMethods from "../hooks/usePaymentMethods";
import { PaymentMethods } from "./PaymentMethods";
import useRoundUp from "../hooks/useRoundUpt";
import { DonationCheckbox } from "./DonationCheckbox";

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
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        content={formatCheckboxLabel(agreeToDonate, tip)}
      />
      <button>${total}</button>
    </div>
  );
};

export default Payment;
