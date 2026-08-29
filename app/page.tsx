'use client';

import { useEffect, useState } from 'react';
import HomeHero from './HomeHero';
import ZoomStory from './ZoomStory';
import ParallaxGallery from './ParallaxGallery';
import { withBasePath } from './basePath';

const stops = [
  { day: '30', month: 'AGO', place: 'North Miami', address: 'Biscayne 112', time: '10:00 — 16:30' },
  { day: '05', month: 'SEP', place: 'Downtown Miami', address: '777 NW 2nd Ave', time: '10:00 — 18:00' },
  { day: '06', month: 'SEP', place: 'Doral', address: 'The Atlantic Doral', time: '12:00 — 18:00' },
];

type Language = 'en' | 'es';
const copy = {
  en: {
    announcement: <>MIAMI’S CUTEST COFFEE TRUCK <span>✦</span> CATCH US THIS WEEK</>, nav:['Menu','Find us','Our story'], book:'Book the truck',
    hero:{eyebrow:'Mobile coffee shop · Miami, FL',titleA:'COFFEE WITH',titleB:'MAIN CHARACTER',titleC:'ENERGY.',body:'Colorful sips, Colombian roots, and a little bit of sparkle. Find our pink truck popping up around Miami.',find:'Find the truck',menu:'Explore the menu',ticker:'MATCHA ✦ COFFEE ♥︎ MIAMI ✦ GOOD VIBES'},
    zoom:{kicker:'MADE FOR YOUR MOMENT',titleA:'START WITH',titleB:'A LITTLE SPARK.',outro:'COLOMBIAN ROOTS · MIAMI ENERGY',moveA:'MADE TO',moveB:'MOVE WITH YOU.'},
    moodLabel:'THE KOFI MOOD',moodIntro:'Not your average cup of coffee.',moodTitle:<>We’re serving <em>happy</em><br/>in a cup.</>,moodBody:'KOFI is a Colombian-owned mobile coffee shop made for sweet moments, spontaneous plans, and drinks that deserve their own photoshoot.',
    stuff:'THE GOOD STUFF',pick:<>Pick your <em>mood.</em></>,pickBody:<>Sweet, creamy, bold or green.<br/>There’s a KOFI for every version of you.</>,fresh:<>FRESH<br/>&amp; CUTE<br/>DAILY</>,full:'Get the full menu',
    drinks:[['Strawberry matcha latte','fan favorite'],['Coconut water with matcha','iced matcha'],['Vanilla latte','iced coffee'],['Horchata latte, duh','iced coffee']],
    where:'WHERE TO FIND US',catch:<>Catch us<br/><em>around town.</em></>,whereBody:'We’re always on the move. Follow along for last-minute pop-ups, collabs and special drops.',follow:'Follow @kofi_miam',
    booking:'PARTIES · WEDDINGS · BRAND EVENTS · JUST BECAUSE',party:<>Bring KOFI<br/>to your <em>party.</em></>,cute:'Let’s make it cute',mobile:<>Mobile coffee shop<br/>Miami, Florida</>,events:'Events & contact',slogan:<>KOFI <i>♥︎</i> COFFEE <i>✦</i> MATCHA <i>♥︎</i> MIAMI</>,top:'BACK TO TOP'
  },
  es: {
    announcement: <>EL COFFEE TRUCK MÁS LINDO DE MIAMI <span>✦</span> ENCUÉNTRANOS ESTA SEMANA</>, nav:['Menú','Encuéntranos','Nuestra historia'], book:'Reserva el truck',
    hero:{eyebrow:'Cafetería móvil · Miami, FL',titleA:'CAFÉ CON',titleB:'ENERGÍA DE',titleC:'PROTAGONISTA.',body:'Bebidas llenas de color, raíces colombianas y un poquito de brillo. Encuentra nuestro truck rosado recorriendo Miami.',find:'Encuentra el truck',menu:'Explora el menú',ticker:'MATCHA ✦ CAFÉ ♥︎ MIAMI ✦ BUENA ENERGÍA'},
    zoom:{kicker:'HECHO PARA TU MOMENTO',titleA:'EMPIEZA CON',titleB:'UN POCO DE BRILLO.',outro:'RAÍCES COLOMBIANAS · ENERGÍA DE MIAMI',moveA:'HECHO PARA',moveB:'IR CONTIGO.'},
    moodLabel:'EL MOOD KOFI',moodIntro:'No es una taza de café cualquiera.',moodTitle:<>Servimos <em>felicidad</em><br/>en cada vaso.</>,moodBody:'KOFI es una cafetería móvil de dueños colombianos, creada para momentos dulces, planes espontáneos y bebidas que merecen su propia sesión de fotos.',
    stuff:'LO BUENO',pick:<>Elige tu <em>mood.</em></>,pickBody:<>Dulce, cremoso, intenso o verde.<br/>Hay un KOFI para cada versión de ti.</>,fresh:<>FRESCO<br/>&amp; LINDO<br/>A DIARIO</>,full:'Ver el menú completo',
    drinks:[['Latte de matcha con fresa','favorito'],['Agua de coco con matcha','matcha frío'],['Latte de vainilla','café frío'],['Latte de horchata','café frío']],
    where:'DÓNDE ENCONTRARNOS',catch:<>Encuéntranos<br/><em>por la ciudad.</em></>,whereBody:'Siempre estamos en movimiento. Síguenos para conocer pop-ups, colaboraciones y lanzamientos especiales.',follow:'Seguir a @kofi_miam',
    booking:'FIESTAS · BODAS · EVENTOS DE MARCA · PORQUE SÍ',party:<>Lleva KOFI<br/>a tu <em>fiesta.</em></>,cute:'Hagámoslo especial',mobile:<>Cafetería móvil<br/>Miami, Florida</>,events:'Eventos y contacto',slogan:<>KOFI <i>♥︎</i> COFFEE <i>✦</i> MATCHA <i>♥︎</i> MIAMI</>,top:'VOLVER ARRIBA'
  }
};
const drinkNames=['Matchita Fresita','Coco Cloud','Don Kofi','Horchata Latte'];
const prices=['$7.25','$6.50','$5.75','$7.25'];

