"use client";

import { use, useState } from "react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import { useSearch } from "@/contexts/SearchContext";

const PLATFORMS = [
  "PlayStation",
  "Xbox",
  "Nintendo",
  "PC"
];

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
  {PLATFORMS.map((platform) => {
    const iconMap: Record<string, string> = {
      PlayStation: "/iconos_platforms/icon-play.svg",
      Xbox: "/iconos_platforms/icon-xbx.svg",
      Nintendo: "/iconos_platforms/icon-swt.svg",
      PC: "/iconos_platforms/icon-pc.svg"
    };

    return (
      <button
        key={platform}
        type="button"
        className="nav-platform-pill nav-platform-with-icon"
      >
        <img
          src={iconMap[platform]}
          alt={platform}
          className="nav-platform-icon"
        />
        <span className="nav-platform-text">{platform}</span>
      </button>
    );
  })}
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
           {/* LOGIN / REGISTRO */}
          <Link
            href="/auth"
            className=""
          >
            {/*Login / Registro // nav-cart-icon*/}
            <img
              src="/iconos_platforms/person_avatar_white.svg"
              alt="avatar"
              className="nav-auth-icon"
            />
          </Link>

        </div>
      </div>

      {open && <CartDrawer onClose={() => setOpen(false)} />}
    </header>
  );
}
