import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Photo } from "./pages"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="photo/:id" element={<Photo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
