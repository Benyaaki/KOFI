'use client';
import { useEffect, useRef } from 'react';

type ZoomText = { kicker:string; titleA:string; titleB:string; outro:string; moveA:string; moveB:string };
export default function ZoomStory({text}:{text:ZoomText}){
  const section=useRef<HTMLElement>(null); const portal=useRef<HTMLDivElement>(null);
  useEffect(()=>{const update=()=>{if(!section.current||!portal.current)return;const r=section.current.getBoundingClientRect();const max=section.current.offsetHeight-window.innerHeight;const p=Math.max(0,Math.min(1,-r.top/max));const radius=10+p*125;portal.current.style.clipPath=`circle(${radius}% at 50% 52%)`;section.current.style.setProperty('--zoom-progress',String(p))};update();addEventListener('scroll',update,{passive:true});addEventListener('resize',update);return()=>{removeEventListener('scroll',update);removeEventListener('resize',update)}},[]);
  return <section className="zoomStory" ref={section}><div className="zoomPin"><div className="zoomIntro"><p>{text.kicker}</p><h2>{text.titleA}<br/><em>{text.titleB}</em></h2></div><div className="zoomPortal zoomProductWorld" ref={portal}><div className="zoomWord">KOFI</div><img className="zoomMainProduct" src="/kofi-carrier.png" alt="KOFI pink carrier with two drinks"/><img className="zoomSideDrink left" src="/drink-vanilla.png" alt="KOFI vanilla iced coffee"/><img className="zoomSideDrink right" src="/drink-matcha.png" alt="KOFI strawberry matcha"/></div><div className="zoomOutro"><p>{text.outro}</p><h2>{text.moveA}<br/><em>{text.moveB}</em></h2></div></div></section>
}
