import { NextResponse } from "next/server";
import { OPEN_EXCHANGE_RATES } from "@constants/endpoints";
import { cache } from "@lib/cache";
import { ExchangeRateData } from "@lib/types";

const APP_ID = process.env.OPEN_EXCHANGE_RATES_APP_ID;

export async function GET() {
  try {
    const cachedLatestRates = cache.getLatestRates();
    if (cachedLatestRates && Date.now() - cachedLatestRates.timestamp < 3600000) {
      return new Response(JSON.stringify(cachedLatestRates), { status: 200 });
    }
    const response = await fetch(`${OPEN_EXCHANGE_RATES.LATEST}?app_id=${APP_ID}`);
    if (!response.ok) throw new Error("Failed to fetch latest exchange rates");
    const rateData: ExchangeRateData = await response.json();
    const { base, rates, timestamp } = rateData;
    const filteredRateData: ExchangeRateData = { base, rates, timestamp };
    cache.setLatestRates(filteredRateData);
    return NextResponse.json(filteredRateData, { status: 200 });
  } catch (err) {
    const error = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ message: "Failed to fetch latest rates", error }, { status: 500 });
  }
}
