import { useState } from "react";
import { PaymentStrategy } from "../models/PaymentStrategy";

const useRoundUp = (amount: number, strategy: PaymentStrategy) => {
  const [agreeToDonate, setAgreeToDonate] = useState<boolean>(false);

  const total = agreeToDonate ? strategy.getRoundUpAmount(amount) : amount;
  const tip = strategy.getTip(amount);

  const updateAgreeToDonate = () =>
    setAgreeToDonate((agreeToDonate) => !agreeToDonate);

  return { total, tip, agreeToDonate, updateAgreeToDonate };
};

export default useRoundUp;
