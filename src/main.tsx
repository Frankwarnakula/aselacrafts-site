import React from 'react';
import { createRoot } from 'react-dom/client';
import * as Lucide from 'lucide-react';
import { ArrowRight, Mail, MapPin, Menu, Play, Sparkles, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles.css';

const youtube = 'https://www.youtube.com/@aselacrafts';
const facebook = 'https://www.facebook.com/AselaCraft';

const artworkImages = [
  {
    title: 'Lion Face Soap Carving',
    category: 'Soap carving tutorial',
    description: 'Fine hand-carved detail shaped with patience and precision.',
    img: 'https://i.ytimg.com/vi/TmKlE3NPguw/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=TmKlE3NPguw',
  },
  {
    title: 'Horse Head Carving',
    category: 'Handmade carving',
    description: 'Expressive animal form created from simple materials.',
    img: 'https://i.ytimg.com/vi/d3iQ516-P2U/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=d3iQ516-P2U',
  },
  {
    title: 'Cat Soap Carving',
    category: 'Step-by-step craft',
    description: 'A calm, approachable tutorial for craft lovers.',
    img: 'https://i.ytimg.com/vi/c-O429apN-4/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=c-O429apN-4',
  },
  {
    title: 'Turtle Carving',
    category: 'Short-form artwork',
    description: 'Compact handmade art designed for social video audiences.',
    img: 'https://i.ytimg.com/vi/UjJGfH5Faqc/hqdefault.jpg',
    href: 'https://www.youtube.com/shorts/UjJGfH5Faqc',
  },
];

const socials = [
  { label: 'YouTube', href: youtube, icon: <Play size={18} />, text: 'Watch & subscribe' },
  { label: 'Facebook', href: facebook, icon: <Sparkles size={18} />, text: 'Like & follow' },
  { label: 'Instagram', href: '#', icon: <Sparkles size={18} />, text: 'Add Instagram link' },
  { label: 'TikTok', href: '#', icon: <Music2 size={18} />, text: 'Add TikTok link' },
];

function Logo() {
  return (
    <a href="#home" className="logo" aria-label="AselaCrafts home">
      <span className="logo-mark">A</span>
      <span>AselaCrafts</span>
    </a>
  );
}

function App() {
  return (
    <main className="site">
      <header className="header">
        <Logo />
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#videos">Videos</a>
          <a href="#social">Social</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-socials" aria-label="Social links">
          <a href={youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Play size={20} /></a>
          <a href={facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Sparkles size={19} /></a>
          <a href="#social" aria-label="Instagram"><Sparkles size={19} /></a>
          <a href="#social" aria-label="TikTok"><Music2 size={19} /></a>
        </div>
        <button className="menu-button" aria-label="Open menu"><Menu /></button>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <motion.p className="kicker" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            Handmade artworks
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            Creativity in Every <span>Detail</span>
          </motion.h1>
          <motion.p className="tagline" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
            # Art shaped by patience, faith and gifted hands.
          </motion.p>
          <motion.p className="lead" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
            Explore unique handmade statues, carvings and devotional artworks by <strong>Asela Warnakula</strong>, the sole artist behind AselaCrafts.
          </motion.p>
          <motion.div className="signature" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}>
            Asela Warnakula
            <small>Artist. Sculptor. Devotee.</small>
          </motion.div>
          <motion.div className="actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}>
            <a href="#gallery" className="btn btn-dark">Browse Gallery <ArrowRight size={17} /></a>
            <a href={youtube} target="_blank" rel="noreferrer" className="btn btn-light"><Play size={17} /> Watch on YouTube</a>
          </motion.div>
        </div>

        <motion.div className="hero-collage" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.18 }}>
          <div className="paper paper-one"><img src="https://i.ytimg.com/vi/TmKlE3NPguw/hqdefault.jpg" alt="AselaCrafts carving artwork" /></div>
          <div className="paper paper-two"><img src="https://images.unsplash.com/photo-1544914379-806667cd9489?auto=format&fit=crop&w=1000&q=80" alt="Handcrafted statue detail" /></div>
          <div className="paper paper-three"><img src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1000&q=80" alt="Artist working with carving tools" /></div>
          <div className="paper paper-four"><img src="https://i.ytimg.com/vi/d3iQ516-P2U/hqdefault.jpg" alt="AselaCrafts handmade carving" /></div>
        </motion.div>
      </section>

      <section id="statues" className="section statues-section">
        <div className="section-row">
          <div>
            <p className="kicker">Sacred placements</p>
            <h2>My Statues at Churches, Convents and Seminaries</h2>
            <p className="lead">A selection of devotional works installed in spiritual spaces — created for prayer, reflection and community.</p>
          </div>
          <a href={youtube} target="_blank" rel="noreferrer" className="text-link">View full gallery <ArrowRight size={18} /></a>
        </div>

        <div className="statues-grid">
          <article className="statue-card">
            <img src="https://via.placeholder.com/800x600?text=St+Mary+Church" alt="St Mary Church statue" />
            <div className="statue-meta">
              <strong>St Mary Church</strong>
              <span>Parish installation — 2021</span>
            </div>
          </article>
          <article className="statue-card">
            <img src="https://via.placeholder.com/800x600?text=Convent+Altar" alt="Convent altar statue" />
            <div className="statue-meta">
              <strong>Convent Chapel</strong>
              <span>Devotional altar piece — 2019</span>
            </div>
          </article>
          <article className="statue-card">
            <img src="https://via.placeholder.com/800x600?text=Seminary+Collection" alt="Seminary statue" />
            <div className="statue-meta">
              <strong>Seminary Collection</strong>
              <span>Teaching + liturgical works — 2022</span>
            </div>
          </article>
        </div>
      </section>

      <section id="about" className="section about-band">
        <div className="about-copy">
          <p className="kicker">About the artist</p>
          <h2>One creator, many forms of handmade expression.</h2>
          <p>
            AselaCrafts is the personal brand of Asela Warnakula, created to showcase his handmade sculptures, carvings, devotional artwork and creative tutorials. The design of this site is intentionally clean and gallery-like, allowing the artwork to feel premium, warm and memorable.
          </p>
        </div>
        <div className="stats">
          <article><strong>1.4K+</strong><span>YouTube subscribers</span></article>
          <article><strong>186+</strong><span>Videos published</span></article>
          <article><strong>100%</strong><span>Handmade art</span></article>
        </div>
      </section>

      <section id="gallery" className="section featured">
        <div className="section-row">
          <div>
            <p className="kicker">Featured works</p>
            <h2>Crafted with devotion. Timeless in beauty.</h2>
          </div>
          <a href={youtube} target="_blank" rel="noreferrer" className="text-link">View full gallery <ArrowRight size={18} /></a>
        </div>

        <div className="cards-grid">
          {artworkImages.map((item, index) => (
            <motion.a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="art-card"
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <img src={item.img} alt={item.title} />
              <div>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ArrowRight className="card-arrow" size={18} />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="videos" className="section video-section">
        <div>
          <p className="kicker">Watch the process</p>
          <h2>Follow the artwork from idea to finished creation.</h2>
          <p>Feature tutorials, short videos and behind-the-scenes craft moments directly from AselaCrafts social channels.</p>
        </div>
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed?listType=user_uploads&list=aselacrafts"
            title="AselaCrafts YouTube uploads"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>

      <section id="social" className="section social-section">
        <div className="social-copy">
          <p className="kicker">Connect & follow</p>
          <h2>Join the AselaCrafts community</h2>
          <p>Stay inspired with behind-the-scenes creation, new artworks, tutorials and short craft videos.</p>
        </div>
        <div className="social-cards">
          {socials.map(({ label, href, icon, text }) => (
            <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="social-card" key={label}>
              {icon}
              <strong>{label}</strong>
              <span>{text}</span>
              <ArrowRight size={18} />
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-panel">
        <div>
          <p className="kicker">Custom orders & enquiries</p>
          <h2>Interested in a handmade artwork?</h2>
          <p>Use this section for commissions, collaborations, devotional statues, gifts, workshops or media enquiries.</p>
        </div>
        <a href="mailto:hello@aselacrafts.com" className="btn btn-dark"><Mail size={18} /> Contact AselaCrafts</a>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <Logo />
          <p>Handmade statues and carvings created with devotion, tradition and timeless craftsmanship.</p>
          <small>© {new Date().getFullYear()} AselaCrafts. All rights reserved.</small>
        </div>
        <div>
          <h4>Quick links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#videos">Videos</a>
        </div>
        <div>
          <h4>Categories</h4>
          <span>Soap Carving</span>
          <span>Wood Carving</span>
          <span>Devotional Art</span>
          <span>Custom Orders</span>
        </div>
        <div>
          <h4>Get in touch</h4>
          <span><MapPin size={15} /> Sri Lanka</span>
          <span><Mail size={15} /> hello@aselacrafts.com</span>
          <a href={facebook} target="_blank" rel="noreferrer">Facebook Page</a>
        </div>
      </footer>
    </main>
  );
}

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  // eslint-disable-next-line no-console
  console.error('Root element not found: #root');
}
