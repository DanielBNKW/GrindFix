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
    title: "Naprawa Rowerów Warszawa – Szybko i Solidnie | GRINDFIX",
    description:
        "Naprawa rowerów Warszawa ✓ Szybki termin ✓ Przejrzyste ceny od 20 zł ✓ Wszystkie marki ✓ MTB, szosowy, e-bike. Zadzwoń: +48 881 165 993.",
    path: "/naprawa-rowerow-warszawa",
});

const FAQ = [
    { q: "Ile kosztuje naprawa roweru w Warszawie?", a: "Koszt naprawy roweru zależy od rodzaju usterki. Wymiana dętki to koszt od 20 zł, regulacja przerzutek od 35 zł, centrowanie koła 40–70 zł. Naprawy powypadkowe wyceniamy indywidualnie. Zawsze podajemy cenę przed przystąpieniem do pracy." },
    { q: "Czy mogę zostawić rower bez umawiania się?", a: "Zalecamy wcześniejsze umówienie się, aby uniknąć kolejki i skrócić czas oczekiwania. Możesz zadzwonić, napisać e-mail lub skorzystać z formularza kontaktowego. Odpowiadamy w ciągu 2–4 godzin." },
    { q: "Jaką gwarancję dacie na naprawę?", a: "Na wykonane usługi serwisowe udzielamy gwarancji 6 miesięcy. Na zamontowane części obowiązuje gwarancja producenta (zazwyczaj 12–24 miesiące)." },
    { q: "Czy naprawiacie rower po wypadku?", a: "Tak. Przyjmujemy rowery po wypadkach i kolizjach. Wykonujemy pełną diagnostykę ramy, widelca i wszystkich podzespołów. W razie potrzeby współpracujemy z ubezpieczycielami." },
    { q: "Czy naprawiacie rowery dziecięce?", a: "Oczywiście. Serwisujemy rowery dziecięce, biegowe i pierwsze rowery ze wspomaganiem. Bezpieczeństwo dziecka jest dla nas priorytetem." },
];

