import { Patient } from "./Patient";

export const PatientsList = ({
  patient,
  setPatient,
  handleDeletePatient,
  handlePatientProgress,
}) => {
  return (
    <div
      className="min-h-screen py-4 px-2"
      style={{ backgroundColor: "#c4d2d0" }}
    >
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="bg-[#c4d2d0] p-4 rounded-lg shadow-inner">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Gestió pacients
            </h4>

            {patient.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 bg-white rounded-md shadow">
                  <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
                    <tr className="text-center">
                      <th className="px-4 py-2">Nom</th>
                      <th className="px-4 py-2">Cognoms</th>
                      <th className="px-4 py-2">Correu</th>
                      <th className="px-4 py-2">Telèfon</th>
                      <th className="px-4 py-2">Estat Malaltia</th>
                      <th className="px-4 py-2">Estat Ànim</th>
                      <th className="px-4 py-2">Activitat Física</th>
                      <th className="px-4 py-2">Diabètic</th>
                      <th className="px-4 py-2">Hipertens</th>
                      <th className="px-4 py-2">Estadi</th>
                      <th className="px-4 py-2">Punts</th>
                      <th className="px-4 py-2">ID Sanitari</th>
                      <th className="px-4 py-2">DNI</th>
                      <th className="px-4 py-2">Naixement</th>
                      <th className="px-4 py-2">Pes</th>
                      <th className="px-4 py-2">Alçada</th>
                      <th className="px-4 py-2">IMC</th>
                      <th className="px-4 py-2">Classificació</th>
                      <th className="px-4 py-2">Accions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <Patient
                      patient={patient}
                      setPatient={setPatient}
                      handleDeletePatient={handleDeletePatient}
                      handlePatientProgress={handlePatientProgress}
                    />
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-600">No hi han pacients</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
