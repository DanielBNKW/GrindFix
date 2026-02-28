import { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { NAP } from "@/lib/data";
import FAQSection from "@/components/ui/FAQSection";
import Testimonials from "@/components/ui/Testimonials";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = generateMeta({
    title: "Mobilny Serwis Rowerowy Warszawa – Technik do Ciebie | GRINDFIX",
    description:
        "Mobilny serwis rowerowy Warszawa ✓ Technik przyjeżdża pod Twój adres ✓ Cała Warszawa ✓ Naprawy, przeglądy, serwis e-bike. Umów wizytę online.",
    path: "/mobilny-serwis-rowerowy-warszawa",
});

const FAQ = [
    { q: "Jak działa mobilny serwis rowerowy?", a: "Kontaktujesz się z nami telefonicznie lub przez formularz, ustalamy termin i adres. Technik przyjeżdża z kompletnym wyposażeniem serwisowym i wykonuje naprawę lub przegląd na miejscu – pod Twoim blokiem, w pracy lub w parku." },
    { q: "Ile kosztuje mobilny serwis rowerowy w Warszawie?", a: "Koszt dojazdu to od 30 zł w zależności od odległości. Pakiet Mobile Basic (dojazd + 1 h pracy) od 120 zł. Oczywiście doliczamy też koszt użytych części. Często wychodzi taniej niż transport roweru do warsztatu!" },
    { q: "Na jakim obszarze działa mobilny serwis?", a: "Obsługujemy całą Warszawę: Mokotów, Ursynów, Śródmieście, Wola, Praga, Żoliborz, Bielany, Bemowo i inne dzielnice. Na zapytanie obsługujemy też gminy ościenne: Piaseczno, Pruszków, Konstancin." },
    { q: "Jakie naprawy można wykonać mobilnie?", a: "Zdecydowaną większość napraw wykonujemy mobilnie: wymiana dętki i opony, regulacja przerzutek i hamulców, wymiana linki i pancerza, centrowanie koła, wymiana łańcucha, smarowanie, przegląd techniczny. Bardziej zaawansowane naprawy (np. budowa kół, serwis amortyzatora) wymagają wizyty w warsztacie." },
    { q: "Jak szybko przyjeżdża technik?", a: "Czas oczekiwania zależy od dostępności – zazwyczaj umawiamy wizytę na następny dzień roboczy lub wskazany przez Ciebie termin. W pilnych przypadkach staramy się reagować szybciej." },
];

export default function MobilnySerwis() {
    return (
        <>
            <ServiceJsonLd name="Mobilny Serwis Rowerowy Warszawa" description="Technik przyjedzie do Ciebie – mobilny serwis rowerowy na terenie całej Warszawy." url="https://grindfix.pl/mobilny-serwis-rowerowy-warszawa" />
            <Breadcrumbs items={[{ name: "Mobilny Serwis Rowerowy Warszawa", href: "/mobilny-serwis-rowerowy-warszawa" }]} />

            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <span className="section-label">🚐 Mobilny Serwis</span>
                    <h1 style={{ marginBottom: "1rem" }}>Mobilny Serwis Rowerowy Warszawa</h1>
                    <p style={{ fontSize: "1.1rem", maxWidth: 640, marginBottom: "2rem", color: "var(--gray-700)", lineHeight: 1.75 }}>
                        <strong>Mobilny serwis rowerowy</strong> – technik przyjedzie pod Twój adres w Warszawie z kompletnym wyposażeniem
                        i naprawi rower na miejscu. Idealne rozwiązanie dla zapracowanych rowerzystów.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                        <a href="#kontakt" className="btn-primary">📅 Umów mobilny serwis</a>
                        <a href={`tel:${NAP.phone}`} className="btn-secondary">📞 {NAP.phoneFormatted}</a>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="prose" style={{ maxWidth: 900, margin: "0 auto" }}>
                        <h2>Czym jest mobilny serwis rowerowy?</h2>
                        <p>
                            <strong>Mobilny serwis rowerowy w Warszawie</strong> to usługa, w ramach której nasz technik przyjeżdża
                            do wskazanego przez Ciebie miejsca z pełnym wyposażeniem serwisowym i naprawia Twój rower na miejscu.
                            Nie musisz transportować roweru, nie tracisz czasu na dojazd – technik przychodzi do Ciebie.
                        </p>
                        <p>
                            Mobilny serwis GRINDFIX to idealne rozwiązanie dla:
                        </p>
                        <ul>
                            <li>Osób dojeżdżających rowerem do pracy – serwis podczas przerwy</li>
                            <li>Rodziców z dziećmi, którzy nie mogą łatwo transportować roweru</li>
                            <li>Osób starszych lub z ograniczoną mobilnością</li>
                            <li>Rowerzystów, którzy doznali awarii podczas jazdy</li>
                            <li>Firm z flotą rowerów służbowych</li>
                        </ul>
                        <h2>Co obejmuje mobilny serwis rowerowy?</h2>
                        <p>Nasz technik mobilny może wykonać u Ciebie:</p>
                        <ul>
                            <li>Wymiana dętki lub opony</li>
                            <li>Regulacja przerzutek i hamulców</li>
                            <li>Wymiana linki i pancerza</li>
                            <li>Wymiana łańcucha</li>
                            <li>Centrowanie koła</li>
                            <li>Smarowanie i czyszczenie roweru</li>
                            <li>Regulacja i wymiana hamulców (V-brake i tarczowych)</li>
                            <li>Przegląd techniczny z ustną oceną stanu roweru</li>
                            <li>Diagnostyka e-bike (z przenośnym oprogramowaniem)</li>
                        </ul>
                        <h2>Obszar działania mobilnego serwisu w Warszawie</h2>
                        <p>
                            Móbimy serwis rowerowy w Warszawie obejmuje:
                        </p>
                        <ul>
                            <li>Mokotów, Ursynów, Wilanów</li>
                            <li>Śródmieście, Żoliborz, Bielany</li>
                            <li>Wola, Ochota, Bemowo</li>
                            <li>Praga Północ, Praga Południe, Targówek</li>
                            <li>Ursus, Włochy, Rembertów</li>
                        </ul>
                        <p>Na zapytanie serwisujemy też Piaseczno, Pruszków, Konstancin i inne miejscowości w pobliżu Warszawy.</p>
                        <h2>Cennik mobilnego serwisu rowerowego</h2>
                        <ul>
                            <li>Dojazd na terenie Warszawy – od 30 zł</li>
                            <li>Pakiet Mobile Basic (dojazd + 1 h pracy) – od 120 zł</li>
                            <li>Naprawy wyceniamy standardowo + koszt dojazdu</li>
                        </ul>
                        <Link href="/cennik">→ Pełny cennik serwisu mobilnego</Link>
                    </div>
                </div>
            </section>

            <section style={{ background: "var(--green-primary)", padding: "3rem 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Technik przyjedzie do Ciebie!</h2>
                    <p style={{ color: "#bbf7d0", marginBottom: "1.75rem" }}>Umów mobilny serwis – dojazd po całej Warszawie.</p>
                    <a href="#kontakt" className="btn-secondary">📅 Zarezerwuj dojazd technika</a>
                </div>
            </section>

            <Testimonials />
            <FAQSection items={FAQ} title="FAQ – Mobilny Serwis Rowerowy" />

            <section className="section section-green" id="kontakt">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2>Umów mobilny serwis</h2>
                    </div>
                    <div className="card"><ContactForm /></div>
                </div>
            </section>
        </>
    );
}
