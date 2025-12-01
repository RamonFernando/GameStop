"use client";

import { use, useState } from "react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import { useSearch } from "@/contexts/SearchContext";

const PLATFORMS = ["PlayStation", "Xbox", "Nintendo", "PC"];

export function Header() {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);
  const { query, setQuery } = useSearch();
  const [localSearch, setLocalSearch] = useState(""); // For future use

  return (
    <header className="header-shell">
      <div className="navbar">

        {/* LOGO */}
        <Link href="/" className="nav-logo">
          <div className="nav-logo-mark">
            <span>GAMING</span>
          </div>
          <div className="nav-logo-text">
            <span className="nav-logo-text-1">Digital store</span>
            <span className="nav-logo-text-2">GameStop Edition</span>
          </div>
        </Link>

        {/* PLATAFORMAS */}
        <nav className="nav-platforms" aria-label="Plataformas">
          {PLATFORMS.map((platform) => (
            <button
              key={platform}
              type="button"
              className="nav-platform-pill"
            >
              {platform}
            </button>
          ))}
        </nav>

        {/* ACCIONES DERECHA */}
        <div className="nav-actions">
          
          {/* BUSCADOR */}
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Buscar..."
              className="nav-search-input"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.currentTarget.blur();
                  setQuery("");
                }
              }}
            />
          </div>

          {/* CARRITO */}
          <button
            type="button"
            className="button-primary button-ghost"
            onClick={() => setOpen(true)}
          >
            <img
              src="/iconos_platforms/carritoCompra.svg"
              alt="Carrito"
              className="nav-cart-icon"
            />
            <span className="nav-cart-badge">{totalItems}</span>
          </button>
        </div>
      </div>

      {open && <CartDrawer onClose={() => setOpen(false)} />}
    </header>
  );
}
