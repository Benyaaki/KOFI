'use client';
import { useEffect, useRef } from 'react';

export default function ZoomStory(){
  const section=useRef<HTMLElement>(null); const portal=useRef<HTMLDivElement>(null); const photo=useRef<HTMLImageElement>(null);
  useEffect(()=>{const update=()=>{if(!section.current||!portal.current)return;const r=section.current.getBoundingClientRect();const max=section.current.offsetHeight-window.innerHeight;const p=Math.max(0,Math.min(1,-r.top/max));const scale=1+p*p*7.5;portal.current.style.transform=`translate(-50%,-50%) scale(${scale})`;if(photo.current)photo.current.style.transform=`scale(${1+p*.18})`;section.current.style.setProperty('--zoom-progress',String(p))};update();addEventListener('scroll',update,{passive:true});addEventListener('resize',update);return()=>{removeEventListener('scroll',update);removeEventListener('resize',update)}},[]);
  return <section className="zoomStory" ref={section}><div className="zoomPin"><div className="zoomIntro"><p>FROM COLOMBIA TO MIAMI</p><h2>A SMALL BAG.<br/><em>A BIG STORY.</em></h2></div><div className="zoomPortal" ref={portal}><img ref={photo} src="/kofi-stars.jpg" alt="KOFI drinks celebrating Latin American roots"/></div><img className="zoomBag" src="/kofi-carrier.png" alt="KOFI signature drink carrier"/><div className="zoomOutro"><p>COLOMBIAN ROOTS · MIAMI ENERGY</p><h2>MADE TO<br/><em>MOVE WITH YOU.</em></h2></div></div></section>
}
