'use client';
import { useEffect, useRef, useState } from 'react';

const slides = [
  { src:'/drink-matcha.png', name:'Matchita Fresita', tone:'matcha' },
  { src:'/drink-brown-sugar.png', name:'Todo de Ti Morena', tone:'coffee' },
  { src:'/drink-vanilla.png', name:'Don Kofi', tone:'vanilla' },
  { src:'/drink-marshmallow.png', name:'Marshmallow Latte', tone:'mallow' },
];

export default function HomeHero(){
  const [active,setActive]=useState(0); const startX=useRef(0);
  const move=(next:number)=>setActive((next+slides.length)%slides.length);
  useEffect(()=>{const timer=setInterval(()=>setActive(v=>(v+1)%slides.length),5200);return()=>clearInterval(timer)},[]);
  return <section className={`hero productHero ${slides[active].tone}`} id="top">
    <div className="heroCopy">
      <p className="eyebrow">Mobile coffee shop · Miami, FL</p>
      <h1>COFFEE WITH<br/><em>MAIN CHARACTER</em><br/>ENERGY.</h1>
      <p className="heroText">Colorful sips, Colombian roots, and a little bit of sparkle. Meet the drink that matches your mood.</p>
      <div className="heroActions"><a className="button dark" href="#stops">Find the truck <span>↓</span></a><a className="textLink" href="/menu">Explore the menu <span>→</span></a></div>
    </div>
    <div className="productCarousel" aria-roledescription="carousel" aria-label="KOFI signature drinks" onTouchStart={e=>startX.current=e.touches[0].clientX} onTouchEnd={e=>{const d=e.changedTouches[0].clientX-startX.current;if(Math.abs(d)>45)move(active+(d<0?1:-1))}}>
      <div className="productHalo" aria-hidden="true">K</div>
      <div className="productTrack" style={{transform:`translateX(-${active*100}%)`}}>{slides.map((slide,i)=><figure className="productSlide" key={slide.src} aria-hidden={active!==i}><img src={slide.src} alt={slide.name}/><figcaption><span>0{i+1}</span>{slide.name}</figcaption></figure>)}</div>
      <div className="carouselNav"><button onClick={()=>move(active-1)} aria-label="Previous drink">←</button><div>{slides.map((s,i)=><button key={s.src} className={i===active?'active':''} onClick={()=>setActive(i)} aria-label={`Show ${s.name}`}/>)}</div><button onClick={()=>move(active+1)} aria-label="Next drink">→</button></div>
      <div className="heroBadge">FRESHLY<br/>MADE<br/><b>♥</b></div>
    </div>
    <div className="heroTicker" aria-hidden="true"><span>MATCHA</span><b>✦</b><span>COFFEE</span><b>✦</b><span>MIAMI</span><b>✦</b><span>GOOD VIBES</span></div>
  </section>
}
