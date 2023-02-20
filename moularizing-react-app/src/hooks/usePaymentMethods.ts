import PaymentMethod from "../models/PaymentMethod";
import { useEffect, useState } from "react";

const payInCash = new PaymentMethod({ name: "cash" });

const convertPaymentMethods = (methods: RemotePaymentMethod[]) => {
  if (methods.length === 0) {
    return [];
  }

  const extended: PaymentMethod[] = methods.map(
    (method) => new PaymentMethod(method)
  );
  extended.push(payInCash);

  return extended;
};

const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>(
    []
  );

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const url = "https://online-ordering.com/api/payment-methods";

      const response = await fetch(url);
      const methods: RemotePaymentMethod[] = await response.json();

      const extended = convertPaymentMethods(methods);
      setPaymentMethods(extended);
    };

    fetchPaymentMethods();
  }, []);

  return {
    paymentMethods,
  };
};

export default usePaymentMethods;
