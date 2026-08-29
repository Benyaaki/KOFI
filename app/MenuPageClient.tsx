'use client';

import { useEffect, useState } from 'react';

type Language = 'en' | 'es';
type MenuItem = { name: string; detail: string; price: string };

const menu = {
  coffee: [
    { name: 'Todo de Ti Morena', detail: 'Brown sugar shaken espresso latte', price: '$6.55' },
    { name: 'Don Kofi', detail: 'Vanilla latte', price: '$5.75' },
    { name: 'Kofi Cero', detail: 'Sugar-free vanilla latte', price: '$5.75' },
    { name: 'Acaramelado', detail: 'Caramel latte', price: '$7.25' },
    { name: 'Horchata Latte', detail: 'Horchata latte, duh', price: '$7.25' },
    { name: 'Abrázame Miel', detail: 'Honey iced latte', price: '$6.85' },
    { name: 'Bella Nutella', detail: 'Nutella latte', price: '$7.85' },
    { name: 'Arequipe Latte', detail: 'Dulce de leche latte', price: '$7.35' },
  ],
  matcha: [
    { name: 'Coco Cloud', detail: 'Coconut water with matcha', price: '$6.50' },
    { name: 'Matchita Fresita', detail: 'Strawberry matcha latte', price: '$7.25' },
    { name: 'Te Amo Matcha', detail: 'Iced matcha latte', price: '$6.35' },
    { name: 'Horchata Matcha', detail: 'Mexican rice water with matcha', price: '$7.35' },
  ],
  classics: [
    { name: 'Espresso', detail: '', price: '$2.99' },
    { name: 'Americano', detail: '', price: '$4.25' },
    { name: 'Latte', detail: '', price: '$5.50' },
    { name: 'Cappuccino', detail: '', price: '$5.25' },
    { name: 'Iced Americano', detail: '', price: '$5.15' },
  ],
};

const text = {
  en: {
    nav: ['Menu', 'Find us', 'Our story'], book: 'Book the truck', back: 'Back home',
    kicker: 'THE FULL KOFI MENU', title: <>Pick your <em>happy.</em></>,
    body: 'Creamy, bright, cozy or bold—there is a KOFI drink for every version of you.',
    coffee: 'Iced coffees', matcha: 'Iced matcha', classics: 'Classics',
    note: 'Ask us about seasonal drops and plant-based milk options.',
    footer: 'Colombian coffee. Miami energy. Always made with love.', top: 'Back to top',
  },
  es: {
    nav: ['Menú', 'Encuéntranos', 'Nuestra historia'], book: 'Reserva el truck', back: 'Volver al inicio',
    kicker: 'EL MENÚ COMPLETO', title: <>Elige tu <em>felicidad.</em></>,
    body: 'Cremoso, fresco, reconfortante o intenso: hay un KOFI para cada versión de ti.',
    coffee: 'Cafés fríos', matcha: 'Matchas fríos', classics: 'Clásicos',
    note: 'Pregunta por los sabores de temporada y las opciones de leche vegetal.',
    footer: 'Café colombiano. Energía de Miami. Siempre hecho con amor.', top: 'Volver arriba',
  },
};

function MenuList({ title, number, items }: { title: string; number: string; items: MenuItem[] }) {
  return (
    <article className="menuV2Group">
      <header><span>{number}</span><h2>{title}</h2><i aria-hidden="true">✦</i></header>
      <div>
        {items.map((item) => (
          <div className="menuV2Item" key={item.name}>
            <div><h3>{item.name}</h3>{item.detail && <p>{item.detail}</p>}</div>
            <strong>{item.price}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function MenuPageClient() {
  const [language, setLanguage] = useState<Language>('en');
  useEffect(() => {
    const saved = localStorage.getItem('kofi-lang');
    if (saved === 'en' || saved === 'es') setLanguage(saved);
  }, []);
  const setLang = (value: Language) => {
    setLanguage(value);
    localStorage.setItem('kofi-lang', value);
    document.documentElement.lang = value;
  };
  const t = text[language];

  return (
    <div className="menuV2" id="top">
      <div className="announcement">MIAMI’S CUTEST COFFEE TRUCK <span>✦</span> CATCH US THIS WEEK</div>
      <nav className="nav floatingNav menuV2Nav" aria-label="Main navigation">
        <a className="brand logoPng" href="/" aria-label="Kofi home"><img src="/kofi-logo-transparent.png" alt="KOFI" /></a>
        <div className="navLinks"><a href="/menu">{t.nav[0]}</a><a href="/#stops">{t.nav[1]}</a><a href="/#story">{t.nav[2]}</a></div>
        <div className="menuV2Actions">
          <div className="menuV2Lang" aria-label="Language"><button className={language === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button><span>/</span><button className={language === 'es' ? 'active' : ''} onClick={() => setLang('es')}>ES</button></div>
          <a className="navCta" href="https://www.instagram.com/kofi_miam/" target="_blank" rel="noreferrer">{t.book} <span>↗</span></a>
        </div>
      </nav>

      <main>
        <section className="menuV2Hero">
          <div className="menuV2HeroCopy"><a href="/" className="menuV2Back">← {t.back}</a><p>{t.kicker}</p><h1>{t.title}</h1><div className="menuV2SparkRule" aria-hidden="true"><span>✦</span></div><p className="menuV2Lead">{t.body}</p></div>
          <div className="menuV2HeroImage"><img src="/drinks-lineup-hq.png" alt="Four signature KOFI iced drinks" /><span>GOOD<br />MOOD<br />MENU</span></div>
        </section>

        <section className="menuV2Intro" aria-label="Menu introduction"><p>COLOMBIAN ROOTS <span>✦</span> MIAMI ENERGY</p><h2>Made with love,<br /><em>served with sparkle.</em></h2></section>

        <section className="menuV2Lists">
          <MenuList title={t.coffee} number="01" items={menu.coffee} />
          <div className="menuV2Side">
            <MenuList title={t.matcha} number="02" items={menu.matcha} />
            <MenuList title={t.classics} number="03" items={menu.classics} />
          </div>
        </section>

        <section className="menuV2Note"><img src="/drink-matcha.png" alt="KOFI strawberry matcha" /><p><span>✦</span> {t.note} <span>✦</span></p><img src="/drink-marshmallow.png" alt="KOFI marshmallow iced coffee" /></section>
      </main>

      <footer className="menuV2Footer">
        <div className="menuV2FooterTop"><a href="/" className="menuV2FooterLogo"><img src="/kofi-logo-transparent.png" alt="KOFI" /></a><p>{t.footer}<br /><a href="mailto:areconyg@gmail.com?subject=KOFI%20event">Events &amp; contact ↗</a></p><div><a href="/">Home</a><a href="/menu">Menu</a><a href="https://www.instagram.com/kofi_miam/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.tiktok.com/@kofi_miam" target="_blank" rel="noreferrer">TikTok ↗</a></div></div>
        <div className="menuV2FooterSlogan">KOFI <i>♥</i> COFFEE <i>✦</i> MATCHA <i>♥</i> MIAMI</div>
        <div className="menuV2FooterBottom"><span>© 2026 KOFI MIAMI</span><a href="https://calfers.com" target="_blank" rel="noreferrer">HECHO POR CALFERS ↗</a><a href="#top">{t.top} ↑</a></div>
      </footer>
    </div>
  );
}
