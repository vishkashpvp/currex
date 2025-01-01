"use client";

import { useEffect, useState } from "react";
import { fetchLatestCurrencyRates } from "@utils/api";

export default function LatestRates() {
  const [latestRates, setLatestRates] = useState<Record<string, number> | null>(null);
  const [timestamp, setTimestamp] = useState<Date>(new Date());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRates = async () => {
      try {
        const data = await fetchLatestCurrencyRates();
        setLatestRates(data.rates);
        setTimestamp(new Date(data.timestamp * 1000));
      } catch (err) {
        console.error("Error fetching latestRates:", err);
      } finally {
        setLoading(false);
      }
    };

    getRates();
  }, []);

  return (
    <div>
      <p className="mb-3 text-sm italic text-gray-500 dark:text-slate-200">
        last fetched at {timestamp.toUTCString()}
      </p>
      {loading ? (
        <p>Loading...</p>
      ) : latestRates ? (
        <div className="overflow-y-auto min-h-96 max-h-[80dvh] md:max-h-[90dvh]">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 z-10 bg-blue-200 dark:bg-blue-800">
              <tr>
                <th className="px-4 py-2 border border-[--foreground] dark:border-[hsla(0,0%,.25)]">
                  Currency
                </th>
                <th className="px-4 py-2 border border-[--foreground] dark:border-[hsla(0,0%,.25)]">
                  Rate (USD Base)
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(latestRates).map(([currency, rate]) => (
                <tr key={currency}>
                  <td className="px-4 py-2 border border-[--foreground] dark:border-[hsla(0,0%,.25)]">
                    {currency}
                  </td>
                  <td className="px-4 py-2 border border-[--foreground] dark:border-[hsla(0,0%,.25)]">
                    {rate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No latest rates available.</p>
      )}
    </div>
  );
}
