import { NextResponse } from "next/server";
import { fetchCurrencies, fetchLatestRates } from "@lib/currencyService";

export async function GET() {
  try {
    const currencies = await fetchCurrencies();
    const latestRates = await fetchLatestRates();
    const result = { ...latestRates, currencies: Object.fromEntries(currencies) };
    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    const error = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ message: "Failed to fetch latest rates", error }, { status: 500 });
  }
}
