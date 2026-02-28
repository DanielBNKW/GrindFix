import { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { NAP } from "@/lib/data";
import FAQSection from "@/components/ui/FAQSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import ContactForm from "@/components/ui/ContactForm";
import Link from "next/link";

export const metadata: Metadata = generateMeta({
    title: "Serwis Rowerowy Wola Warszawa | GRINDFIX",
    description: "Serwis rowerowy Wola ✓ Naprawa rowerów, przeglądy, serwis e-bike ✓ Mobilny technik ✓ Warszawa Wola. GRINDFIX – profesjonalny serwis rowerów.",
    path: "/serwis-rowerowy-wola",
});
const FAQ = [
    { q: "Czy GRINDFIX obsługuje rowerzystów z Woli?", a: "Tak! Obsługujemy rowerzystów z Woli i okolic. Oferujemy mobilny serwis – technik przyjedzie pod Twój adres lub do biura. Możesz też przywieźć rower do naszego warsztatu." },
    { q: "Jak umówić serwis na Woli?", a: "Zadzwoń pod +48 881 165 993 lub skorzystaj z formularza kontaktowego. Odpiszemy w ciągu 2–4 godzin i ustalimy termin dla Ciebie." },
    { q: "Czy serwisujecie rowery służbowe na Woli?", a: "Tak! Jeśli firma posiada flotę rowerów, oferujemy grupowy serwis z preferencyjnymi cenami. Skontaktuj się z nami po wycenę dla firmy." },
];
export default function Wola() {
    return (
        <>
            <ServiceJsonLd name="Serwis Rowerowy Wola" description="Serwis i naprawa rowerów na Woli w Warszawie. Mobilny technik, e-bike, przeglądy." url="https://grindfix.pl/serwis-rowerowy-wola" />
            <Breadcrumbs items={[{ name: "Serwis Rowerowy Wola", href: "/serwis-rowerowy-wola" }]} />
            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <span className="section-label">📍 Wola</span>
                    <h1 style={{ marginBottom: "1rem" }}>Serwis Rowerowy Wola – GRINDFIX</h1>
                    <p style={{ fontSize: "1.1rem", maxWidth: 640, marginBottom: "2rem", color: "var(--gray-700)", lineHeight: 1.75 }}>
                        Profesjonalny <strong>serwis rowerowy na Woli</strong> w Warszawie. Naprawa rowerów, przeglądy i mobilny serwis.
                        Docieramy na ulice Kasprzaka, Górczewska, Prymasa Tysiąclecia i całą Wolę.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                        <a href="#kontakt" className="btn-primary">📅 Umów serwis na Woli</a>
                        <a href={`tel:${NAP.phone}`} className="btn-secondary">📞 {NAP.phoneFormatted}</a>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="prose" style={{ maxWidth: 900, margin: "0 auto" }}>
                        <h2>Rowerzyści z Woli – jesteśmy dla Was!</h2>
                        <p>Wola to dynamicznie rozwijająca się dzielnica Warszawy z coraz lepszą infrastrukturą rowerową. Biurowce przy Rondzie Daszyńskiego, osiedla i parki sprawiają, że rower jest tu popularnym środkiem komunikacji. GRINDFIX chętnie serwisuje rowery wolskich rowerzystów – dojeżdżających do biura i cyklistów rekreacyjnych.</p>
                        <h2>Mobilny serwis rowerowy na Woli</h2>
                        <p>Technik GRINDFIX może dotrzeć do każdej części Woli: Czyste, Odolany, Ulrychów, Koło, Muranów. Mobilny serwis to idealne rozwiązanie dla pracowników biurowców – naprawiamy rower podczas Twojej pracy.</p>
                        <h2>Usługi serwisowe na Woli</h2>
                        <ul>
                            <li>Wymiana dętki – od 20 zł</li>
                            <li>Regulacja przerzutek i hamulców – od 25 zł</li>
                            <li>Przegląd roweru – od 80 zł</li>
                            <li>Serwis e-bike – od 150 zł</li>
                            <li>Mobilny dojazd na Wolę – od 30 zł</li>
                        </ul>
                        <h2>Inne obsługiwane dzielnice</h2>
                        <p>Serwisujemy też: <Link href="/serwis-rowerowy-mokotow">Mokotów</Link>, <Link href="/serwis-rowerowy-ursynow">Ursynów</Link> i <Link href="/mobilny-serwis-rowerowy-warszawa">całą Warszawę mobilnie</Link>.</p>
                    </div>
                </div>
            </section>
            <FAQSection items={FAQ} title="FAQ – Serwis Rowerowy Wola" />
            <section className="section section-green" id="kontakt">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2>Umów serwis na Woli</h2>
                    </div>
                    <div className="card"><ContactForm /></div>
                </div>
            </section>
        </>
    );
}
