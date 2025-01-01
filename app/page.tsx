import LatestRates from "./LatestRates";

export default function Home() {
  return (
    <div className="w-full overflow-hidden md:flex min-h-dvh max-h-dvh">
      <div className="flex justify-center p-3 w-fit md:[writing-mode:vertical-lr]">
        <h1 className="text-5xl font-bold tracking-widest md:rotate-180 md:transform">currex</h1>
      </div>
      <div className="w-full p-3 md:ps-0">
        <LatestRates />
      </div>
    </div>
  );
}
