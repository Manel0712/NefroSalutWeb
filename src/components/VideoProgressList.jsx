import { VideoProgress } from "./VideoProgress";
export const VideoProgressList = ({
  videoProgress,
  setVideoProgress,
  nombre,
}) => {
  return (
    <div
      className="min-h-screen py-4 px-2"
      style={{ backgroundColor: "#c4d2d0" }}
    >
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="bg-[#c4d2d0] p-4 rounded-lg shadow-inner">
            {videoProgress.length > 0 ? (
              <div className="overflow-x-auto">
                <h3>Videos visualitzats per {nombre}</h3>
                <table className="min-w-full divide-y divide-gray-200 bg-white rounded-md shadow">
                  <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
                    <tr className="text-center">
                      <th className="px-4 py-2">titulo</th>
                      <th className="px-4 py-2">numero de visualizaciones</th>
                      <th className="px-4 py-2">estado de visualizacion</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <VideoProgress
                      videoProgress={videoProgress}
                      setVideoProgress={setVideoProgress}
                    />
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-600">Aquest pacient no te cap progres</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
