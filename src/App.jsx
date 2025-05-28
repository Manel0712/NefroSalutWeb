import { useEffect, useRef, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom";

import { Home } from "./components";
import { Loggin } from "./Loggin";
import { MainMenu } from "./MainMenu";
import { Patients } from "./Patients";
import { AssignForm } from "./AssignForm";
import { Progress } from "./Progress";
import { Register } from "./Register";
import { Dishes } from "./Dishes";
import { DisheDetail } from "./DisheDetail";
import { CreateDishe } from "./CreateDishe";
import { DisheUpdate } from "./DisheUpdate";
import { Videos } from "./Videos";
import { CreateVideo } from "./CreateVideo";
import { VideoUpdate } from "./VideoUpdate";
import { Quizzes } from "./Quizzes";
import { CreateQuiz } from "./CreateQuiz";
import { QuizUpdate } from "./QuizUpdate";

import "./App.css";

function LiveAnnouncer() {
  const location = useLocation();
  const announcerRef = useRef();

  useEffect(() => {
    const audioEnabled = localStorage.getItem("audioEnabled") !== "false";

    const path = location.pathname;
    let message = "";

    switch (path) {
      case "/":
        message = "Has accedit a la pàgina d’inici.";
        break;
      case "/loggin":
        message = "Has accedit a la pàgina d’inici de sessió.";
        break;
      case "/menuPrincipal":
        message = "Has accedit al menú principal.";
        break;
      case "/Pacients":
        message = "Gestió de pacients.";
        break;
      case "/AssignPatient":
        message = "Assignació de pacients.";
        break;
      case "/progress":
        message = "Progrés del pacient.";
        break;
      case "/Register":
        message = "Registre de pacient.";
        break;
      case "/Plats":
        message = "Gestió de plats.";
        break;
      case "/Detail":
        message = "Detall del plat.";
        break;
      case "/CreateDishe":
        message = "Crear un nou plat.";
        break;
      case "/EditDishe":
        message = "Editar plat.";
        break;
      case "/Videos":
        message = "Gestió de vídeos.";
        break;
      case "/CreateVideo":
        message = "Crear vídeo.";
        break;
      case "/EditVideo":
        message = "Editar vídeo.";
        break;
      case "/Quizzes":
        message = "Gestió de trivials.";
        break;
      case "/CreateQuiz":
        message = "Crear trivial.";
        break;
      case "/EditQuiz":
        message = "Editar trivial.";
        break;
      default:
        message = "Pàgina carregada.";
    }

    announcerRef.current.textContent = message;

    if (audioEnabled && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(message);
      window.speechSynthesis.speak(utterance);
    }
  }, [location]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
      ref={announcerRef}
    />
  );
}

function App() {
  const [enabled, setEnabled] = useState(() => {
    return localStorage.getItem("audioEnabled") !== "false";
  });

  const toggle = () => {
    const newState = !enabled;
    localStorage.setItem("audioEnabled", newState);
    setEnabled(newState);
  };

  return (
    <>
      <button onClick={toggle} style={{ margin: "10px" }}>
        {enabled
          ? "🔊 Desactivar audiodescripció"
          : "🔇 Activar audiodescripció"}
      </button>
      <LiveAnnouncer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loggin" element={<Loggin />} />
        <Route path="/menuPrincipal" element={<MainMenu />} />
        <Route path="/Pacients" element={<Patients />} />
        <Route path="/AssignPatient" element={<AssignForm />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Plats" element={<Dishes />} />
        <Route path="/Detail" element={<DisheDetail />} />
        <Route path="/CreateDishe" element={<CreateDishe />} />
        <Route path="/EditDishe" element={<DisheUpdate />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/CreateVideo" element={<CreateVideo />} />
        <Route path="/EditVideo" element={<VideoUpdate />} />
        <Route path="/Quizzes" element={<Quizzes />} />
        <Route path="/CreateQuiz" element={<CreateQuiz />} />
        <Route path="/EditQuiz" element={<QuizUpdate />} />
      </Routes>
    </>
  );
}

export default App;
