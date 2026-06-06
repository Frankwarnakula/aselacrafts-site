import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const youtube = 'https://www.youtube.com/@aselacrafts';
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <motion.p className="kicker" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>Handmade artworks</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>Creativity in Every <span>Detail</span></motion.h1>
        <motion.p className="tagline" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}># Art shaped by patience, faith and gifted hands.</motion.p>
        <motion.p className="lead" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>Discover the beauty of handcrafted statues, intricate carvings, and devotional artworks by <strong>Asela Warnakula</strong>, the sole artist and creative heart behind AselaCrafts.</motion.p>
        <motion.div className="signature" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}>
          <a href="https://www.facebook.com/asela.warnakula.5" target="_blank" rel="noreferrer">Asela Warnakula</a>
          <small>Artist. Sculptor.</small>
        </motion.div>
        <motion.div className="actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}>
          <a href="#gallery" className="btn btn-dark">Browse Gallery <ArrowRight size={17} /></a>
          <a href={youtube} target="_blank" rel="noreferrer" className="btn btn-light"><Play size={17} /> Watch on YouTube</a>
        </motion.div>
      </div>
      <motion.div className="hero-collage" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.18 }}>
        <div className="paper paper-one"><img src="https://scontent.fmel3-1.fna.fbcdn.net/v/t39.30808-6/714862211_980343688298230_5613606560803062416_n.jpg?stp=dst-jpg_tt6&cstp=mx1448x1086&ctp=s1448x1086&_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=j_SMWsbcFBYQ7kNvwE4THtO&_nc_oc=AdqCPwvybvfOYCPjJqYqnI4LbX8wAnFk1CEmZcV4pyxZD1fz3lcIINGmVZl1Y3yzgHaybMxhUTQmgiSjj4cCKMI1&_nc_zt=23&_nc_ht=scontent.fmel3-1.fna&_nc_gid=m-44jHqxQ3P0vUJHWpBFHQ&_nc_ss=7b2a8&oh=00_Af_87OkryXik-DOyJQjPfaekCkz4qWkgbktPzjmoEUW35Q&oe=6A2A59CE" alt="AselaCrafts carving artwork" /></div>
        <div className="paper paper-two"><img src="https://scontent.fmel3-1.fna.fbcdn.net/v/t39.30808-6/715649964_980433424955923_8386500563633126530_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1536&ctp=s1024x1536&_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=nlf34ycE5qsQ7kNvwFE1TMT&_nc_oc=Adr0KEik3usUrDepoel0gCr1eWwv855zwCrX16OEgEolyGYJEeiM9mdHswIQ6V4wFWed_iMOrlGd7oDkkDQDKnN2&_nc_zt=23&_nc_ht=scontent.fmel3-1.fna&_nc_gid=ezWdGrSWeYMeg71fnjcrpA&_nc_ss=7b2a8&oh=00_Af993LpEXLaD45ct3uOzpZh4tkNLbY33P-AT4eLNDZp9UA&oe=6A2A959C" alt="Artist working with carving tools" /></div>
        <div className="paper paper-three"><img src="https://scontent.fmel3-1.fna.fbcdn.net/v/t39.30808-6/711405676_980422184957047_7655151341012522239_n.jpg?stp=dst-jpg_tt6&cstp=mx783x1354&ctp=s783x1354&_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=LEUjt7k1njYQ7kNvwFbnGm8&_nc_oc=AdpZIukac1i_dFLVwqyNcag8HNOlIdn4LOwMxDRLIFYtYZDFk3zMg-uTXDLsjsDaSTI4O3qA1PIKRcAKFtTBep_F&_nc_zt=23&_nc_ht=scontent.fmel3-1.fna&_nc_gid=qzw-Smn5WoXEllMT_ebiRQ&_nc_ss=7b2a8&oh=00_Af9zdujq9mTyFLwQxV8B2m0OajZ9VspO_lrjsqk4YQbbUw&oe=6A2A9106" alt="Handcrafted statue detail" /></div>
        <div className="paper paper-four"><img src="https://scontent.fmel10-1.fna.fbcdn.net/v/t39.30808-6/718221878_980343684964897_6540976512452489721_n.jpg?stp=dst-jpg_tt6&cstp=mx997x1577&ctp=s997x1577&_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Kh128c7AjoUQ7kNvwEwBW_Q&_nc_oc=AdoEnTgIZfRi-nYjMqv7WFcDKp4VzsJWqZLG3gspkzPHHSFNhy42KiEDdIroQPb6vROqpomVdze-5ESohHLtCXCK&_nc_zt=23&_nc_ht=scontent.fmel10-1.fna&_nc_gid=k_YRYmLQesL9ldGGe00cIQ&_nc_ss=7b2a8&oh=00_Af9K72UkCyU0kR1FhzdsdcRgoM25PAd2UuqNBsx96fq-VQ&oe=6A2A6DAB" alt="AselaCrafts handmade carving" /></div>
      </motion.div>
    </section>
  );
}
