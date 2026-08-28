const stops = [
  { day: '30', month: 'AGO', place: 'North Miami', address: 'Biscayne 112', time: '10:00 — 16:30' },
  { day: '05', month: 'SEP', place: 'Downtown Miami', address: '777 NW 2nd Ave', time: '10:00 — 18:00' },
  { day: '06', month: 'SEP', place: 'Doral', address: 'The Atlantic Doral', time: '12:00 — 18:00' },
];

const drinks = [
  { name: 'Matchita Fresita', detail: 'Strawberry matcha latte', price: '$7.25', tag: 'fan favorite' },
  { name: 'Coco Cloud', detail: 'Coconut water with matcha', price: '$6.50', tag: 'iced matcha' },
  { name: 'Don Kofi', detail: 'Vanilla latte', price: '$5.75', tag: 'iced coffee' },
  { name: 'Horchata Latte', detail: 'Horchata latte, duh', price: '$7.25', tag: 'iced coffee' },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">MIAMI’S CUTEST COFFEE TRUCK <span>✦</span> CATCH US THIS WEEK</div>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Kofi home">KOFI<span>®</span></a>
        <div className="navLinks"><a href="#menu">Menu</a><a href="#stops">Find us</a><a href="#story">Our story</a></div>
        <a className="navCta" href="mailto:areconyg@gmail.com?subject=Book%20the%20KOFI%20truck">Book the truck <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span className="pulse" /> Mobile coffee shop · Miami, FL</p>
          <h1>Coffee with<br /><em>main character</em><br />energy.</h1>
          <p className="heroText">Colorful sips, good energy, and a little bit of sparkle. Find our pink truck popping up around Miami.</p>
          <div className="heroActions"><a className="button dark" href="#stops">Find the truck <span>↓</span></a><a className="textLink" href="#menu">Explore the menu <span>→</span></a></div>
        </div>
        <div className="heroVisual">
          <div className="sunburst" aria-hidden="true" />
          <div className="photoFrame heroPhoto"><img src="/kofi-truck.jpg" alt="The pink KOFI mobile coffee truck in Miami" /></div>
          <div className="heroSticker stickerTop">100%<br />GOOD<br />VIBES</div><div className="heroSticker stickerBottom">K<span>♥</span>FI</div>
          <p className="scribble">love at first sip!</p>
        </div>
        <div className="heroTicker" aria-hidden="true"><span>MATCHA</span><b>✦</b><span>COFFEE</span><b>✦</b><span>MIAMI</span><b>✦</b><span>GOOD VIBES</span></div>
      </section>

      <section className="intro" id="story">
        <div className="introLabel"><span>01</span> THE KOFI MOOD</div>
        <div className="introCopy"><p>Not your average cup of coffee.</p><h2>We’re serving <em>happy</em><br />in a cup.</h2><p className="introBody">KOFI is a Colombian-owned mobile coffee shop made for sweet moments, spontaneous plans, and drinks that deserve their own photoshoot.</p></div>
        <div className="miniStamp">MADE<br />WITH<br />LOVE<br /><span>♥</span></div>
      </section>

      <section className="gallery" aria-label="KOFI moments">
        <figure className="galleryTall"><img src="/kofi-matcha.jpg" alt="Iced matcha in front of the KOFI truck" /></figure>
        <figure className="galleryWide"><img src="/kofi-gems.jpg" alt="Three colorful KOFI iced drinks decorated with gems" /></figure>
        <figure className="gallerySmall"><img src="/kofi-girl.jpg" alt="Customer enjoying a drink beside the KOFI truck" /></figure>
        <div className="galleryNote">sip<br /><em>sip</em><br />hooray! <span>✦</span></div>
      </section>

      <section className="menuSection" id="menu">
        <div className="sectionHead"><div><p className="sectionNo">02 — THE GOOD STUFF</p><h2>Pick your <em>mood.</em></h2></div><p>Sweet, creamy, bold or green.<br />There’s a KOFI for every version of you.</p></div>
        <div className="menuGrid">
          <div className="menuPhoto"><img src="/kofi-two-drinks.jpg" alt="Two signature KOFI iced drinks" /><span className="roundLabel">FRESH<br />&amp; CUTE<br />DAILY</span></div>
          <div className="menuList">
            {drinks.map((drink, index) => <article className="menuItem" key={drink.name}><span className="itemNumber">0{index + 1}</span><div><p className="itemTag">{drink.tag}</p><h3>{drink.name}</h3><p>{drink.detail}</p></div><strong>{drink.price}</strong></article>)}
            <a className="fullMenu" href="mailto:areconyg@gmail.com?subject=KOFI%20full%20menu">Get the full menu <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="stopsSection" id="stops">
        <div className="stopsIntro"><p className="sectionNo">03 — WHERE TO FIND US</p><h2>Catch us<br /><em>around town.</em></h2><p>We’re always on the move. Follow along for last-minute pop-ups, collabs and special drops.</p><a className="button light" href="https://www.instagram.com/kofi_miam" target="_blank" rel="noreferrer">Follow @kofi_miam <span>↗</span></a></div>
        <div className="stopsList">{stops.map((stop) => <article className="stop" key={`${stop.day}-${stop.place}`}><div className="date"><strong>{stop.day}</strong><span>{stop.month}</span></div><div className="stopPlace"><p>{stop.place}</p><span>{stop.address}</span></div><div className="stopTime">{stop.time}</div><span className="arrow">↗</span></article>)}</div>
      </section>

      <section className="booking"><img src="/kofi-front.jpg" alt="Front view of the pink KOFI coffee truck" /><div className="bookingOverlay"><p>PARTIES · WEDDINGS · BRAND EVENTS · JUST BECAUSE</p><h2>Bring KOFI<br />to your <em>party.</em></h2><a className="button cream" href="mailto:areconyg@gmail.com?subject=KOFI%20event%20inquiry">Let’s make it cute <span>↗</span></a></div></section>

      <footer><div className="footerTop"><a className="brand footerBrand" href="#top">KOFI<span>®</span></a><p>Mobile coffee shop<br />Miami, Florida</p><div><a href="https://www.instagram.com/kofi_miam" target="_blank" rel="noreferrer">Instagram ↗</a><a href="mailto:areconyg@gmail.com">Email us ↗</a></div></div><div className="footerBottom"><span>© 2026 KOFI MIAMI</span><span>COLOMBIAN COFFEE, MIAMI ENERGY.</span><a href="#top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
