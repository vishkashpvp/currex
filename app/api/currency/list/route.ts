import { NextResponse } from "next/server";
import { fetchCurrencies } from "@lib/currencyService";

export async function GET() {
  try {
    const currencies = await fetchCurrencies();
    return NextResponse.json(Object.fromEntries(currencies), { status: 200 });
  } catch (err) {
    const error = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ message: "Failed to fetch currencies", error }, { status: 500 });
  }
}
