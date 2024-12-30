export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh space-y-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl text-blue-500">currex</h1>
      <p>
        simple app to display <span className="italic text-blue-500">currency exchange</span> rates
      </p>
    </div>
  );
}
