import React from 'react';
import { createRoot } from 'react-dom/client';
import { Globe2, Mail, MapPin, Play, Sparkles, Star, Music2, ArrowRight, Hammer, Heart, BadgeCheck, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles.css';

const socials = [
  { label: 'YouTube', href: 'https://www.youtube.com/@aselacrafts', icon: Video },
  { label: 'Facebook', href: 'https://www.facebook.com/AselaCraft', icon: Globe2 },
  { label: 'TikTok', href: '#tiktok-profile', icon: Music2 },
  { label: 'Instagram', href: '#instagram-profile', icon: Globe2 },
];

const works = [
  {
    title: 'Lion Face Soap Carving',
    type: 'Tutorial',
    img: 'https://i.ytimg.com/vi/TmKlE3NPguw/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=TmKlE3NPguw',
  },
  {
    title: 'Horse Head Soap Carving',
    type: 'Handmade carving',
    img: 'https://i.ytimg.com/vi/d3iQ516-P2U/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=d3iQ516-P2U',
  },
  {
    title: 'Cat Soap Carving',
    type: 'Step-by-step art',
    img: 'https://i.ytimg.com/vi/c-O429apN-4/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=c-O429apN-4',
  },
  {
    title: 'Turtle Soap Carving',
    type: 'Short-form craft',
    img: 'https://i.ytimg.com/vi/UjJGfH5Faqc/hqdefault.jpg',
    href: 'https://www.youtube.com/shorts/UjJGfH5Faqc',
  },
  {
    title: 'Gold Fish Carving',
    type: 'Popular work',
    img: 'https://i.ytimg.com/vi/ScoTvEkccpw/hqdefault.jpg',
    href: 'https://www.youtube.com/@aselacrafts',
  },
  {
    title: 'Wooden Chapel & Sacred Statues',
    type: 'Devotional art',
    img: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80',
    href: 'https://www.facebook.com/AselaCraft',
  },
];

const skills = ['Soap carving', 'Wood carving', 'Religious statues', 'Miniatures', 'Home chapels', 'Decorative handmade art'];

function App() {
  return (
    <main>
      <header className="site-header">
        <a href="#home" className="brand"><span>Asela</span>Crafts</a>
        <nav>
          <a href="#work">Work</a>
          <a href="#story">Story</a>
          <a href="#social">Social</a>
          <a href="#contact" className="nav-cta">Enquire</a>
        </nav>
      </header>

      <section id="home" className="hero section-shell">
        <div className="hero-copy">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">
            Handmade sculptures · carving tutorials · devotional art
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            Art shaped by patience, faith and gifted hands.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="hero-text">
            AselaCrafts is the personal art brand of <strong>Asela Warnakula</strong>, showcasing elegant handmade statues, carvings and step-by-step craft videos created with care from Kalutara, Sri Lanka.
          </motion.p>
          <div className="hero-actions">
            <a className="primary-btn" href="#work">Explore the gallery <ArrowRight size={18}/></a>
            <a className="secondary-btn" href="https://www.youtube.com/@aselacrafts" target="_blank" rel="noreferrer"><Play size={18}/> Watch on YouTube</a>
          </div>
          <div className="proof-strip">
            <span><Star/> 180+ videos</span>
            <span><BadgeCheck/> Original handmade work</span>
            <span><Heart/> Created with devotion</span>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .18 }} className="hero-art">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <img src="https://i.ytimg.com/vi/TmKlE3NPguw/hqdefault.jpg" alt="AselaCrafts lion face carving" className="main-art" />
          <div className="floating-card card-one"><Sparkles/> Hand carved detail</div>
          <div className="floating-card card-two"><Hammer/> Soap · wood · statues</div>
        </motion.div>
      </section>

      <section className="marquee" aria-label="AselaCrafts focus areas">
        <div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section id="work" className="section-shell gallery-section">
        <div className="section-heading">
          <p className="eyebrow">Featured portfolio</p>
          <h2>Crafts that feel timeless, warm and personal.</h2>
          <p>Use this area as the premium showcase: carvings, statues, tutorials, process videos and commissioned pieces.</p>
        </div>
        <div className="gallery-grid">
          {works.map((work, index) => (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              href={work.href}
              target="_blank"
              rel="noreferrer"
              className="work-card"
              key={work.title}
            >
              <img src={work.img} alt={work.title} />
              <div>
                <span>{work.type}</span>
                <h3>{work.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="story" className="section-shell split-section">
        <div className="story-panel">
          <p className="eyebrow">The artist</p>
          <h2>Meet Asela Warnakula</h2>
          <p>
            A sole creator behind AselaCrafts, Asela transforms simple materials into expressive handmade art. His work carries a calm, devotional and deeply human feeling — from small soap carvings to religious statues and home chapel pieces.
          </p>
          <p>
            This website is designed to become his official digital home: part portfolio, part social hub, part enquiry page for people who discover his work through YouTube, Facebook, TikTok and Instagram.
          </p>
        </div>
        <div className="values-grid">
          <article><Sparkles/><h3>Elegant presentation</h3><p>Large visuals, soft textures and refined spacing make the artwork feel premium.</p></article>
          <article><Play/><h3>Video-first brand</h3><p>YouTube and short-form content are placed at the heart of the site experience.</p></article>
          <article><Heart/><h3>Personal connection</h3><p>The artist story builds trust and makes the brand feel sincere and memorable.</p></article>
        </div>
      </section>

      <section id="social" className="section-shell social-section">
        <div className="section-heading">
          <p className="eyebrow">Follow the journey</p>
          <h2>One brand, connected across every platform.</h2>
        </div>
        <div className="social-grid">
          {socials.map(({ label, href, icon: Icon }) => (
            <a className="social-card" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" key={label}>
              <Icon />
              <span>{label}</span>
              <ArrowRight size={18}/>
            </a>
          ))}
        </div>
        <div className="embed-grid">
          <div className="embed-card">
            <h3>Latest YouTube work</h3>
            <iframe src="https://www.youtube.com/embed?listType=user_uploads&list=aselacrafts" title="AselaCrafts YouTube uploads" loading="lazy" allowFullScreen />
          </div>
          <div className="embed-card">
            <h3>Facebook community</h3>
            <iframe title="AselaCrafts Facebook Page" loading="lazy" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAselaCraft&tabs=timeline&width=500&height=460&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true" />
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <div>
          <p className="eyebrow">Commissions & collaborations</p>
          <h2>Bring a handmade idea to life.</h2>
          <p>Use this section for enquiries about statues, gifts, devotional art, tutorials, workshops or social collaborations.</p>
        </div>
        <a className="primary-btn" href="mailto:hello@aselacrafts.com"><Mail size={18}/> hello@aselacrafts.com</a>
      </section>

      <footer>
        <div><strong>AselaCrafts</strong><span><MapPin size={15}/> Kalutara, Sri Lanka</span></div>
        <p>© {new Date().getFullYear()} AselaCrafts by Asela Warnakula. Handmade with patience.</p>
      </footer>
    </main>
  );
}

export default App;

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
