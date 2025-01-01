import { OPEN_EXCHANGE_RATES } from "@constants/endpoints";
import { cache } from "@lib/cache";
import { ExchangeRateData } from "@lib/types";

const CACHE_EXPIRY_TIME = 3600000;
const APP_ID = process.env.OPEN_EXCHANGE_RATES_APP_ID;

export async function fetchCurrencies(): Promise<Map<string, string>> {
  let currencies = cache.getCurrencies();
  if (!currencies || currencies.size === 0) {
    const response = await fetch(OPEN_EXCHANGE_RATES.CURRENCY_LIST);
    if (!response.ok) throw new Error("Failed to fetch currencies");
    const data: Record<string, string> = await response.json();
    currencies = new Map(Object.entries(data));
    cache.setCurrencies(currencies);
  }
  return currencies;
}

export async function fetchLatestRates(): Promise<ExchangeRateData> {
  const cachedLatestRates = cache.getLatestRates();
  if (cachedLatestRates && Date.now() - cachedLatestRates.timestamp < CACHE_EXPIRY_TIME) {
    return cachedLatestRates;
  }
  const response = await fetch(`${OPEN_EXCHANGE_RATES.LATEST}?app_id=${APP_ID}`);
  if (!response.ok) throw new Error("Failed to fetch exchange rates");
  const rateData: ExchangeRateData = await response.json();
  const { base, rates, timestamp } = rateData;
  const filteredRateData: ExchangeRateData = { base, rates, timestamp };
  cache.setLatestRates(filteredRateData);
  return filteredRateData;
}
