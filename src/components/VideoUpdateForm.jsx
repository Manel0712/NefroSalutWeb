import videosService from "../services/videos/videosService";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useVideoEditForm } from "../hooks";
import { InputField } from "./InputField";

export const VideoUpdateForm = ({
    id,
    videoTitle,
    videoLink,
    videoCategory,
}) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    videosService.getAllCategories().then((data) => {
      setCategories(data);
    })
  }, []);

  const videoUpdate = (values) => {
    videosService.videoEdit(id, values.titulo, values.link, values.categoria).then((response) => {
      navigate(-1);
    });
  }

  const { values, handleChange, handleSubmit } = useVideoEditForm(videoUpdate, { titulo: videoTitle, link: videoLink, categoria: videoCategory, });

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <InputField
          label="Titulo:"
          name="titulo"
          type="text"
          value={values.titulo}
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
            <select name="categoria" value={values.categoria} onChange={handleChange} className="border rounded px-4 py-2 w-full" required style={{display: "block", width: "100%", padding: "0.5rem"}}>
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
};