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
    title: "Serwis Roweru Elektrycznego Warszawa | E-Bike | GRINDFIX",
    description:
        "Serwis roweru elektrycznego Warszawa ✓ Bosch, Shimano Steps, Yamaha ✓ Diagnoza i naprawa e-bike ✓ Certyfikowani technicy. GRINDFIX Warszawa.",
    path: "/serwis-roweru-elektrycznego-warszawa",
});

const FAQ = [
    { q: "Jakie systemy e-bike serwisujecie?", a: "Serwisujemy wszystkie popularne systemy napędowe: Bosch (wszystkie generacje), Shimano Steps (E6000, E7000, E8000), Yamaha PW, Brose, Fazua i Panasonic. Posiadamy certyfikaty i oprogramowanie diagnostyczne producentów." },
    { q: "Ile kosztuje serwis roweru elektrycznego?", a: "Przegląd e-bike zaczyna się od 150 zł. Diagnoza błędów kosztuje od 80 zł. Naprawy wyceniamy indywidualnie po diagnostyce. Koszt zależy od rodzaju usterki – prosta kalibracja to kilkadziesiąt złotych, wymiana komponentów elektronicznych może kosztować kilkaset złotych i więcej." },
    { q: "Czy serwisujecie baterie do rowerów elektrycznych?", a: "Wykonujemy diagnostykę baterii, oceniamy pojemność i stan zdrowia ogniw. W przypadku awarii baterii możemy wykonać jej serwis lub skierować do autoryzowanego serwisu producenta. Zapraszamy do konsultacji." },
    { q: "Czy możecie zaktualizować oprogramowanie e-bike?", a: "Tak, posiadamy aktualne narzędzia do aktualizacji firmware dla systemów Bosch, Shimano Steps i Yamaha. Aktualizacja oprogramowania może poprawić osiągi silnika i naprawić znane błędy systemowe." },
    { q: "Mój rower elektryczny nie włącza się – co robić?", a: "Przywieź rower do nas lub skorzystaj z mobilnego serwisu. Diagnostykę błędów wykonujemy z użyciem specjalistycznego oprogramowania. Najczęstsze przyczyny to: usterka baterii, przegrzanie silnika, błąd komunikacji między komponentami lub usterka wyświetlacza." },
];

