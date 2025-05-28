import videosService from "../services/videos/videosService";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useVideoCreateForm } from "../hooks";
import { InputField } from "./InputField";

export const VideoCreateForm = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    videosService.getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);
  const newVideo = (values) => {
    videosService.create(values).then((response) => {
      navigate(-1);
    });
  };

  const { values, handleChange, handleSubmit } = useVideoCreateForm(newVideo);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <InputField
          label="Titulo:"
          name="titulo"
          type="text"
          value={values.title}
          onChange={handleChange}
        />
        <InputField
          label="Link:"
          name="link"
          type="text"
          value={values.link}
          onChange={handleChange}
        />
        <div className="mb-4">
          <label className="block mb-2">
            Categoría:
            <select
              name="categoria"
              value={values.categoria}
              onChange={handleChange}
              className="border rounded px-4 py-2 w-full"
              required
              style={{ display: "block", width: "100%", padding: "0.5rem" }}
            >
              <option value="">-- Selecciona una categoría --</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.nombre}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
