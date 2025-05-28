import disheService from "../services/dishes/disheService";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDisheCreateForm } from "../hooks";
import { InputField } from "./InputField";

export const DisheCreateForm = () => {
  const navigate = useNavigate();
  const newDishe = (event) => {
    event.preventDefault();
    const form = event.target;
    const clasificacion = {
      C1: form["c1"].value,
      C2: form["c2"].value,
      C3: form["c3"].value,
      C4: form["c4"].value,
      C5: form["c5"].value,
      C6: form["c6"].value,
      C7: form["c7"].value,
      C8: form["c8"].value,
      C9: form["c9"].value,
      C10: form["c10"].value,
      C11: form["c11"].value,
      C12: form["c12"].value,
      C13: form["c13"].value,
      C14: form["c14"].value,
      C15: form["c15"].value,
      C16: form["c16"].value,
      C17: form["c17"].value,
      C18: form["c18"].value,
      C19: form["c19"].value,
      C20: form["c20"].value,
      C21: form["c21"].value,
      C22: form["c22"].value,
      C23: form["c23"].value,
      C24: form["c24"].value,
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
    disheService.create(dishe).then((response) => {
      navigate(-1);
    });
  }

  const { values, handleChange, handleSubmit } = useDisheCreateForm(disheCreate)

  return (
    <div className="container">
      <form onSubmit={newDishe}>
        <InputField
          label="Nombre:"
          name="nombre"
          type="text"
          value={values.name}
          onChange={handleChange}
        />
        <InputField
          label="Categoria:"
          name="categoria"
          type="text"
          value={values.category}
          onChange={handleChange}
        />
        <InputField
          label="C1:"
          name="c1"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C2:"
          name="c2"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C3:"
          name="c3"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C4:"
          name="c4"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C5:"
          name="c5"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C6:"
          name="c6"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C7:"
          name="c7"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C8:"
          name="c8"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C9:"
          name="c9"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C10:"
          name="c10"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C11:"
          name="c11"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C12:"
          name="c12"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C13:"
          name="c13"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C14:"
          name="c14"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C15:"
          name="c15"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C16:"
          name="c16"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C17:"
          name="c17"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C18:"
          name="c18"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C19:"
          name="c19"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C20:"
          name="c20"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C21:"
          name="c21"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C22:"
          name="c22"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C23:"
          name="c23"
          type="text"
          onChange={handleChange}
        />
        <InputField
          label="C24:"
          name="c24"
          type="text"
          onChange={handleChange}
        />
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};