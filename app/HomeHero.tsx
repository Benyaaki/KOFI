'use client';
import { useRef } from 'react';

type HeroText = { eyebrow:string; titleA:string; titleB:string; titleC:string; body:string; find:string; menu:string; ticker:string };
export default function HomeHero({text}:{text:HeroText}){
  const stage=useRef<HTMLDivElement>(null);
  return <section className="hero brandHero" id="top" onPointerMove={e=>{if(!stage.current)return;const r=stage.current.getBoundingClientRect();stage.current.style.setProperty('--mx',`${(e.clientX-r.left)/r.width-.5}`);stage.current.style.setProperty('--my',`${(e.clientY-r.top)/r.height-.5}`)}} onPointerLeave={()=>{stage.current?.style.setProperty('--mx','0');stage.current?.style.setProperty('--my','0')}}>
    <div className="heroCopy"><p className="eyebrow">{text.eyebrow}</p><h1>{text.titleA}<br/><em>{text.titleB}</em><br/>{text.titleC}</h1><p className="heroText">{text.body}</p><div className="heroActions"><a className="button dark" href="#stops">{text.find} <span>↓</span></a><a className="textLink" href="/menu">{text.menu} <span>→</span></a></div></div>
    <div className="brandStage" ref={stage}>
      <div className="stageWord" aria-hidden="true">KOFI</div>
      <img className="heroCarrier" src="/kofi-carrier.png" alt="KOFI pink drink carrier with two signature drinks"/>
      <span className="stageSpark sparkA">✦</span>
    </div>
    <div className="heroTicker" aria-hidden="true"><div className="tickerLoop"><span>{text.ticker} <b>✦</b> {text.ticker} <b>♥</b> KOFI <b>✦</b> </span><span>{text.ticker} <b>✦</b> {text.ticker} <b>♥</b> KOFI <b>✦</b> </span></div></div>
  </section>
}
