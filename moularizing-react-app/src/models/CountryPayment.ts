export class CountryPayment {
  private readonly _cureencySign: string;
  private readonly algorithm: RoundUpStrategy;

  public constructor(currencySign: string, roundUpAlgorithm: RoundUpStrategy) {
    this._cureencySign = currencySign;
    this.algorithm = roundUpAlgorithm;
  }

  get currencySign(): string {
    return this._cureencySign;
  }

  getRoundUpAmount = (amount: number): number => {
    return this.algorithm(amount);
  };

  getTip(amount: number): number {
    return calculateTipForm(this.getRoundUpAmount(amount));
  }
}
