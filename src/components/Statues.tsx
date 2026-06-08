import React from 'react';
import statues from '../data/statues.json';

type StatueImage = { src: string; title: string };
type Statue = { placeName: string; placeLocation: string; placeLocationLink?: string; images: StatueImage[]; order?: number };

function shuffleArray<T>(arr: T[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

export default function Statues({ onOpen }:{onOpen:(placeIndex:number,imageIndex:number)=>void}){
  const raw: Statue[] = statues as Statue[];
  // keep items with order===1 fixed at start, shuffle the rest each load
  const fixed = raw.filter((r) => r.order === 1);
  const others = raw.filter((r) => r.order !== 1);
  const shuffled = [...others];
  shuffleArray(shuffled);
  const items: Statue[] = [...fixed, ...shuffled];
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
          const originalIndex = raw.indexOf(s);
          return (
          <article className="statue-card" key={s.placeName}>
            <button type="button" className="statue-thumb" onClick={() => img && onOpen(originalIndex, 0)} aria-label={s.placeName}>{img ? <img src={img.src} alt={img.title || s.placeName} /> : null}</button>
            <div className="statue-meta"><strong>{s.placeName}</strong><br/><span>{s.placeLocation}</span></div>
          </article>
        )})}
      </div>
    </section>
  );
}
