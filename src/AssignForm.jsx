import React from "react";
import { useLocation } from "react-router-dom";
import { AssignPatientForm } from "./components";

export const AssignForm = () => {
  const { state: data } = useLocation();
  return (
    <div>
      <h1>Assignar pacient</h1>
      <AssignPatientForm data={data} />
    </div>
  );
};
