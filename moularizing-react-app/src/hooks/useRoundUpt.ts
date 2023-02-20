import { useState } from "react";

const useRoundUp = (amount: number) => {
  const [agreeToDonate, setAgreeToDonate] = useState<boolean>(false);

  const total = agreeToDonate ? Math.floor(amount + 1) : amount;
  const tip = parseFloat((Math.floor(amount + 1) - amount).toPrecision(10));

  const updateAgreeToDonate = () =>
    setAgreeToDonate((agreeToDonate) => !agreeToDonate);

  return { total, tip, agreeToDonate, updateAgreeToDonate };
};

export default useRoundUp;
