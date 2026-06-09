import React from 'react';
import { ArrowRight, Mail, MapPin, Menu, Play, Sparkles, Music2 } from 'lucide-react';

export default function Header() {
  const youtube = 'https://www.youtube.com/@aselacrafts';
  const facebook = 'https://www.facebook.com/AselaCraft';

  return (
    <header className="site-nav">
      <a href="/" className="brand-mark">
        <span className="brand-script">AselaCrafts</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>

        <div className="nav-dropdown">
          <button className="nav-dropdown-trigger">Gallery ▾</button>
          <div className="nav-dropdown-menu">
            <a href="#all-works">All Works</a>
            <a href="#christian">Christian</a>
            <a href="/lent">Lent</a>
            <a href="#churches">Churches &amp; Convents</a>
          </div>
        </div>

        <a href="#videos">Videos</a>
        <a href="#social">Social</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="nav-socials">
        <a href={youtube} target="_blank" rel="noreferrer">YouTube</a>
        <a href={facebook} target="_blank" rel="noreferrer">Facebook</a>
      </div>
    </header>
  );
}
