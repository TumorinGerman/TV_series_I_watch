import { React, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import UserStateContext from "../../../context";

const KeepTrack = () => {
  const { currentUser } = useContext(UserStateContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/loginForm");
    }
  }, []);
  return <div>Track</div>;
};

export default KeepTrack;
