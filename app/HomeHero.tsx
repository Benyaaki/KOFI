'use client';
import { useRef } from 'react';

export default function HomeHero(){
  const stage=useRef<HTMLDivElement>(null);
  return <section className="hero brandHero" id="top" onPointerMove={e=>{if(!stage.current)return;const r=stage.current.getBoundingClientRect();stage.current.style.setProperty('--mx',`${(e.clientX-r.left)/r.width-.5}`);stage.current.style.setProperty('--my',`${(e.clientY-r.top)/r.height-.5}`)}} onPointerLeave={()=>{stage.current?.style.setProperty('--mx','0');stage.current?.style.setProperty('--my','0')}}>
    <div className="heroCopy"><p className="eyebrow">Mobile coffee shop · Miami, FL</p><h1>COFFEE WITH<br/><em>MAIN CHARACTER</em><br/>ENERGY.</h1><p className="heroText">Colorful sips, Colombian roots, and a little bit of sparkle. Find our pink truck popping up around Miami.</p><div className="heroActions"><a className="button dark" href="#stops">Find the truck <span>↓</span></a><a className="textLink" href="/menu">Explore the menu <span>→</span></a></div></div>
    <div className="brandStage" ref={stage}>
      <div className="stageWord" aria-hidden="true">KOFI</div>
      <img className="heroCarrier" src="/kofi-carrier.png" alt="KOFI pink drink carrier with two signature drinks"/>
      <div className="characterCard"><img src="/kofi-character.jpg" alt="KOFI coffee character artwork"/><span>OUR LITTLE<br/>COFFEE FRIEND</span></div>
      <div className="miniScene"><img src="/kofi-stars.jpg" alt="KOFI drinks inspired by Latin America"/></div>
      <span className="stageSpark sparkA">✦</span><span className="stageSpark sparkB">♥</span>
    </div>
    <div className="heroTicker" aria-hidden="true"><div>MATCHA <b>✦</b> COFFEE <b>♥</b> MIAMI <b>✦</b> GOOD VIBES <b>♥</b> KOFI <b>✦</b> MATCHA <b>♥</b> COFFEE <b>✦</b> MIAMI</div></div>
  </section>
}
