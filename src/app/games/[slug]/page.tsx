"use client";

import { notFound } from "next/navigation";
import { games, getGameBySlug } from "@/lib/games";
import { useRouter } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default function GameDetailPage({ params }: Props) {
  const router = useRouter();
  const game = getGameBySlug(params.slug);

  if (!game) {
    return notFound();
  }

  const suggestions = games.filter((g) => g.slug !== game.slug).slice(0, 3);

  return (
    <div style={{ display: "grid", gap: "1.5rem", marginTop: "1.25rem" }}>
      <div className="card" style={{ display: "grid", gap: "1.5rem", padding: "1.25rem" }}>

        {/* IMAGEN */}
        <div style={{ borderRadius: "0.9rem", overflow: "hidden", border: "1px solid rgba(31,41,55,0.9)" }}>
          <img
            src={game.coverImage}
            alt={game.title}
            style={{ width: "100%", maxHeight: 420, objectFit: "cover" }}
          />
        </div>

        {/* INFO */}
        <div>
          <h1 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.4rem" }}>
            {game.title}
          </h1>

          <p style={{ fontSize: "0.9rem", color: "#9ca3af", maxWidth: "40rem" }}>
            Esta ficha de juego utiliza exclusivamente tus recursos de imagen.
            Todavía no hay descripción ni precio reales porque no queremos inventar
            información. Cuando conectes tu API o Strapi, esta sección podrá mostrar
            los datos verdaderos.
          </p>

          {/* 🔥 BOTÓN VOLVER ABAJO DERECHA */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
            <button
              type="button"
              className="button-ghost"
              onClick={() => router.push("/")}
            >
              ← Volver
            </button>
          </div>
        </div>

      </div>

      {/* SUGERENCIAS */}
      {suggestions.length > 0 && (
        <section>
          <div className="section-header">
            <h2 className="section-title">También te puede interesar</h2>
            <p className="section-subtitle">Otros juegos de tu catálogo.</p>
          </div>

          <div className="grid-games">
            {suggestions.map((g) => (
              <article
                key={g.slug}
                className="card card-hover"
                onClick={() => router.push(`/games/${g.slug}`)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={g.coverImage}
                  alt={g.title}
                  style={{ width: "100%", height: 160, objectFit: "cover" }}
                />
                <div style={{ padding: "0.75rem 0.8rem 0.9rem" }}>
                  <h3 style={{ fontSize: "0.85rem", fontWeight: 600 }}>{g.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
