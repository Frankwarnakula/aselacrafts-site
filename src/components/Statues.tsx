import React from 'react';

type Statue = { src: string; title: string; meta: string };

export default function Statues({ onOpen }:{onOpen:(src:string)=>void}){
  const items: Statue[] = [
    { src: 'https://scontent.fmel10-1.fna.fbcdn.net/v/t39.30808-6/715910530_980313404967925_2536945770520175660_n.jpg?oe=6A2A3984', title: 'Infant Jesus Church', meta: 'Kalamulla, Kalutara, Sri Lanka' },
    { src: 'https://via.placeholder.com/800x600?text=Convent+Altar', title: 'Convent Chapel', meta: 'Devotional altar piece — 2019' },
    { src: 'https://via.placeholder.com/800x600?text=Seminary+Collection', title: 'Seminary Collection', meta: 'Teaching + liturgical works — 2022' },
  ];

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
            <div className="statue-meta"><strong>{s.title}</strong><span>{s.meta}</span></div>
          </article>
        ))}
      </div>
    </section>
  );
}
