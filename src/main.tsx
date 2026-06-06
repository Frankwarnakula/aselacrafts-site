import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Statues from './components/Statues';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { ArrowRight, Mail } from 'lucide-react';

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


function App() {
  const [lightboxSrc, setLightboxSrc] = React.useState<string | null>(null);

  return (
    <main className="site">
      <Header />
      <Hero />
      <Statues onOpen={(s) => setLightboxSrc(s)} />
      <Gallery />
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

      <section id="videos" className="section video-section">
        <div>
          <p className="kicker">Watch the process</p>
          <h2>Follow the artwork from idea to finished creation.</h2>
          <p>Feature tutorials, short videos and behind-the-scenes craft moments directly from AselaCrafts social channels.</p>
        </div>
        <div className="video-frame">
          <iframe src="https://www.youtube.com/embed?listType=user_uploads&list=aselacrafts" title="AselaCrafts YouTube uploads" loading="lazy" allowFullScreen />
        </div>
      </section>

      <section id="social" className="section social-section">
        <div className="social-copy">
          <p className="kicker">Connect & follow</p>
          <h2>Join the AselaCrafts community</h2>
          <p>Stay inspired with behind-the-scenes creation, new artworks, tutorials and short craft videos.</p>
        </div>
      </section>

      <Footer />

      {lightboxSrc && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightboxSrc(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxSrc(null)} aria-label="Close">✕</button>
            <img src={lightboxSrc} alt="Enlarged artwork" />
          </div>
        </div>
      )}
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

// Lightbox component rendered at root level via portal could be added, but
// keeping simple: export App's lightbox state is sufficient for now.
