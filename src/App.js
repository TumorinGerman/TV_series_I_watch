import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/pages/Main/Main";
import Footer from "./components/Footer";
import KeepTrack from "./components/pages/KeepTrack/KeepTrack";
import SignInForm from "./components/pages/SignIn/SignInForm";
import CreateNewAccount from "./components/pages/SignIn/CreateNewAccount";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/keepTrack" element={<KeepTrack />} />
        <Route path="/loginForm" element={<SignInForm />} />
        <Route path="/createNewAcc" element={<CreateNewAccount />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
