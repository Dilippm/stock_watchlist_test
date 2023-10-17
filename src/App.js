import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import Navbars from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbars/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;