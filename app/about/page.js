const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Responsive design"];

export default function About() {
  return (
    <section className="inner-page about-page">
      <p className="eyebrow">Profile / 02</p>
      <h1>Curious by nature.<br /><em>Learning by doing.</em></h1>
      <div className="about-statement"><span>JB</span><p>I’m Jaspher Booc, a student learning how thoughtful design and clean code can work together. I enjoy building simple websites, solving problems, and getting better through hands-on practice.</p></div>
      <div className="about-grid">
        <article className="card">
          <span className="card-kicker">Toolkit</span>
          <h2>Skills I’m building</h2>
          <p>Technologies and ideas I use in my current work.</p>
          <ul className="skills">
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </article>
        <article className="card">
          <span className="card-kicker">Next steps</span>
          <h2>What I’m working toward</h2>
          <ul className="goals">
            <li>Build responsive layouts for different screen sizes.</li>
            <li>Understand components and routing in Next.js.</li>
            <li>Write clear, reusable JavaScript code.</li>
            <li>Create accessible, easy-to-use websites.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
