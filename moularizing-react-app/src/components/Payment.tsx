import React, { useState } from "react";
import usePaymentMethods from "../hooks/usePaymentMethods";
import { PaymentMethods } from "./PaymentMethods";

const Payment = ({ amount }: { amount: number }) => {
  const { paymentMethods } = usePaymentMethods();
  const [agreeToDonate, setAgreeToDonate] = useState<boolean>(false);

  const { total, tip } = {
    total: agreeToDonate ? Math.floor(amount + 1) : amount,
    tip: parseFloat((Math.floor(amount + 1) - amount).toPrecision(10)),
  };

  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods paymentMethods={paymentMethods} />
      <button>${amount}</button>
    </div>
  );
};

export default Payment;
