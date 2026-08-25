const experiencePlaceholders = [
  {
    number: "01",
    title: "Current work",
    detail: "Role, organization, dates, and a short account of the work will live here.",
  },
  {
    number: "02",
    title: "Selected experience",
    detail: "A concise record of responsibilities, accomplishments, and lessons learned.",
  },
  {
    number: "03",
    title: "Earlier chapters",
    detail: "Previous roles and meaningful projects, arranged in reverse chronological order.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Brantly Millegan, home">
          <span className="wordmark-mark" aria-hidden="true">BM</span>
          <span>Brantly Millegan</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#life">Life</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Curriculum vitae · Personal site</p>
          <h1>
            Brantly
            <span>Millegan.</span>
          </h1>
          <p className="hero-intro">
            A personal record of the work I’ve done, what I’ve learned,
            and the life that keeps it all in perspective.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#experience">
              View the CV <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#life">A little about me</a>
          </div>
        </div>

        <aside className="hero-note" aria-label="About this website">
          <span className="note-index">00</span>
          <div>
            <p className="note-label">A work in progress</p>
            <p>
              This is the first draft of my corner of the internet. The full
              chronology, details, and selected work are coming next.
            </p>
          </div>
        </aside>
      </section>

      <section className="section experience" id="experience">
        <div className="section-heading">
          <p className="section-number">01 / Experience</p>
          <h2>The work,<br />in context.</h2>
        </div>

        <div className="experience-list">
          {experiencePlaceholders.map((item) => (
            <article className="experience-row" key={item.number}>
              <span className="row-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
              <span className="status">Details to come</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section education" id="education">
        <div className="section-heading compact-heading">
          <p className="section-number">02 / Education</p>
          <h2>Learning,<br />formally & otherwise.</h2>
        </div>

        <div className="education-grid">
          <article className="education-card primary-card">
            <span className="card-kicker">Formal education</span>
            <h3>School, degree & field of study</h3>
            <p>
              The institution, degree, concentration, and graduation year will
              be added here.
            </p>
            <span className="card-footer">Full details coming soon</span>
          </article>

          <article className="education-card secondary-card">
            <span className="card-kicker">Always learning</span>
            <h3>Courses, reading & ongoing study</h3>
            <p>
              A place for the ideas, disciplines, and independent study that
              continue to shape my thinking.
            </p>
            <span className="card-footer">A living list</span>
          </article>
        </div>
      </section>

      <section className="life" id="life">
        <p className="section-number light">03 / Beyond the résumé</p>
        <div className="life-content">
          <h2>A full life is<br />the point.</h2>
          <div className="life-copy">
            <p>
              Outside of work, I’m Catholic, married, and the grateful father
              of a very full house. Faith and family are not footnotes to my
              story—they’re at the center of it.
            </p>
            <p className="muted">
              This section will eventually hold a few more personal notes,
              interests, and the things I care about away from a desk.
            </p>
          </div>
        </div>
        <div className="life-words" aria-label="Faith, family, work, home">
          <span>Faith</span><span>Family</span><span>Work</span><span>Home</span>
        </div>
      </section>

      <footer>
        <a className="footer-name" href="#top">Brantly Millegan</a>
        <p>Resume, work, and a little bit of life.</p>
        <a className="back-to-top" href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </main>
  );
}
