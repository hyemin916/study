import React from "react";
import usePaymentMethods from "../hooks/usePaymentMethods";
import { PaymentMethods } from "./PaymentMethods";
import useRoundUp from "../hooks/useRoundUp";
import { DonationCheckbox } from "./DonationCheckbox";
import { PaymentStrategy } from "../models/PaymentStrategy";
import { CountryPayment } from "../models/CountryPayment";

const formatCheckboxLabel = (
  agreeToDonate: boolean,
  tip: number,
  strategy: CountryPayment
) =>
  agreeToDonate
    ? "Thanks for your donation."
    : `I would like to donate ${strategy.currencySign}${tip} to charity.`;

const Payment = ({
  amount,
  strategy = new PaymentStrategy("$", roundtUpNearestInteger),
}: {
  amount: number;
  stragegy?: PaymentStrategy;
}) => {
  const { paymentMethods } = usePaymentMethods();

  const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(
    amount,
    strategy
  );

  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods paymentMethods={paymentMethods} />
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        content={formatCheckboxLabel(agreeToDonate, tip, strategy)}
      />
      <button>${formatButtonLabel(strategy, total)}</button>
    </div>
  );
};

export default Payment;