export default function Home() {
  const [language,setLanguage]=useState<Language>('en');
  const [detached,setDetached]=useState(false);
  const [menuOpen,setMenuOpen]=useState(false);
  useEffect(()=>{const saved=localStorage.getItem('kofi-lang');if(saved==='en'||saved==='es'){setLanguage(saved);document.documentElement.lang=saved}const onScroll=()=>setDetached(scrollY>42);onScroll();addEventListener('scroll',onScroll,{passive:true});return()=>removeEventListener('scroll',onScroll)},[]);
  const setLang=(lang:Language)=>{setLanguage(lang);localStorage.setItem('kofi-lang',lang);document.documentElement.lang=lang};
  const t=copy[language];
  return (
    <main>
      <div className="announcement">{t.announcement}</div>
      <nav className={`nav floatingNav ${detached?'navDetached':''}`} aria-label="Main navigation">
        <a className="brand logoPng" href="#top" aria-label="Kofi home"><img src={withBasePath('/kofi-logo-transparent.png')} alt="KOFI" /></a>
        <div className="navLinks"><a href={withBasePath('/menu/')}>{t.nav[0]}</a><a href="#stops">{t.nav[1]}</a><a href="#story">{t.nav[2]}</a></div>
        <div className="homeNavActions"><button className={`mobileMenuToggle ${menuOpen?'open':''}`} type="button" aria-label={menuOpen?'Close menu':'Open menu'} aria-expanded={menuOpen} onClick={()=>setMenuOpen(value=>!value)}><span/><span/></button><div className="menuV2Lang" aria-label="Language"><button className={language==='en'?'active':''} onClick={()=>setLang('en')}>EN</button><span>/</span><button className={language==='es'?'active':''} onClick={()=>setLang('es')}>ES</button></div><a className="navCta" href="https://www.instagram.com/kofi_miam/" target="_blank" rel="noreferrer">{t.book} <span>↗︎</span></a></div>
        <div className={`mobileMenuPanel ${menuOpen?'open':''}`}><a href={withBasePath('/menu/')} onClick={()=>setMenuOpen(false)}>{t.nav[0]}</a><a href="#stops" onClick={()=>setMenuOpen(false)}>{t.nav[1]}</a><a href="#story" onClick={()=>setMenuOpen(false)}>{t.nav[2]}</a><a href="https://www.instagram.com/kofi_miam/" target="_blank" rel="noreferrer">{t.book} <span>↗︎</span></a></div>
      </nav>

      <HomeHero text={t.hero} />

      <ZoomStory text={t.zoom} />

      <section className="intro" id="story">
        <div className="introLabel"><span>01</span> {t.moodLabel}</div>
        <div className="introCopy"><p>{t.moodIntro}</p><h2>{t.moodTitle}</h2><p className="introBody">{t.moodBody}</p></div>
        <div className="miniStamp">MADE<br />WITH<br />LOVE<br /><span>♥︎</span></div>
      </section>

      <div className="drinkPairMoment" aria-label="Two KOFI signature iced coffees"><img className="drinkPairPrimary" src={withBasePath('/drink-marshmallow.png')} alt="KOFI marshmallow iced coffee"/><img className="drinkPairSecondary" src={withBasePath('/drink-vanilla.png')} alt="KOFI vanilla iced coffee"/></div>

      <ParallaxGallery />

      <section className="menuSection" id="menu">
        <div className="sectionHead"><div><p className="sectionNo">02 — {t.stuff}</p><h2>{t.pick}</h2></div><p>{t.pickBody}</p></div>
        <div className="menuGrid">
          <div className="menuPhoto cathedral"><img src={withBasePath('/drinks-lineup-hq.png')} alt="KOFI signature drink lineup" /><span className="roundLabel">{t.fresh}</span></div>
          <div className="menuList">
            {drinkNames.map((name, index) => <article className="menuItem" key={name}><span className="itemNumber">0{index + 1}</span><div><p className="itemTag">{t.drinks[index][1]}</p><h3>{name}</h3><p>{t.drinks[index][0]}</p></div><strong>{prices[index]}</strong></article>)}
            <a className="fullMenu" href={withBasePath('/menu/')}>{t.full} <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="stopsSection" id="stops">
        <div className="stopsIntro"><p className="sectionNo">03 — {t.where}</p><h2>{t.catch}</h2><p>{t.whereBody}</p><a className="button light" href="https://www.instagram.com/kofi_miam" target="_blank" rel="noreferrer">{t.follow} <span>↗︎</span></a></div>
        <div className="stopsList">{stops.map((stop) => <article className="stop" key={`${stop.day}-${stop.place}`}><div className="date"><strong>{stop.day}</strong><span>{stop.month}</span></div><div className="stopPlace"><p>{stop.place}</p><span>{stop.address}</span></div><div className="stopTime">{stop.time}</div><span className="arrow">↗︎</span></article>)}</div>
      </section>

      <section className="booking"><picture><source media="(max-width: 560px)" srcSet={withBasePath('/kofi-front.jpg')}/><img src={withBasePath('/kofi-front-hq.png')} alt="Front view of the pink KOFI coffee truck" /></picture><div className="bookingOverlay"><p>{t.booking}</p><h2>{t.party}</h2><a className="button cream" href="mailto:areconyg@gmail.com?subject=KOFI%20event%20inquiry">{t.cute} <span>↗︎</span></a></div></section>

      <footer className="homeFooter"><div className="footerTop"><a className="footerLogo" href="#top"><img src={withBasePath('/kofi-logo-transparent.png')} alt="KOFI" /></a><p>{t.mobile}<br/><a href="mailto:areconyg@gmail.com?subject=KOFI%20event">{t.events} ↗︎</a></p><div><a href="https://www.instagram.com/kofi_miam/" target="_blank" rel="noreferrer">Instagram ↗︎</a><a href="https://www.tiktok.com/@kofi_miam" target="_blank" rel="noreferrer">TikTok ↗︎</a><a href={withBasePath('/menu/')}>{t.full} →</a></div></div><div className="footerSlogan">{t.slogan}</div><div className="footerBottom"><span>© 2026 KOFI MIAMI</span><a href="https://calfers.com" target="_blank" rel="noreferrer">HECHO POR CALFERS ↗︎</a><a href="#top">{t.top} ↑</a></div></footer>
    </main>
  );
}
