export type ExchangeRateData = {
  base: string;
  rates: Record<string, number>;
  timestamp: number;
};
