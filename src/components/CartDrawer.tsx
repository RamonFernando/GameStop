"use client";

import Image from "next/image";
import { useCart } from "@/contexts/CartContext";

type Props = {
  onClose: () => void;
};

export function CartDrawer({ onClose }: Props) {
  const {
    items,
    totalItems,
    addToCart,
    decreaseFromCart,
    removeFromCart,
    clearCart,
  } = useCart();

  const hasItems = items.length > 0;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.game.price * item.quantity,
    0
  );

  return (
    <div className="cart-drawer-backdrop" onClick={onClose}>
      <aside
        className="cart-drawer"
        onClick={(event) => event.stopPropagation()}
      >
        {/* NUEVO CONTENEDOR INTERNO */}
        <div className="cart-drawer-inner">

          {/* HEADER */}
          <header className="cart-drawer-header">
            <h2 className="cart-title" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <img
                  src="/iconos_platforms/carritoCompra.svg" 
                  alt="Carrito"
                  className="cart-title-icon nav-cart-icon"
                /> Tu carrito
              </h2>

            <button type="button" className="button-ghost" onClick={onClose}>
              Cerrar
            </button>
          </header>

          {/* BODY */}
          <div className="cart-drawer-body">
            {!hasItems && (
              <p style={{ fontSize: "0.85rem", color: "var(--text-soft)" }}>
                Todavía no has añadido ningún juego. Busca tu título favorito y
                pulsa <strong>“Añadir”</strong> para verlo aquí.
              </p>
            )}

            {hasItems &&
              items.map((item) => (
                <div key={item.slug} className="cart-item">
                  <div
                    style={{
                      position: "relative",
                      width: 64,
                      height: 64,
                      borderRadius: 12,
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={item.game.coverImage}
                      alt={item.game.title}
                      fill
                      sizes="64px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div className="cart-item-info">
                    <div className="cart-item-title">{item.game.title}</div>

                    <div className="cart-item-actions">
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                        }}
                      >
                        <button
                          type="button"
                          className="button-ghost"
                          style={{ paddingInline: "0.55rem" }}
                          onClick={() => decreaseFromCart(item.slug)}
                        >
                          −
                        </button>

                        <span style={{ minWidth: 20, textAlign: "center" }}>
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          className="button-primary"
                          style={{ paddingInline: "0.55rem" }}
                          onClick={() => addToCart(item.game)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        className="button-ghost"
                        onClick={() => removeFromCart(item.slug)}
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* FOOTER */}
          {/* cart-drawer-footer */}
          <div className="cart-drawer-footer">
            <div className="cart-drawer-summary">
              <strong>Resumen</strong>
              <div>Total de juegos: {totalItems}</div>

              <div>
                Total:{" "}
                {totalAmount.toLocaleString("es-ES", {
                  style: "currency",
                  currency: "EUR",
                })}
              </div>
            </div>

            <div className="button-group cart-drawer-footer-button">
              {/* Botón principal: PAGAR */}
            <button
              type="button"
              className="button-primary"
              disabled={!hasItems}
              onClick={() => console.log("Ir al checkout")}
              style={{ width: "100%", justifyContent: "center" }}
            >
              Pagar ahora
            </button>

            {/* Botón secundario: VACIAR */}
            <button
              type="button"
              className="button-ghost"
              onClick={clearCart}
              style={{ width: "100%", justifyContent: "center" }}
            >
              Vaciar carrito
            </button>
            </div>
          </div>
        </div> {/* cart-drawer-inner */}
      
      </aside>
    </div>
  );
}
