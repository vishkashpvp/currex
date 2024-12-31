export default function Home() {
  return (
    <div className="w-full md:flex min-h-dvh max-h-dvh">
      <div className="flex justify-center p-3 w-fit md:[writing-mode:vertical-lr]">
        <h1 className="text-5xl font-bold tracking-widest md:rotate-180 md:transform">currex</h1>
      </div>
      <div className="md:w-full m-3 p-3 mt-0 md:ms-0 md:mt-3 rounded border border-[--foreground] dark:border-[hsla(0,0%,100%,.25)]">
        <div>
          <h1 className="mb-3 text-lg font-bold">Currency Exchange Rates</h1>
          <p>
            simple app to display <span className="italic text-blue-500">currency exchange</span>{" "}
            rates
          </p>
        </div>
        <div className="mt-3 md:gap-3 md:flex">
          <div className="md:w-1/2 mb-3 md:mb-0 p-3 border rounded border-[--foreground] dark:border-[hsla(0,0%,100%,.25)]">
            widgets here...
          </div>
          <div className="md:w-1/2 p-3 border rounded border-[--foreground] dark:border-[hsla(0,0%,100%,.25)]">
            table here...
          </div>
        </div>
      </div>
    </div>
  );
}
