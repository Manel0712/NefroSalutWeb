import { DishesList } from "./components";
import { useDishe } from "./hooks";
import { useLocation, useNavigate } from "react-router-dom";
import disheService from "./services/dishes/disheService.js";

export const Dishes = () => {
  const { state: data } = useLocation();
  const navigate = useNavigate();
  const { dishe, handleDishe } = useDishe();
  const handleNewDishe = () => {
    navigate("/CreateDishe");
  };
  const handleDeleteDishe = (id) => {
    disheService.disheDietDelete(id).then(() => {
      disheService.disheDelete(id).then(() => {
        disheService.getAll().then((data) => {
          handleDishe(data);
        });
      });
    });
  };
  const handleDetailDishe = (nombre, categoria, clasificaciones) => {
    navigate("/Detail", {
      state: {
        nombre,
        categoria,
        clasificaciones,
      },
    });
  };
  const handleEditDishe = (id, nombre, categoria, clasificaciones) => {
    navigate("/EditDishe", {
      state: {
        id,
        nombre,
        categoria,
        clasificaciones,
      },
    });
  };
  return (
    <>
      <h1>DISHES</h1>
      <div className="flex justify-end w-full">
        <button
          style={{ marginLeft: "85.5%" }}
          onClick={handleNewDishe}
          className="ml-20, bg-slate-300 hover:bg-slate-400 transition px-6 py-4 rounded-lg shadow flex flex-col items-center"
        >
          <span className="text-xl font-semibold mb-2">create new dish</span>
          <span className="text-3xl">➕🍽️</span>
        </button>
      </div>
      <DishesList
        dishe={dishe}
        setDishe={handleDishe}
        handleDeleteDishe={handleDeleteDishe}
        handleDetailDishe={handleDetailDishe}
        handleEditDishe={handleEditDishe}
      />
      <button onClick={() => navigate(-1)}>Sortir</button>
    </>
  );
};
