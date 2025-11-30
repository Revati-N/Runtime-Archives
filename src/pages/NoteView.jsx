import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { loadNote } from '../utils/noteLoader'
import MarkdownRenderer from '../components/MarkdownRenderer'
import Comments from '../components/Comments'

export default function NoteView() {
  const { folder, slug } = useParams()
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadNote(folder, slug).then(data => {
      setNote(data)
      setLoading(false)
    })
  }, [folder, slug])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="text-2xl text-bronze animate-pulse">Loading archives...</div>
      </div>
    )
  }

  if (!note) {
    return (
      <div className="text-center py-12 archive-card">
        <h2 className="text-2xl font-display text-bronze mb-4">Note Not Found</h2>
        <Link to="/notes" className="royal-button">Return to Library</Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link to="/notes" className="text-bronze hover:text-royal-gold mb-4 inline-block">
          ← Back to Library
        </Link>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-bronze mb-4">
          {note.title}
        </h1>
        <div className="flex flex-wrap gap-3 items-center text-sm text-leather">
          <span className="folder-badge">{note.category}</span>
          <span>•</span>
          <span>{note.date}</span>
          {note.tags && note.tags.length > 0 && (
            <>
              <span>•</span>
              <div className="flex flex-wrap gap-2">
                {note.tags.map(tag => (
                  <Link 
                    key={tag}
                    to={`/tags?tag=${tag}`}
                    className="text-xs px-2 py-1 bg-bronze/10 text-bronze rounded hover:bg-bronze/20"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <article className="archive-card mb-8">
        <MarkdownRenderer content={note.content} />
      </article>

      {/* Comments */}
      <Comments />
    </div>
  )
}
