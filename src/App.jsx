import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import NotesLibrary from './pages/NotesLibrary';
import NoteView from './pages/NoteView';
import TagsView from './pages/TagsView';
import Timeline from './pages/Timeline';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="notes" element={<NotesLibrary />} />
          <Route path="notes/:slug" element={<NoteView />} />
          <Route path="tags" element={<TagsView />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;