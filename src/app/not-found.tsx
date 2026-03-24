import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center px-6"
      style={{ minHeight: "60vh" }}
    >
      <p
        className="uppercase mb-2"
        style={{
          fontFamily: "var(--font-accent)",
          fontSize: "var(--text-overline)",
          letterSpacing: "var(--tracking-widest)",
          color: "var(--color-daun)",
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-h1)",
          fontWeight: 600,
          color: "var(--color-kecap)",
          marginBottom: "var(--space-sm)",
        }}
      >
        Pagina niet gevonden
      </h1>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-body-lg)",
          color: "var(--color-kecap)",
          opacity: 0.7,
          marginBottom: "var(--space-md)",
        }}
      >
        Deze pagina bestaat niet of is verplaatst.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 rounded-sm font-bold uppercase tracking-wider transition-all"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-body-sm)",
          backgroundColor: "var(--color-bandung-red)",
          color: "var(--color-rice)",
          letterSpacing: "var(--tracking-wider)",
        }}
      >
        Terug naar home
      </Link>
    </section>
  );
}
