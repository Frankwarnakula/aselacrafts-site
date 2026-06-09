import React from 'react';
import { ArrowRight, Mail, MapPin, Menu, Play, Sparkles, Music2 } from 'lucide-react';

export default function Header() {
  const youtube = 'https://www.youtube.com/@aselacrafts';
  const facebook = 'https://www.facebook.com/AselaCraft';

  return (
    <header className="header">
      <a href="#home" className="logo" aria-label="AselaCrafts home">
        <span className="logo-mark">A</span>
        <span>AselaCrafts</span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <div className="nav-dropdown">
          <button className="nav-link">Gallery ▾</button>
          <div className="dropdown-panel">
            <div className="dropdown-group">
              <span className="dropdown-title">Christian</span>
              <a href="/lent" className="dropdown-item">Lent</a>
            </div>
          </div>
        </div>
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
  );
}
