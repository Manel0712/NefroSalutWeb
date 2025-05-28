import { PatientsList } from "./components";
import { usePatient } from "./hooks";
import { useLocation, useNavigate } from "react-router-dom";
import patientService from "./services/users/patientService.js";

export const Patients = () => {
  const { state: data } = useLocation();
  const navigate = useNavigate();
  const { patient, handlePatient } = usePatient(data[0].id);
  const handleNewPatient = () => {
    navigate("/AssignPatient", { state: data });
  };
  const handleDeletePatient = (id) => {
    patientService.patientRemove(data[0].id, id).then(() => {
      patientService.getAll(data[0].id).then((data) => {
        handlePatient(data[0]);
      });
    });
  };
  const handlePatientProgress = (id, nombre) => {
    navigate("/Progress", {
      state: {
        data,
        id,
        nombre,
      },
    });
  };
  return (
    <>
      <h1>PATIENTS</h1>
      <div className="flex justify-end w-full">
        <button
          style={{ marginLeft: "85.5%" }}
          onClick={handleNewPatient}
          className="ml-20, bg-slate-300 hover:bg-slate-400 transition px-6 py-4 rounded-lg shadow flex flex-col items-center"
        >
          <span className="text-xl font-semibold mb-2">
            assign me a patient
          </span>
          <span className="text-3xl">➕👤</span>
        </button>
      </div>
      <PatientsList
        patient={patient}
        setPatient={handlePatient}
        handleDeletePatient={handleDeletePatient}
        handlePatientProgress={handlePatientProgress}
      />
      <button onClick={() => navigate(-1)}>Sortir</button>
    </>
  );
};
