import React from 'react';
import { useNavigate } from "react-router-dom";

function Hoc({ children }) {
  const isAuthed = true; 
  const navigate = useNavigate();

  if (isAuthed) {
    return <>{children}</>;
  } else {
    navigate("/error");
  }
}

export default Hoc;
