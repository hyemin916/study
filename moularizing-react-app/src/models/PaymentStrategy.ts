export interface PaymentStrategy {
  getRoundUpAmount: (amount: number) => number;
  getTip: (amount: number) => number;
}
