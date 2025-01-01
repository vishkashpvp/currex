export async function fetchCurrencyList() {
  const response = await fetch("/api/currency/list");
  if (!response.ok) throw new Error("Failed to fetch currency list");
  return response.json();
}

export async function fetchLatestCurrencyRates() {
  const response = await fetch("/api/rates/latest");
  if (!response.ok) throw new Error("Failed to fetch latest rates");
  return response.json();
}
