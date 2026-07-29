import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">MyOdoMeter</h1>

      <Link
        href="/logbooks"
        className="rounded-lg bg-black text-white px-4 py-3 inline-block"
      >
        My Logbooks
      </Link>
    </main>
  );
}