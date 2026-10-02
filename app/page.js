import Link from "next/link";

export default function Home() {
  return (
    <section className="hero page-home">
      <div className="availability"><span /> Available for new ideas</div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-index">Portfolio / 2026</p>
          <h1><span>Jaspher</span><br />Booc<span className="hero-star">✦</span></h1>
          <p className="hero-role">Student developer &amp;<br />digital maker.</p>
        </div>
        <div className="hero-panel">
          <div className="panel-code" aria-hidden="true">
            <span>01</span><p>ideas.into(<b>interfaces</b>)</p>
            <span>02</span><p>learn → build → repeat</p>
            <span>03</span><p>status: <i>growing</i></p>
          </div>
          <p>I turn classroom lessons and curious ideas into clean, useful experiences for the web.</p>
          <div className="actions">
            <Link href="/portfolio" className="button">View selected work <span>↗</span></Link>
            <Link href="/about" className="text-link">About me <span>→</span></Link>
          </div>
        </div>
      </div>
      <div className="ticker" aria-label="Areas of focus">
        <div>Web development <span>✦</span> Interface design <span>✦</span> Creative coding <span>✦</span> Always learning <span>✦</span></div>
      </div>
      <div className="home-projects">
        <div className="section-label"><span>Selected work</span><span>01—03</span></div>
        <Link href="/portfolio" className="featured-project">
          <div><span className="project-tag">Latest project</span><h2>Personal<br />Website</h2></div>
          <div className="project-orbit"><span>JB</span></div>
          <div className="featured-meta"><span>Next.js / CSS</span><span className="circle-arrow">↗</span></div>
        </Link>
      </div>
    </section>
  );
}
