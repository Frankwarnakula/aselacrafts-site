import React from 'react';

const videos = [
  { id: '74LL19qTd7U', caption: 'Palm Sunday' },
  { id: 'EqPWDxmZoOk', caption: 'Short: Palm Sunday' },
  { id: '74LL19qTd7U', caption: 'Alternate upload: Palm Sunday' },
  { id: 'l5eIcUruYGA', caption: 'Jesus prays in Gethsemane' },
  { id: 'rqRO6Hho1I0', caption: '1st Station: Jesus is condemned to death' },
  { id: 'GVUOg5NYj1M', caption: '2nd Station - Jesus carries his cross' },
  { id: '_DctpBmAMro', caption: '3rd Station - Jesus falls the 1st time' },
  { id: 'Di81arWoDFc', caption: '4th Station - Jesus meets his mother' },
  { id: 'FvtJ5n5Yo2s', caption: '5th Station - Simon of Cyrene helps Jesus to carry his cross' },
  { id: 'mKAqN37_bL8', caption: '6th Station - Veronica wipes the face of Jesus' },
  { id: 'eZSmmEVgnTM', caption: '7th Station - Jesus falls the second time' },
  { id: '67xdSoSYIeQ', caption: '8th Station - Jesus meets the women of Jerusalem' },
  { id: 'VdyEP4g5uz8', caption: '9th Station - Jesus falls a third time' },
  { id: 'w8kmPytYy-Y', caption: "10th Station - Jesus's clothes are taken away" },
  { id: 'LIE-4aYd9Tk', caption: '11th Station - Jesus is nailed to the Cross' },
  { id: 'BGlrfA_CR4', caption: '12th Station - Jesus dies on the Cross' },
  { id: 'JQDxtlPTffE', caption: '13th Station - Jesus is taken down from the Cross' },
  { id: 'Hfp-eB8Cn8Y', caption: '14th Station - Jesus is laid in the tomb' },
  { id: 'EpWgxBa4Br0', caption: '15th Station - Jesus Risen from the dead' },
  { id: 'bAMXyVTMLTw', caption: "Good Thursday - Jesus washes his Disciples' feet" },
  { id: 'EtOmGIdMP38', caption: 'Last Supper' },
  { id: 'DH6Ldg3NKPs', caption: 'Good Friday - Christ Jesus Tied To The Pillar' },
  { id: 'Ly80uLN2lgo', caption: 'Jesus, Scourged for our Sins' },
  { id: 'D7jHAsOGAlI', caption: 'The Mother who became the shadow of her Son' },
  { id: 'RlsWHWxMi1c', caption: 'Jesus preparing to be crucified' },
  { id: 'yY07yGYXQvQ', caption: 'St. Mary cradling the mortal body of Jesus' },
  { id: 'W_lIorLnOwA', caption: 'Easter Sunday - Jesus has Risen' },
  { id: 'T7C8AoNiR5k', caption: 'Resurrection of Jesus' },
  { id: '0QdhiPsxspw', caption: 'Crucifixion' },
  { id: 'mWBWUBDjVvQ', caption: 'Ascension of Christ' },
  { id: 'H7g9pK0DsTk', caption: 'How to carve Ascension of Jesus' },
];

export default function Lent(){
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <main className="site">
      <section className="section" style={{paddingTop:32,paddingBottom:60}}>
        <div style={{maxWidth:1100,margin:'0 auto',padding:'0 22px'}}>
          <a href="/" className="text-link" style={{display:'inline-block',marginBottom:14}}>← Back to site</a>
          <p className="kicker">Christian</p>
          <h2>Lent — Palm Sunday & Stations</h2>
          <p className="lead">A curated collection of videos and short clips for devotional reflection. Click any card to load the player inline.</p>

          <div className="lent-grid lent-embeds" style={{marginTop:28}}>
            <div className="embed-grid">
              <div className="embed-group">
                <h3 style={{marginBottom:14}}>All Videos</h3>
                <div className="video-grid">
                  {videos.map(v => (
                    <article key={`${v.id}-${v.caption}`} className="art-card" onClick={() => setActive(v.id)} style={{cursor:'pointer'}}>
                      {active === v.id ? (
                        <iframe src={`https://www.youtube.com/embed/${v.id}`} title={v.caption} loading="lazy" allowFullScreen style={{width:'100%',height:'100%'}} />
                      ) : (
                        <>
                          <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt={v.caption} />
                          <div>
                            <span>Christian</span>
                            <h3>{v.caption}</h3>
                            <p className="meta" style={{marginTop:8,color:'var(--muted)'}}>YouTube • {v.id}</p>
                          </div>
                          <button className="video-play" aria-hidden></button>
                        </>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <aside className="lent-aside">
              <div className="aside-card">
                <h4>About this collection</h4>
                <p>A curated playlist of Palm Sunday, Stations of the Cross, Good Friday and Easter clips for reflection. Use the thumbnails to play inline — the layout matches the rest of the site for a consistent UX.</p>
              </div>
              <div className="aside-card">
                <h4>Open on YouTube</h4>
                <a className="cta" href="https://www.youtube.com/@aselacrafts" target="_blank" rel="noreferrer">Visit AselaCrafts on YouTube →</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
