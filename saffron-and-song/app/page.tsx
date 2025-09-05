import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 text-center">
      <p>Redirecting…</p>
      <noscript>
        <Link href="/en">Go to English site</Link>
      </noscript>
    </div>
  );
}
