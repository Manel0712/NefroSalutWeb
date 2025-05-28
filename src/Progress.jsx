import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import patientService from "./services/users/patientService.js";
import { ProgressList, VideoProgressList, QuizProgressList } from "./components";

export const Progress = () => {
    const { state: data } = useLocation();
    const navigate = useNavigate();
    const [progress, setProgress] = useState([]);
    const [videoProgress, setVideoProgress] = useState([]);
    const [quizProgress, setQuizProgress] = useState([]);
    const patientProgress = () => {
        patientService.getProgreso(data.id).then((results) => {
            setProgress(results);
        });
    };
    const patientVideoProgress = () => {
        patientService.getVideosProgreso(data.id).then((results) => {
            setVideoProgress(results);
        });
    };
    const patientQuizProgress = () => {
        patientService.getQuizProgreso(data.id).then((results) => {
            setQuizProgress(results);
        });
    };
    useEffect(() => {
        patientProgress();
        patientVideoProgress();
        patientQuizProgress();
    }, []);
    return (
        <>
            <h1>Progres de {data.nombre}</h1>
            <ProgressList progress={progress} setProgress={setProgress} />
            <VideoProgressList videoProgress={videoProgress} setProgress={setVideoProgress} nombre={data.nombre} />
            <QuizProgressList quizProgress={quizProgress} setQuizProgress={setQuizProgress} nombre={data.nombre} />
            <button onClick={() => navigate(-1)}>
                Sortir
            </button>
        </>
    )
}