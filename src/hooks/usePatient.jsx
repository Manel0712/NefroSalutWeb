import { useState, useEffect } from "react";
import patientService from "../services/users/patientService.js";

export const usePatient = (id) => {
  const [patient, setPatient] = useState([]);
  const handlePatient = (newValue) => {
    setPatient(newValue);
  };
  const getPatient = () => {
    patientService.getAll(id).then((data) => {
      setPatient(data[0]);
    });
  };
  useEffect(() => {
    getPatient();
  }, []);
  return {
    patient,
    handlePatient,
  };
};
