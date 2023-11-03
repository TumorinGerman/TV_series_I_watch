import { Routes, Route } from "react-router-dom";
import { React, useState } from "react";

import Header from "./components/Header";
import Main from "./components/pages/Main/Main";
import Footer from "./components/Footer";
import WatchList from "./components/pages/WatchList/WatchList";
import KeepTrack from "./components/pages/KeepTrack/KeepTrack";
import SignInForm from "./components/pages/SignIn/SignInForm";
import CreateNewAccount from "./components/pages/SignIn/CreateNewAccount";
import ModalWindowLogout from "./components/common/ModalWindowLogout";

import UserStateContext from "./context";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <UserStateContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/watchList" element={<WatchList />} />
        <Route path="/keepTrack" element={<KeepTrack />} />
        <Route path="/loginForm" element={<SignInForm />} />
        <Route path="/logOut" element={<ModalWindowLogout />} />
        <Route path="/createNewAcc" element={<CreateNewAccount />} />
      </Routes>
      <Footer />
    </UserStateContext.Provider>
  );
}

export default App;
