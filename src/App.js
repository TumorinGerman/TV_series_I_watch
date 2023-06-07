import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/pages/Main/Main";
import Footer from "./components/Footer";
import KeepTrack from "./components/pages/KeepTrack/KeepTrack";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/keepTrack" element={<KeepTrack />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
