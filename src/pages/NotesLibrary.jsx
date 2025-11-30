import { useState, useEffect } from 'react'
import { loadAllNotes } from '../utils/noteLoader'
import { searchNotes } from '../utils/searchEngine'
import NoteCard from '../components/NoteCard'
import SearchBar from '../components/SearchBar'

export default function NotesLibrary() {
  const [allNotes, setAllNotes] = useState([])
  const [filteredNotes, setFilteredNotes] = useState([])
  const [selectedFolder, setSelectedFolder] = useState('all')
  const [folders, setFolders] = useState([])

  useEffect(() => {
    loadAllNotes().then(notes => {
      setAllNotes(notes)
      setFilteredNotes(notes)
      const uniqueFolders = [...new Set(notes.map(n => n.folder))]
      setFolders(uniqueFolders)
    })
  }, [])

  const handleSearch = (query) => {
    const searched = searchNotes(allNotes, query)
    const filtered = selectedFolder === 'all' 
      ? searched 
      : searched.filter(n => n.folder === selectedFolder)
    setFilteredNotes(filtered)
  }

  const handleFolderChange = (folder) => {
    setSelectedFolder(folder)
    const filtered = folder === 'all' 
      ? allNotes 
      : allNotes.filter(n => n.folder === folder)
    setFilteredNotes(filtered)
  }

  return (
    <div>
      <h1 className="archive-header">📚 Notes Library</h1>
      
      <SearchBar onSearch={handleSearch} />

      {/* Folder Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => handleFolderChange('all')}
          className={`folder-badge cursor-pointer ${
            selectedFolder === 'all' ? 'bg-bronze text-parchment' : ''
          }`}
        >
          All ({allNotes.length})
        </button>
        {folders.map(folder => (
          <button
            key={folder}
            onClick={() => handleFolderChange(folder)}
            className={`folder-badge cursor-pointer ${
              selectedFolder === folder ? 'bg-bronze text-parchment' : ''
            }`}
          >
            {folder.replace(/-/g, ' ')} ({allNotes.filter(n => n.folder === folder).length})
          </button>
        ))}
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.map(note => (
          <NoteCard key={`${note.folder}-${note.slug}`} note={note} />
        ))}
      </div>

      {filteredNotes.length === 0 && (
        <div className="text-center py-12 archive-card">
          <p className="text-xl text-leather">No notes found in the archives.</p>
        </div>
      )}
    </div>
  )
}
