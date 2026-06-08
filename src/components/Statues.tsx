import React from 'react';
import statues from '../data/statues.json';

type StatueImage = { src: string; title: string };
type Statue = { placeName: string; placeLocation: string; placeLocationLink?: string; images: StatueImage[] };

export default function Statues({ onOpen }:{onOpen:(src:string)=>void}){
  const items: Statue[] = statues as Statue[];
  return (
    <section id="statues" className="section statues-section">
      <div className="section-row">
        <div>
          <p className="kicker">Sacred placements</p>
          <h2>My Creations in Churches, Convents & Seminaries</h2>
          <p className="lead">A curated collection of devotional works created for sacred spaces — inspiring prayer, reflection, and community.</p>
        </div>
      </div>

      <div className="statues-grid">
        {items.map((s) => {
          const img = s.images && s.images.length ? s.images[0] : null;
          return (
          <article className="statue-card" key={s.placeName}>
            <button type="button" className="statue-thumb" onClick={() => img && onOpen(img.src)} aria-label={s.placeName}>{img ? <img src={img.src} alt={img.title || s.placeName} /> : null}</button>
            <div className="statue-meta"><strong>{s.placeName}</strong><br/><span>{s.placeLocation}</span></div>
          </article>
        )})}
      </div>
    </section>
  );
}
