import { useState } from "react";

export const useAssignForm = () => {
  const [newPatient, setPatient] = useState("");

  const handleNewPatientValue = (event) => {
    setPatient(event.target.value);
  };

  return {
    newPatient,
    handleNewPatientValue,
  };
};
