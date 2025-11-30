import matter from 'gray-matter'

export async function loadAllNotes() {
  const folders = ['machine-learning', 'web-development', 'personal']
  const allNotes = []

  for (const folder of folders) {
    try {
      const modules = import.meta.glob('/public/notes/**/*.md', { 
        as: 'raw',
        eager: false 
      })
      
      for (const path in modules) {
        if (path.includes(`/${folder}/`)) {
          const content = await modules[path]()
          const { data, content: markdown } = matter(content)
          const slug = path.split('/').pop().replace('.md', '')
          
          allNotes.push({
            slug,
            folder,
            title: data.title || slug,
            excerpt: data.excerpt || markdown.slice(0, 150),
            tags: data.tags || [],
            category: data.category || folder,
            date: data.date || 'Recent',
            content: markdown,
            ...data
          })
        }
      }
    } catch (error) {
      console.error(`Error loading notes from ${folder}:`, error)
    }
  }

  return allNotes
}

export async function loadNote(folder, slug) {
  try {
    const response = await fetch(`/notes/${folder}/${slug}.md`)
    const text = await response.text()
    const { data, content } = matter(text)
    
    return {
      slug,
      folder,
      title: data.title || slug,
      tags: data.tags || [],
      category: data.category || folder,
      date: data.date || 'Recent',
      content,
      ...data
    }
  } catch (error) {
    console.error('Error loading note:', error)
    return null
  }
}
