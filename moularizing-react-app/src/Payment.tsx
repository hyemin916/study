import React, { useEffect, useState } from "react";

const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>(
    []
  );

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const url = "https://online-ordering.com/api/payment-methods";

      const response = await fetch(url);
      const methods: RemotePaymentMethod[] = await response.json();

      if (methods.length > 0) {
        const extended: LocalPaymentMethod[] = methods.map((method) => ({
          provider: method.name,
          label: `Pay with ${method.name}`,
        }));
        extended.push({ provider: "cash", label: "Pay in cashs" });
        setPaymentMethods(extended);
      } else {
        setPaymentMethods([]);
      }
    };

    fetchPaymentMethods();
  }, []);

  return {
    paymentMethods,
  };
};

const Payment = ({ amount }: { amount: number }) => {
  const { paymentMethods } = usePaymentMethods();

  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods paymentMethods={paymentMethods} />
      <button>${amount}</button>
    </div>
  );
};

export default Payment;

const PaymentMethods = ({
  paymentMethods,
}: {
  paymentMethods: LocalPaymentMethod[];
}) => (
  <div>
    {paymentMethods.map((method) => (
      <label key={method.provider}>
        <input
          type="radio"
          name="payment"
          value={method.provider}
          defaultChecked={method.provider === "cash"}
        />
        <span>{method.label}</span>
      </label>
    ))}
  </div>
);
