
import { useState, useEffect } from "react";
import sanitaryService from "../services/users/sanitaryService.js";

export const useSanitary = () => {
  const [sanitary, setSanitary] = useState([]);
  const handleSanitary = (newValue) => {
    setSanitary(newValue);
  };
  const getSanitary = () => {
    sanitaryService.getAll().then((data) => {
      setSanitary(data[0]);
    });
  };
  useEffect(() => {
    getSanitary();
  }, []);
  return {
    sanitary,
    handleSanitary,
  };
};
