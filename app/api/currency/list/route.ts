import { NextResponse } from "next/server";
import { OPEN_EXCHANGE_RATES } from "@constants/endpoints";
import { cache } from "@lib/cache";

export async function GET() {
  try {
    const currencies = cache.getCurrencies();
    if (currencies.size !== 0) {
      return NextResponse.json(Object.fromEntries(currencies), { status: 200 });
    }
    const response = await fetch(OPEN_EXCHANGE_RATES.CURRENCY_LIST);
    const data: Record<string, string> = await response.json();
    cache.setCurrencies(new Map(Object.entries(data)));
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    const error = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ message: "Failed to fetch currencies", error }, { status: 500 });
  }
}
