import { Sanitary } from "./Sanitary";

export const SanitarysList = ({ sanitary, setSanitary }) => {
  return (
    <div
      className="min-h-screen py-4 px-2"
      style={{ backgroundColor: "#c4d2d0" }}
    >
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="bg-[#c4d2d0] p-4 rounded-lg shadow-inner">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Gestió pacients
            </h4>
            {sanitary.length > 0 ? (
              <Sanitary sanitary={sanitary} setSanitary={setSanitary} />
            ) : (
              <p className="text-gray-600">No hi han sanitaris</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
