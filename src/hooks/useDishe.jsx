import { useState, useEffect } from "react";
import disheService from "../services/dishes/disheService.js";

export const useDishe = () => {
  const [dishe, setDishe] = useState([]);
  const handleDishe = (newValue) => {
    setDishe(newValue);
  };
  const getDishe = () => {
    disheService.getAll().then((data) => {
      setDishe(data);
    });
  };
  useEffect(() => {
    getDishe();
  }, []);
  return {
    dishe,
    handleDishe,
  };
};