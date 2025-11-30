import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { loadAllNotes } from '../utils/noteLoader'
import { getAllTags } from '../utils/searchEngine'
import NoteCard from '../components/NoteCard'

export default function TagsView() {
  const [searchParams] = useSearchParams()
  const selectedTag = searchParams.get('tag')
  const [tags, setTags] = useState([])
  const [notes, setNotes] = useState([])
  const [filteredNotes, setFilteredNotes] = useState([])

  useEffect(() => {
    loadAllNotes().then(allNotes => {
      setNotes(allNotes)
      setTags(getAllTags(allNotes))
      
      if (selectedTag) {
        setFilteredNotes(allNotes.filter(n => n.tags?.includes(selectedTag)))
      }
    })
  }, [selectedTag])

  return (
    <div>
      <h1 className="archive-header">🏷️ Tags Index</h1>

      {!selectedTag ? (
        <>
          <p className="text-lg text-leather mb-8">
            Browse notes by topics and categories
          </p>
          <div className="flex flex-wrap gap-4">
            {tags.map(({ tag, count }) => (
              <Link
                key={tag}
                to={`/tags?tag=${tag}`}
                className="archive-border px-6 py-3 bg-sepia/50 hover:bg-bronze hover:text-parchment 
                         transition-all duration-300 flex items-center gap-2"
              >
                <span className="font-semibold">#{tag}</span>
                <span className="text-sm opacity-70">({count})</span>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="mb-8">
            <Link to="/tags" className="text-bronze hover:text-royal-gold">
              ← All Tags
            </Link>
            <h2 className="text-2xl font-display font-semibold text-bronze mt-4">
              Notes tagged with #{selectedTag}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map(note => (
              <NoteCard key={`${note.folder}-${note.slug}`} note={note} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
