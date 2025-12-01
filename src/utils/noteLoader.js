// Simple frontmatter parser - no dependencies!
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)
  
  if (!match) {
    return { data: {}, content: content }
  }
  
  const [, frontmatter, body] = match
  const data = {}
  
  // Parse YAML-like frontmatter
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':')
    if (colonIndex > -1) {
      const key = line.slice(0, colonIndex).trim()
      let value = line.slice(colonIndex + 1).trim()
      
      // Handle arrays like tags: [tag1, tag2]
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(v => v.trim())
      }
      // Remove quotes if present
      else if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
      // Keep everything else as string (including dates)
      
      data[key] = value
    }
  })
  
  return { data, content: body }
}

// Rest of the code stays the same...
export async function loadAllNotes() {
  const allNotes = []
  
  const notesList = [
    { folder: 'machine-learning', slug: 'transformers-explained' },
    { folder: 'curiosity', slug: 'yawns'},
    { folder: 'personal', slug: 'my-journey' },
  ]
  
  for (const { folder, slug } of notesList) {
    try {
      const response = await fetch(`/runtime-archives/notes/${folder}/${slug}.md`)
      
      if (!response.ok) {
        console.warn(`⚠️ Could not load: ${folder}/${slug}`)
        continue
      }
      
      const text = await response.text()
      const { data, content } = parseFrontmatter(text)
      
      allNotes.push({
        slug,
        folder,
        title: data.title || slug.replace(/-/g, ' '),
        excerpt: data.excerpt || content.slice(0, 150).replace(/[#*`]/g, ''),
        tags: Array.isArray(data.tags) ? data.tags : [],
        category: data.category || folder.replace(/-/g, ' '),
        date: String(data.date || '2025-11-30'), // Force string
        content,
        ...data
      })
      
      console.log(`✅ Loaded: ${folder}/${slug}`)
    } catch (error) {
      console.error(`❌ Error loading ${folder}/${slug}:`, error.message)
    }
  }
  
  console.log(`📚 Total notes loaded: ${allNotes.length}`)
  return allNotes
}

export async function loadNote(folder, slug) {
  try {
    const response = await fetch(`/runtime-archives/notes/${folder}/${slug}.md`)
    
    if (!response.ok) {
      throw new Error(`Note not found: ${folder}/${slug}`)
    }
    
    const text = await response.text()
    const { data, content } = parseFrontmatter(text)
    
    return {
      slug,
      folder,
      title: data.title || slug.replace(/-/g, ' '),
      tags: Array.isArray(data.tags) ? data.tags : [],
      category: data.category || folder.replace(/-/g, ' '),
      date: String(data.date || '2025-11-30'), // Force string
      content,
      ...data
    }
  } catch (error) {
    console.error('❌ Error loading note:', error)
    return null
  }
}
