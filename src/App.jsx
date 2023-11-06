import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home, Photo } from "./pages"
function App() {
  const location = useLocation();

  return (
    <main>
      <div className="frame">
        <div className="frame__title">
        </div>
      </div>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="photo/" element={<Photo />} />
        </Routes>
      </AnimatePresence>
    </main>
  )
}

export default App
