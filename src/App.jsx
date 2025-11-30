import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import NotesLibrary from './pages/NotesLibrary'
import NoteView from './pages/NoteView'
import TagsView from './pages/TagsView'
import About from './pages/About'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<NotesLibrary />} />
        <Route path="/notes/:folder/:slug" element={<NoteView />} />
        <Route path="/tags" element={<TagsView />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App
