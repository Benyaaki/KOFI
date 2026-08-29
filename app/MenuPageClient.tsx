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
    announcement: <>MIAMI’S CUTEST COFFEE TRUCK <span>✦</span> CATCH US THIS WEEK</>,
    nav: ['Menu', 'Find us', 'Our story'], book: 'Book the truck', back: 'Back home',
    kicker: 'THE FULL KOFI MENU', title: <>Pick your <em>happy.</em></>,
    body: 'Creamy, bright, cozy or bold—there is a KOFI drink for every version of you.',
    coffee: 'Iced coffees', matcha: 'Iced matcha', classics: 'Classics',
    note: 'Ask us about seasonal drops and plant-based milk options.',
    intro: 'COLOMBIAN ROOTS', energy: 'MIAMI ENERGY', made: <>Made with love,<br /><em>served with sparkle.</em></>, footer: 'Colombian coffee. Miami energy. Always made with love.', events:'Events & contact', home:'Home', top: 'Back to top',
  },
  es: {
    announcement: <>EL COFFEE TRUCK MÁS LINDO DE MIAMI <span>✦</span> ENCUÉNTRANOS ESTA SEMANA</>,
    nav: ['Menú', 'Encuéntranos', 'Nuestra historia'], book: 'Reserva el truck', back: 'Volver al inicio',
    kicker: 'EL MENÚ COMPLETO', title: <>Elige tu <em>felicidad.</em></>,
    body: 'Cremoso, fresco, reconfortante o intenso: hay un KOFI para cada versión de ti.',
    coffee: 'Cafés fríos', matcha: 'Matchas fríos', classics: 'Clásicos',
    note: 'Pregunta por los sabores de temporada y las opciones de leche vegetal.',
    intro: 'RAÍCES COLOMBIANAS', energy: 'ENERGÍA DE MIAMI', made: <>Hecho con amor,<br /><em>servido con brillo.</em></>, footer: 'Café colombiano. Energía de Miami. Siempre hecho con amor.', events:'Eventos y contacto', home:'Inicio', top: 'Volver arriba',
  },
};

const spanishDetails: Record<string,string> = {
  'Todo de Ti Morena':'Latte de espresso batido con azúcar morena','Don Kofi':'Latte de vainilla','Kofi Cero':'Latte de vainilla sin azúcar','Acaramelado':'Latte de caramelo','Horchata Latte':'Latte de horchata','Abrázame Miel':'Latte frío con miel','Bella Nutella':'Latte de Nutella','Arequipe Latte':'Latte de dulce de leche','Coco Cloud':'Agua de coco con matcha','Matchita Fresita':'Latte de matcha con fresa','Te Amo Matcha':'Latte frío de matcha','Horchata Matcha':'Agua de arroz mexicana con matcha'
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
  const [detached,setDetached]=useState(false);
  useEffect(() => {
    const saved = localStorage.getItem('kofi-lang');
    if (saved === 'en' || saved === 'es') { setLanguage(saved); document.documentElement.lang = saved; }
    const onScroll=()=>setDetached(scrollY>42);onScroll();addEventListener('scroll',onScroll,{passive:true});return()=>removeEventListener('scroll',onScroll);
  }, []);
  const setLang = (value: Language) => {
    setLanguage(value);
    localStorage.setItem('kofi-lang', value);
    document.documentElement.lang = value;
  };
  const t = text[language];
  const localized=(items:MenuItem[])=>items.map(item=>language==='es'&&spanishDetails[item.name]?{...item,detail:spanishDetails[item.name]}:item);

  return (
    <div className="menuV2" id="top">
      <div className="announcement">{t.announcement}</div>
      <nav className={`nav floatingNav menuV2Nav ${detached?'navDetached':''}`} aria-label="Main navigation">
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

        <section className="menuV2Intro" aria-label="Menu introduction"><p>{t.intro} <span>✦</span> {t.energy}</p><h2>{t.made}</h2></section>

        <section className="menuV2Lists">
          <div className="menuCharacterPeek menuCharacterWink" aria-hidden="true"><img src="/kofi-barista-wink.png" alt="" /></div>
          <MenuList title={t.coffee} number="01" items={localized(menu.coffee)} />
          <div className="menuCharacterDivider" aria-hidden="true"><img src="/kofi-barista-pour.png" alt="" /></div>
          <MenuList title={t.matcha} number="02" items={localized(menu.matcha)} />
          <MenuList title={t.classics} number="03" items={localized(menu.classics)} />
        </section>
      </main>

      <footer className="menuV2Footer">
        <div className="menuV2FooterTop"><a href="/" className="menuV2FooterLogo"><img src="/kofi-logo-transparent.png" alt="KOFI" /></a><p>{t.footer}<br /><a href="mailto:areconyg@gmail.com?subject=KOFI%20event">{t.events} ↗</a></p><div><a href="/">{t.home}</a><a href="/menu">{t.nav[0]}</a><a href="https://www.instagram.com/kofi_miam/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.tiktok.com/@kofi_miam" target="_blank" rel="noreferrer">TikTok ↗</a></div></div>
        <div className="menuV2FooterSlogan">KOFI <i>♥</i> COFFEE <i>✦</i> MATCHA <i>♥</i> MIAMI</div>
        <div className="menuV2FooterBottom"><span>© 2026 KOFI MIAMI</span><a href="https://calfers.com" target="_blank" rel="noreferrer">HECHO POR CALFERS ↗</a><a href="#top">{t.top} ↑</a></div>
      </footer>
    </div>
  );
}
