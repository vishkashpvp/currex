import { ExchangeRateData } from "./types";

class InMemoryDB {
  private currencies: Map<string, string> = new Map();
  private latestRates: ExchangeRateData | undefined;

  setCurrencies(data: Map<string, string>) {
    this.currencies = data;
  }

  getCurrencies(): Map<string, string> {
    return this.currencies;
  }

  getLatestRates(): ExchangeRateData | undefined {
    return this.latestRates;
  }

  setLatestRates(data: ExchangeRateData) {
    this.latestRates = data;
  }
}

export const cache = new InMemoryDB();
