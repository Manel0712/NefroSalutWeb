export const VideoProgress = ({ videoProgress, setVideoProgress }) => {
    return videoProgress.map((videoProgressInformation, i) => (
      <tr key={i} className="hover:bg-gray-50">
        <td className="px-4 py-2" style={{ textAlign: 'center' }}>{videoProgressInformation.titulo}</td>
        <td className="px-4 py-2" style={{ textAlign: 'center' }}>{videoProgressInformation.pivot.num_visualizaciones}</td>
        <td className="px-4 py-2" style={{ textAlign: 'center' }}>{videoProgressInformation.pivot.estado_visualizacion}</td>
      </tr>
    ));
  };