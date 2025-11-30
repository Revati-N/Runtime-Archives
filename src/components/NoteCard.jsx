import { Link } from 'react-router-dom'

export default function NoteCard({ note }) {
  return (
    <Link 
      to={`/notes/${note.folder}/${note.slug}`}
      className="block archive-card hover:scale-[1.02] animate-slide-up group"
    >
      <h3 className="text-xl font-display font-semibold text-bronze mb-2 group-hover:text-royal-gold transition-colors">
        {note.title}
      </h3>
      <p className="text-sm text-leather mb-3 line-clamp-2">{note.excerpt}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {note.tags?.map(tag => (
          <span key={tag} className="text-xs px-2 py-1 bg-bronze/10 text-bronze rounded">
            #{tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center text-sm text-leather/70">
        <span className="folder-badge">{note.category || note.folder}</span>
        <span>{note.date}</span>
      </div>
    </Link>
  )
}
