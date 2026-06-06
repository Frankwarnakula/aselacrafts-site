import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function Footer(){
  const facebook = 'https://www.facebook.com/AselaCraft';
  return (
    <footer className="footer">
      <div className="footer-brand">
        <a href="#home" className="logo"><span className="logo-mark">A</span><span>AselaCrafts</span></a>
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
  );
}
