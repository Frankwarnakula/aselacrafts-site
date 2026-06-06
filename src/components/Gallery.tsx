import React from 'react';
import { motion } from 'framer-motion';

const artworkImages = [
  { title: 'Lion Face Soap Carving', category: 'Soap carving tutorial', description: 'Fine hand-carved detail shaped with patience and precision.', img: 'https://i.ytimg.com/vi/TmKlE3NPguw/hqdefault.jpg', href: 'https://www.youtube.com/watch?v=TmKlE3NPguw' },
  { title: 'Horse Head Carving', category: 'Handmade carving', description: 'Expressive animal form created from simple materials.', img: 'https://i.ytimg.com/vi/d3iQ516-P2U/hqdefault.jpg', href: 'https://www.youtube.com/watch?v=d3iQ516-P2U' },
  { title: 'Cat Soap Carving', category: 'Step-by-step craft', description: 'A calm, approachable tutorial for craft lovers.', img: 'https://i.ytimg.com/vi/c-O429apN-4/hqdefault.jpg', href: 'https://www.youtube.com/watch?v=c-O429apN-4' },
  { title: 'Turtle Carving', category: 'Short-form artwork', description: 'Compact handmade art designed for social video audiences.', img: 'https://i.ytimg.com/vi/UjJGfH5Faqc/hqdefault.jpg', href: 'https://www.youtube.com/shorts/UjJGfH5Faqc' },
];

export default function Gallery(){
  const youtube = 'https://www.youtube.com/@aselacrafts';
  return (
    <section id="gallery" className="section featured">
      <div className="section-row">
        <div>
          <p className="kicker">Featured works</p>
          <h2>Crafted with devotion. Timeless in beauty.</h2>
        </div>
        <a href={youtube} target="_blank" rel="noreferrer" className="text-link">View full gallery</a>
      </div>

      <div className="cards-grid">
        {artworkImages.map((item, index) => (
          <motion.a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="art-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
            <img src={item.img} alt={item.title} />
            <div>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
