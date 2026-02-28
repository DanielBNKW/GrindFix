import { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { NAP } from "@/lib/data";
import FAQSection from "@/components/ui/FAQSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import ContactForm from "@/components/ui/ContactForm";
import Link from "next/link";

export const metadata: Metadata = generateMeta({
    title: "Serwis Rowerowy Mokotów Warszawa | GRINDFIX",
    description: "Serwis rowerowy Mokotów ✓ Naprawa rowerów, przeglądy, serwis e-bike ✓ Warszawa Mokotów – mobilny serwis u klienta. GRINDFIX – zadzwoń teraz!",
    path: "/serwis-rowerowy-mokotow",
});
const FAQ = [
    { q: "Czy GRINDFIX obsługuje klientów z Mokotowa?", a: "Tak, obsługujemy rowerzystów z Mokotowa. Możesz przynieść rower do naszego warsztatu lub zamówić mobilny serwis – technik przyjedzie pod Twój adres na Mokotowie." },
    { q: "Jak długo trwa oczekiwanie na serwis na Mokotowie?", a: "Przy mobilnym serwisie zazwyczaj umawiamy wizytę na kolejny dzień roboczy lub w ustalonym przez Ciebie terminie. Proste naprawy często można wykonać tego samego dnia." },
    { q: "Jakie usługi są dostępne na Mokotowie?", a: "Oferujemy pełen zakres usług – przegląd roweru, naprawa, serwis e-bike, regulacja przerzutek i hamulców, wymiana dętki. Mobilny technik przyjedzie z kompletnym wyposażeniem." },
];
export default function Mokotow() {
    return (
        <>
            <ServiceJsonLd name="Serwis Rowerowy Mokotów" description="Serwis i naprawa rowerów na Mokotowie. Mobilny technik przyjeżdża pod adres." url="https://grindfix.pl/serwis-rowerowy-mokotow" />
            <Breadcrumbs items={[{ name: "Serwis Rowerowy Mokotów", href: "/serwis-rowerowy-mokotow" }]} />
            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <span className="section-label">📍 Mokotów</span>
                    <h1 style={{ marginBottom: "1rem" }}>Serwis Rowerowy Mokotów – GRINDFIX</h1>
                    <p style={{ fontSize: "1.1rem", maxWidth: 640, marginBottom: "2rem", color: "var(--gray-700)", lineHeight: 1.75 }}>
                        Profesjonalny <strong>serwis rowerowy na Mokotowie</strong>. Naprawy, przeglądy, serwis e-bike i mobilny technik
                        przyjeżdżający pod Twój adres. Obsługujemy ulice: Puławska, Wiśniowa, Madalińskiego, Dolna, Odyńca i okolice.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                        <a href="#kontakt" className="btn-primary">📅 Umów serwis na Mokotowie</a>
                        <a href={`tel:${NAP.phone}`} className="btn-secondary">📞 {NAP.phoneFormatted}</a>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="prose" style={{ maxWidth: 900, margin: "0 auto" }}>
                        <h2>Serwis rowerowy na Mokotowie – dlaczego GRINDFIX?</h2>
                        <p>Mokotów to jedna z największych i najbardziej rowerowych dzielnic Warszawy. Liczne parki (Park Morskie Oko, Park Arkadia, Park Dreszera), szerokie chodniki i sieć ścieżek rowerowych zachęcają mieszkańców do jazdy na co dzień. GRINDFIX z przyjemnością obsługuje mokotowskich rowerzystów – zarówno tych dojeżdżających do pracy w Śródmieściu, jak i weekendowych entuzjastów.</p>
                        <h2>Mobilny serwis rowerowy na Mokotowie</h2>
                        <p>Technik GRINDFIX może dotrzeć do każdego zakątka Mokotowa – od Stary Mokotów po Sadybę, od Służewca po Czerniaków. Umów mobilny serwis i naprawimy lub obejrzymy Twój rower pod blokiem, w biurze lub w parku.</p>
                        <h2>Najczęstsze naprawy rowerów na Mokotowie</h2>
                        <ul>
                            <li>Przebita opona lub dętka – szybka wymiana od 20 zł</li>
                            <li>Regulacja przerzutek po zimie – od 35 zł</li>
                            <li>Wycentrowanie koła – 40–70 zł</li>
                            <li>Przegląd roweru przed sezonem – od 80 zł</li>
                            <li>Serwis roweru elektrycznego – od 150 zł</li>
                        </ul>
                        <h2>Powiązane usługi w okolicy</h2>
                        <p>Oprócz Mokotowa obsługujemy: <Link href="/serwis-rowerowy-ursynow">Ursynów</Link>, <Link href="/serwis-rowerowy-wola">Wolę</Link> i <Link href="/mobilny-serwis-rowerowy-warszawa">całą Warszawę mobilnie</Link>.</p>
                    </div>
                </div>
            </section>
            <FAQSection items={FAQ} title="FAQ – Serwis Rowerowy Mokotów" />
            <section className="section section-green" id="kontakt">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2>Umów serwis na Mokotowie</h2>
                    </div>
                    <div className="card"><ContactForm /></div>
                </div>
            </section>
        </>
    );
}
