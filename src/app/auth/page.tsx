"use client";

import type { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../styles/auth.scss";



// Página de acceso principal: GameStop Access
export default function LoginPage() {
  // Manejador básico del submit (de momento solo evita recarga)
const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí conectarás con tu API o sistema de autenticación real
};

return (
    // ============================
    // SECCIÓN GENERAL DE LA PÁGINA DE LOGIN
    // ============================
    <section className="auth-shell">
        {/* ============================
            CARD PRINCIPAL (usa estilos .card del proyecto)
            ============================ */}
        <div className="card card-hover auth-card">
            <div className="auth-grid">
                {/* ============================
                    COLUMNA IZQUIERDA: FORMULARIO DE ACCESO
                    ============================ */}
                <div className="auth-form-panel">
                    {/* Encabezado del login */}
                    <header className="auth-header">
                        <p className="auth-kicker">GameStop Access</p>
                        <h1 className="auth-title">Inicia sesión</h1>
                        <p className="auth-subtitle">
                        Accede a tu cuenta para seguir ampliando tu biblioteca gaming
                        dentro de la Next Gaming Store.
                        </p>
                    </header>

                    {/* Formulario de login */}
                    <form className="auth-form" onSubmit={handleSubmit}>
                    {/* Campo: nombre de usuario */}
                        <div className="auth-field">
                            <label htmlFor="name" className="auth-label">
                                Nombre de usuario
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="username"
                                className="auth-input"
                                placeholder="Tu nick gamer"
                                required
                            />
                        </div>

                        {/* Campo: email */}
                        <div className="auth-field">
                            <label htmlFor="email" className="auth-label">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="auth-input"
                                placeholder="tucorreo@ejemplo.com"
                                required
                            />
                        </div>

                        {/* Campo: contraseña + enlace de recuperación */}
                        <div className="auth-field">
                            <label htmlFor="password" className="auth-label">
                                Contraseña
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                className="auth-input"
                                placeholder="••••••••"
                                required
                            />
                            <div className="auth-field-helper">
                                <Link href="#" className="auth-link">
                                    ¿Olvidaste la contraseña?
                                </Link>
                            </div>
                    </div> {/* Fin campo contraseña */}

                    {/* Botón principal de acceso */}
                    <button type="submit" className="button-primary auth-submit">
                        Entrar
                    </button>

                    {/* Enlace alternativo para registro */}
                    <p className="auth-alt">
                        ¿Aún no tienes cuenta?{" "}
                        <Link href="#" className="auth-link">
                            Crear cuenta
                        </Link>
                    </p>

                    {/* Separador visual "o continúa con" */}
                    <div className="auth-divider">
                        <span className="auth-divider-line" />
                        <span className="auth-divider-text">o continúa con</span>
                        <span className="auth-divider-line" />
                    </div>

                    {/* Botones de proveedores sociales */}
                    <div className="auth-social-row">
                        {/* Botón Google (texto simple, sin icono de tu proyecto) */}
                        <button type="button" className="auth-social-button">
                            <span className="auth-social-icon">G</span>
                            <span>Google</span>
                        </button>

                        {/* Botón Facebook (usa iconos existentes del proyecto) */}
                        <button type="button" className="auth-social-button">
                            <Image
                                src="/iconos_platforms/facebook5.svg"
                                alt="Facebook"
                                width={16}
                                height={16}
                                className="auth-social-icon-img"
                            />
                            <span>Facebook</span>
                        </button>

                        {/* Botón Twitter/X (usa iconos existentes del proyecto) */}
                        <button type="button" className="auth-social-button">
                            <Image
                                src="/iconos_platforms/twitter3.svg"
                                alt="Twitter"
                                width={16}
                                height={16}
                                className="auth-social-icon-img"
                            />
                        <span>Twitter</span>
                        </button>
                    </div>
                    </form> {/* Fin formulario de login */}
                </div> {/* Fin columna izquierda */}

                    {/* ============================
                        COLUMNA DERECHA: IMAGEN / BRANDING
                        ============================ */}
                    <div className="auth-media-panel">
                        <div className="auth-media-inner">
                        {/* Imagen reutilizando recursos del proyecto */}
                        <Image
                            src="/Recursos/sign-wallpaper.jpg"
                            alt="Arte promocional GameStop Access"
                            fill
                            priority
                            className="auth-media-image"
                            sizes="(min-width: 1024px) 480px, 100vw"
                        />

                        {/* Capa de degradado para integrar colores del proyecto */}
                        <div className="auth-media-gradient" />

                        {/* Bloque de texto sobre la imagen */}
                        <div className="auth-media-brand">
                            <span className="auth-media-tag">XP BOOST</span>
                            <span className="auth-media-text">
                            Disfruta de una experiencia premium y mantén tu biblioteca
                            digital sincronizada en todos tus dispositivos.
                            </span>
                        </div>
                    </div> {/* Fin auth-media-inner */}
                </div> {/* Fin auth-media-panel */}
            </div> {/* Fin auth-grid */}
        </div> {/* Fin card principal */}
    </section>
);
}
