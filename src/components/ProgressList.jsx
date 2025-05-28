import { Progress } from "./Progress";
export const ProgressList = ({ progress, setProgress }) => {
  return (
    <div
      className="min-h-screen py-4 px-2"
      style={{ backgroundColor: "#c4d2d0" }}
    >
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="bg-[#c4d2d0] p-4 rounded-lg shadow-inner">
            {progress.length > 0 ? (
              <div className="overflow-x-auto">
                <h3>Progres general</h3>
                <table className="min-w-full divide-y divide-gray-200 bg-white rounded-md shadow">
                  <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
                    <tr className="text-center">
                      <th className="px-4 py-2">power_ups</th>
                      <th className="px-4 py-2">monedas</th>
                      <th className="px-4 py-2">puntos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <Progress progress={progress} setProgress={setProgress} />
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
