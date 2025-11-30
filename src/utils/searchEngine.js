export function searchNotes(notes, query) {
  if (!query.trim()) return notes
  
  const lowerQuery = query.toLowerCase()
  
  return notes.filter(note => {
    const searchableText = [
      note.title,
      note.excerpt,
      note.category,
      ...(note.tags || [])
    ].join(' ').toLowerCase()
    
    return searchableText.includes(lowerQuery)
  })
}

export function getAllTags(notes) {
  const tagMap = new Map()
  
  notes.forEach(note => {
    (note.tags || []).forEach(tag => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
    })
  })
  
  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
}
