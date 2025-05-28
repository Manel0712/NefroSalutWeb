export const Video = ({
  video,
  setVideo,
  handleDeleteVideo,
  handleEditVideo,
}) => {
  return video.map((videoInformation, i) => (
    <tr key={i} className="hover:bg-gray-50">
      <td className="px-4 py-2">{videoInformation.titulo}</td>
      <>
        <td className="px-4 py-2">
          <a href={videoInformation.link}>{videoInformation.link}</a>
        </td>
      </>
      <td className="px-4 py-2">{videoInformation.categorias.nombre}</td>
      <td className="px-4 py-2">
        <button
          onClick={() => handleDeleteVideo(videoInformation.id)}
          className="text-blue-600 hover:underline"
        >
          Quitar
        </button>
        <button
          onClick={() =>
            handleEditVideo(
              videoInformation.id,
              videoInformation.titulo,
              videoInformation.link,
              videoInformation.categoria_id,
            )
          }
          className="text-blue-600 hover:underline"
        >
          Editar
        </button>
      </td>
    </tr>
  ));
};
