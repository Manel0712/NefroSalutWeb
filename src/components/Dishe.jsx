export const Dishe = ({
  dishe,
  setDishe,
  handleDeleteDishe,
  handleDetailDishe,
  handleEditDishe,
}) => {
  return dishe.map((disheInformation, i) => (
    <tr key={i} className="hover:bg-gray-50">
      <td className="px-4 py-2">{disheInformation.nombre}</td>
      <td className="px-4 py-2">{disheInformation.categoria}</td>
      <td className="px-4 py-2">
        <button
          onClick={() => handleDeleteDishe(disheInformation.id)}
          className="text-blue-600 hover:underline"
        >
          Quitar
        </button>
        <button
          onClick={() =>
            handleEditDishe(
              disheInformation.id,
              disheInformation.nombre,
              disheInformation.categoria,
              disheInformation.clasificaciones,
            )
          }
          className="text-blue-600 hover:underline"
        >
          Editar
        </button>
        <button
          onClick={() =>
            handleDetailDishe(
              disheInformation.nombre,
              disheInformation.categoria,
              disheInformation.clasificaciones,
            )
          }
          className="text-blue-600 hover:underline"
        >
          Detalle
        </button>
      </td>
    </tr>
  ));
};
