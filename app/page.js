import ScrollReveal from "../components/ScrollReveal"
import ProjectCard, { projects } from "../components/ProjectCard"
import SkillCard, { skillGroups } from "../components/SkillCard"

export default function Home() {
  return (
    <main id="home" className="space-y-4 scroll-mt-24">
      <h1 className="text-3xl sm:text-5xl pt-24 sm:pt-40"><span className="umass">&gt;_</span> Hello, I'm David.</h1>
      <p className="text-gray-500">
        I'm a student at the <span className="umass font-semibold">University of Massachusetts Lowell</span>, studying <span className="umass">computer science</span>.
      </p>
      <div className="max-w-2xl">
        <p className="text-gray-500">
          My interests include <span className="text-gray-800 dark:text-gray-200 font-semibold">automation</span>, <span className="text-gray-800 dark:text-gray-200 font-semibold">computer vision</span>, and <span className="text-gray-800 dark:text-gray-200 font-semibold">ML</span>. I like programming tools that automate workflows, analyze data, and create a real-world impact.
        </p>
      </div>

      {/* buttons */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-3">
          <a href="mailto:KongNDavid@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/20 transition-colors text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Email
          </a>
          <a href="David_Kong_Resume_UML.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/20 transition-colors text-sm w-fit">
            Resume
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          </a>
          <a href="https://github.com/dvaidwho" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/20 transition-colors text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
            GitHub
          </a>
          <a href="https://linkedin.com/in/davidnkong" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/20 transition-colors text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-6">
        <p className="flex items-center gap-1.5 text-gray-500 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          Lowell, MA
        </p>
        <a href="#projects" className="flex items-center gap-1.5 text-gray-500 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors text-sm">
          See my work
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
        </a>
      </div>


      {/* About Me */}
      <ScrollReveal>
      <div id="about" className="mt-32 sm:mt-80 scroll-mt-24">
        <h2 className="text-3xl umass">About</h2>
        <div className="mt-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-white/5 backdrop-blur-sm p-6">
          <ul className="space-y-2 text-gray-500 dark:text-gray-400 list-disc list-inside">
            <li>Sophomore at UMass Lowell, graduating <span className="text-gray-800 dark:text-gray-200 font-semibold">May 2028</span>.</li>
            <li>Currently building <span className="text-gray-800 dark:text-gray-200 font-semibold"><a href="#setlens" className="underline underline-offset-2 hover:opacity-70 transition-opacity">SetLens</a></span>, a computer vision tool for volleyball analytics. 🏐</li>
            <li>Outside of coding, you'll find me playing volleyball or practicing my golf swing. ⛳</li>
          </ul>
        </div>
      </div>
      </ScrollReveal>

      {/* projects */}
      <ScrollReveal>
      <div id="projects" className="mt-15 scroll-mt-24">
        <h2 className="text-3xl umass">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
      </ScrollReveal>

      {/* skills */}
      <ScrollReveal>
      <div id="skills" className="mt-15 text-center scroll-mt-24">
        <h2 className="text-3xl umass">Skills</h2>
        <div className="mt-6 space-y-6">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">{group.label}</p>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3">
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} svg={skill.svg} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </ScrollReveal>

      {/* contact */}
      <ScrollReveal>
      <div id="contact" className="mt-15 scroll-mt-24">
        <h2 className="text-3xl umass">Contact</h2>
        <div className="mt-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-white/5 backdrop-blur-sm p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-gray-500 dark:text-gray-400 max-w-s">
            Have a project in mind or just want to connect? I'd love to have the opportunity to chat with you!
          </p>
          <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
            <a href="mailto:KongNDavid@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/20 transition-colors text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email
            </a>
            <a href="https://linkedin.com/in/davidnkong" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/20 transition-colors text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/dvaidwho" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/20 transition-colors text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
      </ScrollReveal>

      {/* resume */}
      <div className="mb-10 max-w-md mx-auto">
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-white/5 backdrop-blur-sm p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="umass">Feel free to check out my resume.</p>
          <a href="David_Kong_Resume_UML.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/20 transition-colors text-sm w-fit shrink-0">
            Resume
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          </a>
        </div>
      </div>
    </main>
  )
}