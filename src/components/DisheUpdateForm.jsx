import disheService from "../services/dishes/disheService";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDisheEditForm } from "../hooks";
import { InputField } from "./InputField";

export const DisheUpdateForm = ({
    id,
    disheName,
    disheCategory,
    disheClassifications
}) => {
  const navigate = useNavigate();
  const newDishe = (event) => {
    event.preventDefault();
    const form = event.target;
    const clasificacion = {
      C1: form["C1"].value,
      C2: form["C2"].value,
      C3: form["C3"].value,
      C4: form["C4"].value,
      C5: form["C5"].value,
      C6: form["C6"].value,
      C7: form["C7"].value,
      C8: form["C8"].value,
      C9: form["C9"].value,
      C10: form["C10"].value,
      C11: form["C11"].value,
      C12: form["C12"].value,
      C13: form["C13"].value,
      C14: form["C14"].value,
      C15: form["C15"].value,
      C16: form["C16"].value,
      C17: form["C17"].value,
      C18: form["C18"].value,
      C19: form["C19"].value,
      C20: form["C20"].value,
      C21: form["C21"].value,
      C22: form["C22"].value,
      C23: form["C23"].value,
      C24: form["C24"].value,
    }
    const clasificacionesJSON = JSON.stringify(clasificacion);
    const clasificaciones = JSON.parse(clasificacionesJSON);
    const dishe = {
      ...values,
      clasificaciones: clasificaciones
    }
    disheCreate(dishe);
  };

  const disheCreate = (dishe) => {
    disheService.disheEdit(id, dishe.nombre, dishe.categoria, dishe.clasificaciones).then((response) => {
      navigate(-1);
    });
  }

  const { values, handleChange, handleSubmit } = useDisheEditForm(disheCreate, { nombre: disheName, categoria: disheCategory, ...disheClassifications });

  return (
    <div className="container">
      <form onSubmit={newDishe}>
        <InputField
          label="Nombre:"
          name="nombre"
          type="text"
          value={values.nombre}
          onChange={handleChange}
        />
        <InputField
          label="Categoria:"
          name="categoria"
          type="text"
          value={values.categoria}
          onChange={handleChange}
        />
        <InputField
          label="C1:"
          name="C1"
          type="text"
          value={values.C1}
          onChange={handleChange}
        />
        <InputField
          label="C2:"
          name="C2"
          type="text"
          value={values.C2}
          onChange={handleChange}
        />
        <InputField
          label="C3:"
          name="C3"
          type="text"
          value={values.C3}
          onChange={handleChange}
        />
        <InputField
          label="C4:"
          name="C4"
          type="text"
          value={values.C4}
          onChange={handleChange}
        />
        <InputField
          label="C5:"
          name="C5"
          type="text"
          value={values.C5}
          onChange={handleChange}
        />
        <InputField
          label="C6:"
          name="C6"
          type="text"
          value={values.C6}
          onChange={handleChange}
        />
        <InputField
          label="C7:"
          name="C7"
          type="text"
          value={values.C7}
          onChange={handleChange}
        />
        <InputField
          label="C8:"
          name="C8"
          type="text"
          value={values.C8}
          onChange={handleChange}
        />
        <InputField
          label="C9:"
          name="C9"
          type="text"
          value={values.C9}
          onChange={handleChange}
        />
        <InputField
          label="C10:"
          name="C10"
          type="text"
          value={values.C10}
          onChange={handleChange}
        />
        <InputField
          label="C11:"
          name="C11"
          type="text"
          value={values.C11}
          onChange={handleChange}
        />
        <InputField
          label="C12:"
          name="C12"
          type="text"
          value={values.C12}
          onChange={handleChange}
        />
        <InputField
          label="C13:"
          name="C13"
          type="text"
          value={values.C13}
          onChange={handleChange}
        />
        <InputField
          label="C14:"
          name="C14"
          type="text"
          value={values.C14}
          onChange={handleChange}
        />
        <InputField
          label="C15:"
          name="C15"
          type="text"
          value={values.C15}
          onChange={handleChange}
        />
        <InputField
          label="C16:"
          name="C16"
          type="text"
          value={values.C16}
          onChange={handleChange}
        />
        <InputField
          label="C17:"
          name="C17"
          type="text"
          value={values.C17}
          onChange={handleChange}
        />
        <InputField
          label="C18:"
          name="C18"
          type="text"
          value={values.C18}
          onChange={handleChange}
        />
        <InputField
          label="C19:"
          name="C19"
          type="text"
          value={values.C19}
          onChange={handleChange}
        />
        <InputField
          label="C20:"
          name="C20"
          type="text"
          value={values.C20}
          onChange={handleChange}
        />
        <InputField
          label="C21:"
          name="C21"
          type="text"
          value={values.C21}
          onChange={handleChange}
        />
        <InputField
          label="C22:"
          name="C22"
          type="text"
          value={values.C22}
          onChange={handleChange}
        />
        <InputField
          label="C23:"
          name="C23"
          type="text"
          value={values.C23}
          onChange={handleChange}
        />
        <InputField
          label="C24:"
          name="C24"
          type="text"
          value={values.C24}
          onChange={handleChange}
        />
        <div>
          <button type="submit" className="button">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};