export default function SerwisEbike() {
    return (
        <>
            <ServiceJsonLd name="Serwis Roweru Elektrycznego Warszawa" description="Certyfikowany serwis e-bike Warszawa. Bosch, Shimano Steps, Yamaha, Brose. Diagnoza i naprawa." url="https://grindfix.pl/serwis-roweru-elektrycznego-warszawa" />
            <Breadcrumbs items={[{ name: "Serwis Roweru Elektrycznego Warszawa", href: "/serwis-roweru-elektrycznego-warszawa" }]} />

            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <span className="section-label">⚡ E-Bike</span>
                    <h1 style={{ marginBottom: "1rem" }}>Serwis Roweru Elektrycznego Warszawa</h1>
                    <p style={{ fontSize: "1.1rem", maxWidth: 640, marginBottom: "2rem", color: "var(--gray-700)", lineHeight: 1.75 }}>
                        Certyfikowany <strong>serwis rowerów elektrycznych w Warszawie</strong>. Serwisujemy systemy Bosch, Shimano Steps, Yamaha i Brose.
                        Diagnoza, naprawa, aktualizacja oprogramowania i przeglądy techniczne.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                        <a href="#kontakt" className="btn-primary">📅 Umów serwis e-bike</a>
                        <a href={`tel:${NAP.phone}`} className="btn-secondary">📞 {NAP.phoneFormatted}</a>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="prose" style={{ maxWidth: 900, margin: "0 auto" }}>
                        <h2>Dlaczego serwis e-bike wymaga specjalisty?</h2>
                        <p>
                            Rower elektryczny to złożone urządzenie łączące mechanikę rowerową z elektroniką. Serwis e-bike wymaga nie tylko wiedzy
                            o mechanice rowerowej, ale również znajomości systemów elektronicznych, oprogramowania diagnostycznego i specjalistycznych narzędzi.
                            Nie każdy serwis rowerowy podejmuje się serwisu e-bike – w GRINDFIX jest to jedna z naszych specjalizacji.
                        </p>
                        <h2>Jakie usługi serwisowe oferujemy dla e-bike?</h2>
                        <ul>
                            <li>Diagnoza komputerowa – odczyt kodów błędów, ocena stanu systemu</li>
                            <li>Aktualizacja firmware (oprogramowanie silnika, wyświetlacza)</li>
                            <li>Kalibracja momentu obrotowego i poziomu wspomagania</li>
                            <li>Serwis silnika – czyszczenie, wymiana uszczelnień</li>
                            <li>Diagnostyka i ocena stanu baterii (pojemność, stan ogniw)</li>
                            <li>Wymiana wyświetlacza, kontrolera, czujnika prędkości</li>
                            <li>Serwis mechaniczny e-bike: hamulce, napęd, koła, zawieszenie</li>
                            <li>Przegląd techniczny e-bike z protokołem</li>
                        </ul>
                        <h2>Serwisowane systemy napędowe</h2>
                        <p>
                            Posiadamy certyfikaty i oprogramowanie diagnostyczne dla następujących systemów:
                        </p>
                        <ul>
                            <li><strong>Bosch</strong> – Active Line, Performance Line, Performance Line CX, Smart System</li>
                            <li><strong>Shimano Steps</strong> – E6000, E7000, E8000, E5000, E7020</li>
                            <li><strong>Yamaha</strong> – PW, PW-ST, PW-X, PW-X2, PW-X3</li>
                            <li><strong>Brose</strong> – Drive, Drive S, Drive C</li>
                            <li><strong>Fazua</strong> – Ride 50, Ride 60</li>
                        </ul>
                        <h2>Jak dbać o rower elektryczny?</h2>
                        <p>
                            Rower elektryczny wymaga nieco innej pielęgnacji niż zwykły rower. Kluczowe zasady:
                        </p>
                        <ul>
                            <li>Ładuj baterię regularnie – nie zostawiaj rozładowanej na długo</li>
                            <li>Przechowuj baterię w temperaturach umiarkowanych (nie na mrozie)</li>
                            <li>Myj e-bike ostrożnie – unikaj strumienia wody pod ciśnieniem na silnik i baterię</li>
                            <li>Serwisuj co 500–1000 km lub raz na rok</li>
                            <li>Sprawdzaj stan okładzin hamulcowych – na e-bike szybciej się zużywają</li>
                        </ul>
                        <p>Przeczytaj więcej: <Link href="/blog/jak-dbac-o-rower-elektryczny">Jak dbać o rower elektryczny?</Link></p>
                        <h2>Przegląd roweru elektrycznego – cena</h2>
                        <p>
                            Przegląd <strong>roweru elektrycznego w Warszawie</strong> kosztuje w GRINDFIX od 150 zł.
                            Obejmuje pełen przegląd mechaniczny oraz diagnostykę systemu elektrycznego z odczytem kodów błędów.
                        </p>
                        <Link href="/cennik">→ Pełny cennik serwisu e-bike</Link>
                    </div>
                </div>
            </section>

            <section style={{ background: "var(--green-primary)", padding: "3rem 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Masz e-bike z problemem? Pomożemy!</h2>
                    <p style={{ color: "#bbf7d0", marginBottom: "1.75rem" }}>Diagnoza i naprawa rowerów elektrycznych wszystkich marek w Warszawie.</p>
                    <a href="#kontakt" className="btn-secondary">📅 Umów serwis e-bike</a>
                </div>
            </section>

            <Testimonials />
            <FAQSection items={FAQ} title="FAQ – Serwis Roweru Elektrycznego" />

            <section className="section section-green" id="kontakt">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2>Umów serwis roweru elektrycznego</h2>
                    </div>
                    <div className="card"><ContactForm /></div>
                </div>
            </section>
        </>
    );
}
