"use client";

import Link from "next/link";
import { NAP, SERVICES, SITE_URL } from "@/lib/data";

export default function Footer() {
    const year = 2026;
    return (
        <footer style={{ background: "#111827", color: "#d1d5db", paddingTop: "4rem" }}>
            <div className="container">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem", paddingBottom: "3rem", borderBottom: "1px solid #374151" }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", gap: "0.4rem", marginBottom: "1rem" }}>
                            <span style={{ background: "var(--green-primary)", color: "#fff", fontWeight: 800, fontSize: "1.2rem", padding: "0.2rem 0.6rem", borderRadius: "0.4rem" }}>GRIND</span>
                            <span style={{ background: "var(--yellow-accent)", color: "#111", fontWeight: 800, fontSize: "1.2rem", padding: "0.2rem 0.6rem", borderRadius: "0.4rem" }}>FIX</span>
                        </div>
                        <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#9ca3af", maxWidth: 260 }}>
                            Profesjonalny serwis rowerowy w Warszawie. Naprawa, przeglądy, e-bike i mobilny serwis.
                        </p>
                        <div style={{ marginTop: "1.25rem", display: "flex", gap: "0.75rem" }}>
                            <a href="https://facebook.com/grindfix" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={socialStyle}>f</a>
                            <a href="https://instagram.com/grindfix_warszawa" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={socialStyle}>ig</a>
                        </div>
                    </div>

                    {/* NAP */}
                    <div>
                        <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "1rem" }}>Kontakt</h3>
                        <address style={{ fontStyle: "normal", fontSize: "0.9rem", lineHeight: 2, color: "#9ca3af" }}>
                            <strong style={{ color: "#fff", display: "block" }}>{NAP.name}</strong>
                            <span>{NAP.address.street}</span><br />
                            <span>{NAP.address.postalCode} {NAP.address.city}</span><br />
                            <a href={`tel:${NAP.phone}`} style={{ color: "var(--green-light)" }}>{NAP.phoneFormatted}</a><br />
                            <a href={`mailto:${NAP.email}`} style={{ color: "var(--green-light)" }}>{NAP.email}</a>
                        </address>
                        <div style={{ marginTop: "0.75rem", fontSize: "0.85rem", color: "#9ca3af" }}>
                            <strong style={{ color: "#d1d5db" }}>Godziny:</strong><br />
                            Pn–Pt: 9:00–18:00<br />
                            Sob: 9:00–15:00
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "1rem" }}>Usługi</h3>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {SERVICES.map(s => (
                                <li key={s.slug}>
                                    <Link href={`/${s.slug}`} style={{ color: "#9ca3af", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}
                                        onMouseOver={e => (e.currentTarget.style.color = "#bbf7d0")}
                                        onMouseOut={e => (e.currentTarget.style.color = "#9ca3af")}
                                    >
                                        {s.icon} {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Dzielnice */}
                    <div>
                        <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "1rem" }}>Obsługiwane Dzielnice</h3>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {[
                                { slug: "serwis-rowerowy-mokotow", name: "Mokotów" },
                                { slug: "serwis-rowerowy-ursynow", name: "Ursynów" },
                                { slug: "serwis-rowerowy-wola", name: "Wola" },
                            ].map(d => (
                                <li key={d.slug}>
                                    <Link href={`/${d.slug}`} style={{ color: "#9ca3af", fontSize: "0.875rem", textDecoration: "none" }}
                                        onMouseOver={e => (e.currentTarget.style.color = "#bbf7d0")}
                                        onMouseOut={e => (e.currentTarget.style.color = "#9ca3af")}
                                    >
                                        📍 {d.name}
                                    </Link>
                                </li>
                            ))}
                            <li style={{ color: "#9ca3af", fontSize: "0.875rem" }}>📍 Śródmieście</li>
                            <li style={{ color: "#9ca3af", fontSize: "0.875rem" }}>📍 Praga</li>
                        </ul>
                        <div style={{ marginTop: "1.25rem" }}>
                            <Link href="/cennik" style={{ color: "#9ca3af", fontSize: "0.875rem", textDecoration: "none" }}
                                onMouseOver={e => (e.currentTarget.style.color = "#bbf7d0")}
                                onMouseOut={e => (e.currentTarget.style.color = "#9ca3af")}
                            >
                                💰 Cennik usług
                            </Link>
                        </div>
                        <div style={{ marginTop: "0.5rem" }}>
                            <Link href="/blog" style={{ color: "#9ca3af", fontSize: "0.875rem", textDecoration: "none" }}
                                onMouseOver={e => (e.currentTarget.style.color = "#bbf7d0")}
                                onMouseOut={e => (e.currentTarget.style.color = "#9ca3af")}
                            >
                                📝 Blog
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Google Map */}
                <div style={{ padding: "2rem 0" }}>
                    <iframe
                        title="GRINDFIX Serwis Rowerowy Warszawa – mapa"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.8775573060574!2d21.012201315800627!3d52.22970397975935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47192ebf58edb52d%3A0x8e6c1b4a7d5d4a6d!2sWarszawa!5e0!3m2!1spl!2spl!4v1698765432100!5m2!1spl!2spl"
                        width="100%"
                        height="220"
                        style={{ border: "none", borderRadius: "0.75rem", display: "block" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                {/* Bottom */}
                <div style={{
                    borderTop: "1px solid #374151", padding: "1.5rem 0",
                    display: "flex", flexWrap: "wrap", justifyContent: "space-between",
                    alignItems: "center", gap: "0.75rem", fontSize: "0.8rem", color: "#6b7280",
                }}>
                    <span>© {year} {NAP.name}. Wszelkie prawa zastrzeżone.</span>
                    <span>ul. Rowerowa 15/7, 00-950 Warszawa | {NAP.phoneFormatted} | {NAP.email}</span>
                </div>
            </div>
        </footer>
    );
}

const socialStyle: React.CSSProperties = {
    width: 36, height: 36, background: "#374151",
    color: "#d1d5db", borderRadius: "50%",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    fontSize: "0.8rem", fontWeight: 700, textDecoration: "none", transition: "0.2s",
};
