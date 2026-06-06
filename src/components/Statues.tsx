import React from 'react';
import statues from '../data/statues.json';

type Statue = { src: string; title: string; meta: string };

export default function Statues({ onOpen }:{onOpen:(src:string)=>void}){
  const items: Statue[] = statues as Statue[];

  return (
    <section id="statues" className="section statues-section">
      <div className="section-row">
        <div>
          <p className="kicker">Sacred placements</p>
          <h2>Statues in Churches, Convents & Seminaries</h2>
          <p className="lead">A curated collection of devotional works created for sacred spaces — inspiring prayer, reflection, and community.</p>
        </div>
      </div>

      <div className="statues-grid">
        {items.map((s) => (
          <article className="statue-card" key={s.title}>
            <button type="button" className="statue-thumb" onClick={() => onOpen(s.src)} aria-label={s.title}><img src={s.src} alt={s.title} /></button>
            <div className="statue-meta"><strong>{s.title}</strong><br/><span>{s.meta}</span></div>
          </article>
        ))}
      </div>
    </section>
  );
}
