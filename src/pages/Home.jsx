import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { loadAllNotes } from '../utils/noteLoader'
import NoteCard from '../components/NoteCard'

export default function Home() {
  const [recentNotes, setRecentNotes] = useState([])
  const [stats, setStats] = useState({ total: 0, folders: 0, tags: 0 })

  useEffect(() => {
    loadAllNotes().then(notes => {
      setRecentNotes(notes.slice(0, 6))
      const uniqueTags = new Set(notes.flatMap(n => n.tags || []))
      const uniqueFolders = new Set(notes.map(n => n.folder))
      setStats({
        total: notes.length,
        folders: uniqueFolders.size,
        tags: uniqueTags.size
      })
    })
  }, [])

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-16 py-12 archive-border bg-gradient-to-br from-sepia to-parchment">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-bronze mb-4">
          ⚜ Runtime Archives ⚜
        </h1>
        <p className="text-xl text-leather max-w-2xl mx-auto leading-relaxed">
          A curated repository of knowledge, insights, and discoveries. 
          Explore the archives of learning and innovation.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { label: 'Total Notes', value: stats.total, icon: '📚' },
          { label: 'Categories', value: stats.folders, icon: '📁' },
          { label: 'Tags', value: stats.tags, icon: '🏷️' }
        ].map(stat => (
          <div key={stat.label} className="archive-card text-center">
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-display font-bold text-bronze">{stat.value}</div>
            <div className="text-leather">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Recent Notes */}
      <h2 className="archive-header">Recent Entries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {recentNotes.map(note => (
          <NoteCard key={`${note.folder}-${note.slug}`} note={note} />
        ))}
      </div>

      <div className="text-center">
        <Link to="/notes" className="royal-button inline-block">
          Explore Full Library →
        </Link>
      </div>
    </div>
  )
}
