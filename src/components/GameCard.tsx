"use client";

import Link from "next/link";
import type { Game } from "@/lib/games";
import { slugify } from "@/lib/games";
import { useCart } from "@/contexts/CartContext";

type Props = {
  game: Game;
};

export function GameCard({ game }: Props) {
  const { addToCart } = useCart();
  const slug = slugify(game.title);

  return (
    <article className="card card-hover">
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={game.coverImage}
          alt={game.title}
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
          }}
        />
      </div>
      <div style={{ padding: "0.25rem 0.65rem 0.65rem 0.65rem", display: "flex", flexDirection: "column", gap: "0.10rem" }}>
        <h3
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            display: "-webkit-box",
            WebkitLineClamp: 2,       // máximo 2 líneas
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "2.5rem",
          }}
        >
          {game.title}
        </h3>
        <div style={{ fontSize: "0.95rem", fontWeight: 600, paddingLeft: "0.25rem", paddingBottom: "0.4rem" }}>
          {game.price.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem", alignItems: "center" }}>
          <Link
            href={`/games/${slug}`}
            className="button-ghost"
            style={{ fontSize: "0.65rem" }}
          >
            Ver detalles
          </Link>
          <button
            type="button"
            className="button-primary"
            style={{ fontSize: "0.65rem" }}
            onClick={() => addToCart(game)}
          >
            Añadir
          </button>
        </div>
      </div>
    </article>
  );
}