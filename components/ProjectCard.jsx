export const projects = [
  {
    title: "ApplyFlow",
    description: "A Chrome extension that detects and parses job postings directly from the page, extracting key fields and saving them to a users Google Sheet.",
    image: "/applyflow.png",
    tags: ["Chrome Extensions API", "Google Sheets API", "OAuth2"],
    language: "JavaScript",
    languageColor: "#f1e05a",
    githubUrl: "#",
    anchorId: null,
  },
  {
    title: "CleanFi",
    description: "A web application that processes and standardizes bank statement CSVs, automatically cleaning and transforming raw financial data into analysis-ready formats.",
    image: "/cleanfi.png",
    tags: ["Streamlit", "Pandas", "NumPy", "Plotly"],
    language: "Python",
    languageColor: "#3572A5",
    githubUrl: "#",
    anchorId: null,
  },
  {
    title: "SetLens",
    description: "A computer vision application that processes volleyball game footage to track and analyze the trajectory of sets in real time.",
    image: "/setlens.png",
    tags: ["OpenCV", "YOLOv8", "NumPy"],
    language: "Python",
    languageColor: "#3572A5",
    githubUrl: "#",
    anchorId: "setlens",
  },
  {
    title: "GitHub",
    description: "Check out more on my Github profile.",
    image: "/github2.png",
    tags: [],
    language: "dvaidwho",
    languageColor: "#C61532",
    githubUrl: "https://github.com/dvaidwho",
    anchorId: null,
  },
]

export default function ProjectCard({ title, description, image, tags, language, languageColor, githubUrl, anchorId }) {
  return (
    <div
      id={anchorId || undefined}
      className={`flex flex-col rounded-xl border border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-white/5 backdrop-blur-sm overflow-hidden transition-transform duration-300 hover:scale-[1.02]${anchorId ? " scroll-mt-24" : ""}`}
    >
      <img src={image} alt={`${title} preview`} className="w-full h-40 sm:h-52 object-cover border-b border-gray-200 dark:border-gray-700" />
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-base">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded-md border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-white/5 text-gray-500 dark:text-gray-400 text-xs">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700 mt-auto">
          <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: languageColor }}></span>
            {language}
          </span>
          <a href={githubUrl} className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/20 transition-colors text-xs">
            View on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  )
}
