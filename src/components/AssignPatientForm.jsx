import patientService from "../services/users/patientService";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const AssignPatientForm = ({ data }) => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [selectedPatientId, setSelectedPatientId] = useState("");
  const assignPatient = (event) => {
    event.preventDefault();
    const newPatients = {
      id: data[0].id,
      idPatient: selectedPatientId,
    };
    patientService
      .create(newPatients.id, newPatients.idPatient)
      .then((response) => {
        navigate("/pacient", { state: data });
      });
  };
  useEffect(() => {
    patientService.getAllPatients().then((data) => {
      setPatients(data);
    });
  }, []);
  return (
    <div className="container">
      <form onSubmit={assignPatient}>
        <label htmlFor="new-Name">Selecciona un paciente</label>
        <select
          id="new-Name"
          value={selectedPatientId}
          onChange={(e) => setSelectedPatientId(e.target.value)}
        >
          <option value="">Selecciona un paciente</option>
          {patients.map((patient) => (
            <option key={patient.id} value={patient.id}>
              {patient.nombre} {patient.apellidos}
            </option>
          ))}
        </select>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
