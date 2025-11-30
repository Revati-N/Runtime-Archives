import { useState, useEffect } from 'react'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const debounce = setTimeout(() => {
      onSearch(query)
    }, 300)
    
    return () => clearTimeout(debounce)
  }, [query, onSearch])

  return (
    <div className="mb-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="🔍 Search archives..."
        className="w-full px-6 py-3 archive-border bg-sepia/70 
                   focus:outline-none focus:ring-2 focus:ring-bronze 
                   text-lg placeholder:text-leather/50"
      />
    </div>
  )
}
