export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="archive-header">📜 About Runtime Archives</h1>
      
      <div className="archive-card space-y-6">
        <p className="text-lg leading-relaxed">
          Welcome to <span className="font-display font-semibold text-bronze">Runtime Archives</span>, 
          a personal knowledge repository dedicated to preserving insights, learnings, and discoveries 
          in the realms of technology, machine learning, and beyond.
        </p>

        <div>
          <h2 className="text-2xl font-display font-semibold text-bronze mb-3">
            Purpose
          </h2>
          <p className="leading-relaxed">
            This digital archive serves as a curated collection of notes, research, and explorations. 
            Each entry is carefully documented to share knowledge and foster learning within the community.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display font-semibold text-bronze mb-3">
            Topics Covered
          </h2>
          <ul className="list-disc list-inside space-y-2 text-leather">
            <li>Machine Learning & Deep Learning</li>
            <li>Natural Language Processing</li>
            <li>Web Development & Software Engineering</li>
            <li>Computer Vision & Image Processing</li>
            <li>Personal Growth & Reflections</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-display font-semibold text-bronze mb-3">
            Connect
          </h2>
          <p className="leading-relaxed mb-4">
            Feel free to explore, comment, and engage with the content. Your thoughts and 
            discussions help enrich this knowledge base.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" 
               className="royal-button">
              GitHub
            </a>
            <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noopener noreferrer"
               className="royal-button">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
