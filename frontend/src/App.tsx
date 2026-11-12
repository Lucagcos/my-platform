import './App.css'

type ReportKind = 'bug' | 'feature'

  type Report = {
    id: string
    text: string
    kind: ReportKind
}

function App() {

  const sampleReport: Report = {
    id: '1',
    text: 'Navigation link is broken',
    kind: 'bug',
  }

  const initialReports: Report[] = [
  { id: '1', text: 'Navigation link is broken', kind: 'bug' },
  { id: '2', text: 'Add dark mode', kind: 'feature' },
  ]


  


  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Luca Cosentino home">
          LC
        </a>
        <p>Personal portfolio</p>
      </header>

      <section className="intro-card" aria-labelledby="intro-title">
        <div className="intro-copy">
          <p className="eyebrow">Computer Science · Senior Capstone</p>
          <h1 id="intro-title">
            Hi, I’m <span>Luca Cosentino.</span>
          </h1>
          <h2>Building software and learning how to run it well.</h2>
          <p className="intro-description">
            I’m a computer science student interested in creating reliable,
            useful software. This capstone platform is where I share my
            projects, document engineering decisions, and keep learning about
            production systems.
          </p>
        </div>

        <div
          className="avatar"
          role="img"
          aria-label="Monogram avatar for Luca Cosentino"
        >
          <span>LC</span>
        </div>
      </section>

      <footer className="site-footer">
        <p>Curious by nature. Building one thoughtful release at a time.</p>
      </footer>
      <section className="report-board">
        <h2>Bugs & Feature Requests</h2>
          <p>
            {sampleReport.text} ({sampleReport.kind})
          </p>
      </section>
      <ul>  
        {initialReports.map((report) => (    
          <li key={report.id}>     
            {report.text} ({report.kind})    
          </li>  
        ))}
      </ul>

    </main>
  )
}

export default App
