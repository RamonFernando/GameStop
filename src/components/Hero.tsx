"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { games } from "@/lib/games";


type Slide = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  discount: string;
  image: string;
  badge?: string;
};

const SLIDES: Slide[] = [
  {
    id: "hogwarts-legacy",
    title: "Hogwarts Legacy",
    subtitle: "Hace 2 días · Acción RPG · Mundo abierto",
    price: "56,99€",
    discount: "-24%",
    image: "/games_data/Hogwarts Legacy/hogwarts-legacy-wallpaper.jpg",
    badge: "Oferta destacada",
  },
  {
    id: "god-of-war-ragnarok",
    title: "God of War: Ragnarök",
    subtitle: "Nuevo contenido · Aventura · PlayStation",
    price: "22,05€",
    discount: "-37%",
    image: "/games_data/God of War - Ragnarok/god-of-war-ragnarok-ps5-wallpaper.jpg",
    badge: "Lo más jugado",
  },
  {
    id: "forspoken",
    title: "Forspoken",
    subtitle: "Magia · Parkour · Historia cinematográfica",
    price: "21,75€",
    discount: "-32%",
    image: "/games_data/Forspoken/forspoken-wallpaper.jpg",
    badge: "Nuevos lanzamientos",
  },
];

const AUTO_DELAY_MS = 7000;

export function Hero() {
  const { addToCart } = useCart();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDES.length);
    }, AUTO_DELAY_MS);
    return () => window.clearInterval(timer);
  }, []);

  const active = SLIDES[activeIndex];

  const activeGame = useMemo(
    () => games.find((game) => game.title === active.title),
    [active.title]
  );

  const handleAddToCart = () => {
    if (!activeGame) return;
    addToCart(activeGame);
  };

  return (
    <section className="hero hero--carousel">
      {/* Background */}
      <div className="hero-bg">
        <Image
          src={active.image}
          alt={active.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="hero-bg-gradient" />
      </div>

      {/* Content */}
      <div className="hero-inner">
        <div className="hero-main">
          {active.badge && <span className="badge-soft">{active.badge}</span>}

          <h1 className="hero-title">{active.title}</h1>

          <p className="hero-subtitle">{active.subtitle}</p>

          <div className="hero-meta-row">
            <div className="hero-price-box">
              <span className="hero-discount">{active.discount}</span>
              <span className="hero-price">{active.price}</span>
            </div>
            
            <button
              type="button"
              className="button-primary hero-cta"
              onClick={() => activeGame && addToCart(activeGame)}
              disabled={!activeGame}
            >
              Añadir al carrito
            </button>

          </div>

          <p className="hero-subcopy">
            Desliza entre los últimos lanzamientos y prepara tu catálogo gaming.
            <br />
            ¡No te lo pierdas!
          </p>
        </div>

        {/* Mini carrusel de últimos lanzamientos */}
        <div className="hero-thumbs-wrapper">
          <div className="hero-thumbs-header">
            <h2 className="section-title">Últimos lanzamientos</h2>
            {/* <p className="section-subtitle">Explora juegos recientes de tu catálogo.</p> */}
          </div>

          <div className="hero-thumbs-row">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={
                  "hero-thumb" + (index === activeIndex ? " hero-thumb--active" : "")
                }
                onClick={() => setActiveIndex(index)}
              >
                <div className="hero-thumb-image">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="160px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="hero-thumb-info">
                  <div className="hero-thumb-title">{slide.title}</div>
                  <div className="hero-thumb-meta">
                    <span>{slide.price}</span>
                    <span className="hero-thumb-discount">{slide.discount}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
