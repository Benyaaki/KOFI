'use client';

import { useRef } from 'react';
import type { CSSProperties } from 'react';

const photos = [
  { src: '/gallery-choco.png', alt: 'Three chocolate KOFI iced coffees', className: 'floatingPhoto photoOne', depth: 1.1 },
  { src: '/gallery-matcha-pair.png', alt: 'Two strawberry matcha KOFI drinks', className: 'floatingPhoto photoTwo', depth: -0.7 },
  { src: '/gallery-hands.png', alt: 'Customer holding a KOFI iced coffee', className: 'floatingPhoto photoThree', depth: 0.8 },
  { src: '/gallery-cookie.png', alt: 'KOFI iced coffee topped with a cookie', className: 'floatingPhoto photoFour', depth: -1 },
  { src: '/gallery-friends.png', alt: 'Friends enjoying KOFI drinks beside the coffee truck', className: 'floatingPhoto photoFive', depth: 0.65 },
];

export default function ParallaxGallery() {
  const gallery = useRef<HTMLElement>(null);
  const move = (clientX: number, clientY: number) => {
    if (!gallery.current) return;
    const rect = gallery.current.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    gallery.current.querySelectorAll<HTMLElement>('.floatingPhoto').forEach((element) => {
      const depth = Number(element.dataset.depth || 1);
      element.style.setProperty('--move-x', `${x * depth * 30}px`);
      element.style.setProperty('--move-y', `${y * depth * 24}px`);
    });
  };
  return (
    <section
      ref={gallery}
      className="floatingGallery"
      aria-label="KOFI moments"
      onPointerMove={(event) => move(event.clientX, event.clientY)}
      onPointerLeave={() => {
        gallery.current?.querySelectorAll<HTMLElement>('.floatingPhoto').forEach((element) => {
          element.style.setProperty('--move-x', '0px');
          element.style.setProperty('--move-y', '0px');
        });
      }}
    >
      <img className="galleryWatermark" src="/kofi-logo-transparent.png" alt="" aria-hidden="true" />
      {photos.map((photo) => (
        <figure className={photo.className} data-depth={photo.depth} style={{ '--move-x': '0px', '--move-y': '0px' } as CSSProperties} key={photo.src}>
          <img src={photo.src} alt={photo.alt} />
        </figure>
      ))}
    </section>
  );
}
