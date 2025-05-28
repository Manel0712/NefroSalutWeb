import { useLocation, useNavigate } from "react-router-dom";

export const DisheDetail = () => {
  const { state: data } = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen py-4 px-2"
      style={{ backgroundColor: "#c4d2d0" }}
    >
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="bg-[#c4d2d0] p-4 rounded-lg shadow-inner">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Detall plat
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 bg-white rounded-md shadow">
                <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
                  <tr className="text-center">
                    <th className="px-4 py-2">Nom</th>
                    <th className="px-4 py-2">Categoria</th>
                    <th className="px-4 py-2">Classificacions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 text-center">
                    <td className="px-4 py-2">{data.nombre}</td>
                    <td className="px-4 py-2">{data.categoria}</td>
                    <td className="px-4 py-2">
                      <div className="overflow-x-auto">
                        <table className="min-w-max border border-gray-300 text-sm text-center">
                          <thead>
                            <tr className="bg-gray-200">
                              {Object.keys(data.clasificaciones).map((code) => (
                                <th key={code} className="border px-2 py-1">
                                  {code}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              {Object.values(data.clasificaciones).map(
                                (value, index) => (
                                  <td key={index} className="border px-2 py-1">
                                    {value}
                                  </td>
                                ),
                              )}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