export default function NaprawaRowerow() {
    return (
        <>
            <ServiceJsonLd name="Naprawa Rowerów Warszawa" description="Szybka naprawa rowerów Warszawa. Przebita opona, zerwany łańcuch, wypadek – naprawiamy wszystko." url="https://grindfix.pl/naprawa-rowerow-warszawa" />
            <Breadcrumbs items={[{ name: "Naprawa Rowerów Warszawa", href: "/naprawa-rowerow-warszawa" }]} />

            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <span className="section-label">⚙️ Naprawa</span>
                    <h1 style={{ marginBottom: "1rem" }}>Naprawa Rowerów Warszawa</h1>
                    <p style={{ fontSize: "1.1rem", maxWidth: 640, marginBottom: "2rem", color: "var(--gray-700)", lineHeight: 1.75 }}>
                        Zepsuł Ci się rower? <strong>Naprawiamy rowery w Warszawie</strong> szybko i solidnie – od prostej wymiany dętki
                        po kompleksową naprawę po wypadku. Wszystkie marki: Trek, Giant, Specialized, Cube, Kross, Merida i wiele innych.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                        <a href="#kontakt" className="btn-primary">📅 Umów naprawę</a>
                        <a href={`tel:${NAP.phone}`} className="btn-secondary">📞 {NAP.phoneFormatted}</a>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="prose" style={{ maxWidth: 900, margin: "0 auto" }}>
                        <h2>Jakie naprawy rowerów wykonujemy?</h2>
                        <p>
                            W GRINDFIX wykonujemy naprawy rowerów praktycznie każdego rodzaju – od drobnych usterek, które można naprawić w 15 minut,
                            po poważne awarie wymagające wymiany kilku komponentów. Oto najczęstsze <strong>naprawy rowerów w Warszawie</strong>,
                            z którymi trafiają do nas klienci:
                        </p>
                        <ul>
                            <li>Wymiana dętki lub opony – od 20 zł</li>
                            <li>Regulacja i wymiana linek przerzutek i hamulców</li>
                            <li>Wymiana łańcucha i kasety</li>
                            <li>Naprawa lub wymiana suportu</li>
                            <li>Naprawa lub wymiana klamek i manetek</li>
                            <li>Wymiana manetki hamulca hydraulicznego</li>
                            <li>Naprawa piasty – wymiana łożysk</li>
                            <li>Naprawy powypadkowe – rama, widelec, kierownica</li>
                            <li>Wymiana siodełka lub wspornika siodła</li>
                            <li>Naprawa lub wymiana pedałów</li>
                            <li>Naprawa systemu napędowego e-bike</li>
                        </ul>
                        <h2>Naprawa roweru tego samego dnia</h2>
                        <p>
                            Rozumiemy, że zepsuty rower to problem, szczególnie jeśli codziennie dojeżdżasz nim do pracy lub szkoły.
                            Dlatego staramy się realizować <strong>naprawy rowerów</strong> jak najszybciej. Proste naprawy – wymiana dętki,
                            regulacja przerzutek, wymiana linek – często jesteśmy w stanie wykonać od ręki podczas wizyty.
                            Bardziej skomplikowane naprawy planujemy na czas nie dłuższy niż 1–3 dni robocze.
                        </p>
                        <h2>Naprawa roweru elektrycznego (e-bike) Warszawa</h2>
                        <p>
                            Naprawy rowerów elektrycznych wymagają specjalistycznej wiedzy i narzędzi. Nasi technicy posiadają certyfikaty
                            producentów systemów e-bike (Bosch, Shimano Steps, Yamaha, Brose, Fazua) i dostęp do najnowszego oprogramowania diagnostycznego.
                            Diagnozujemy kody błędów, naprawiamy silniki, kontrolery i wyświetlacze.
                        </p>
                        <h2>Naprawa po wypadku rowerowym</h2>
                        <p>
                            Wypadek na rowerze to stresująca sytuacja. W GRINDFIX staramy się ją ułatwić.
                            Przeprowadzamy pełną diagnostykę uszkodzeń po wypadku, sprawdzając ramę (w tym pod kątem pęknięć),
                            widelec, koła, układ hamulcowy i napędowy. Wystawiamy protokół uszkodzeń dla ubezpieczyciela.
                        </p>
                        <h2>Ceny naprawy roweru Warszawa</h2>
                        <p>
                            Koszt <strong>naprawy roweru w Warszawie</strong> zależy od rodzaju usterki i użytych części. W GRINDFIX zawsze
                            podajemy cenę z góry, przed przystąpieniem do pracy. Przykładowe ceny:
                        </p>
                        <ul>
                            <li>Wymiana dętki – od 20 zł + koszt dętki</li>
                            <li>Regulacja przerzutki tylnej – 35 zł</li>
                            <li>Wymiana linki hamulca + pancerz – od 40 zł</li>
                            <li>Centrowanie koła – 40–70 zł</li>
                            <li>Wymiana łańcucha – od 30 zł + łańcuch</li>
                            <li>Odpowietrzenie hamulców hydraulicznych – od 80 zł</li>
                        </ul>
                        <Link href="/cennik">→ Pełny cennik naprawy roweru</Link>
                        <h2>Serwisowane dzielnice</h2>
                        <p>
                            Naprawa rowerów w Warszawie – docieramy do klientów z <Link href="/serwis-rowerowy-mokotow">Mokotowa</Link>,{" "}
                            <Link href="/serwis-rowerowy-ursynow">Ursynowa</Link>, <Link href="/serwis-rowerowy-wola">Woli</Link>,
                            Śródmieścia, Pragi i okolic. Skorzystaj z <Link href="/mobilny-serwis-rowerowy-warszawa">mobilnego serwisu</Link> – przyjedziemy do Ciebie!
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ background: "var(--green-primary)", padding: "3rem 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Masz zepsutego roweru? Działamy szybko!</h2>
                    <p style={{ color: "#bbf7d0", marginBottom: "1.75rem" }}>Zadzwoń lub wypełnij formularz – odpiszemy w ciągu kilku godzin.</p>
                    <a href="#kontakt" className="btn-secondary">📅 Umów naprawę</a>
                </div>
            </section>

            <Testimonials />
            <FAQSection items={FAQ} title="FAQ – Naprawa Rowerów Warszawa" />

            <section className="section section-green" id="kontakt">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2>Umów naprawę roweru</h2>
                    </div>
                    <div className="card"><ContactForm /></div>
                </div>
            </section>
        </>
    );
}
