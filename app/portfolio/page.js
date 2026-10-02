const projects = [
  { name: "Personal Website", description: "A responsive home for introducing myself, sharing my work, and documenting my progress as a developer.", technologies: "Next.js · JavaScript · CSS" },
  { name: "Task List", description: "A focused productivity app for organizing daily tasks and keeping small goals moving forward.", technologies: "HTML · CSS · JavaScript" },
  { name: "Study Notes", description: "A clean interface that organizes study topics into sections that are easy to scan and revisit.", technologies: "React · JavaScript · CSS" },
];

export default function Portfolio() {
  return (
    <section className="inner-page work-page">
      <p className="eyebrow">Selected work / 01</p>
      <h1>Things I’ve<br /><em>made so far.</em></h1>
      <p className="intro">A growing collection of projects where I practice problem-solving, design, and front-end development.</p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="card project-card" key={project.name}>
            <div className="project-meta"><span className="project-number">0{index + 1}</span><span>Student project ↗</span></div>
            <div className="project-visual"><span>{index === 0 ? "WEB" : index === 1 ? "TASK" : "NOTE"}</span></div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p className="technologies">{project.technologies}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
