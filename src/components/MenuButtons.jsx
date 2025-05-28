export const MenuButtons = ({ label, onClick }) => (
  <button
    className="bg-[#A2B7B5] hover:bg-[#91a9a5] text-black font-semibold py-2 px-6 rounded shadow-md mb-4 w-48 border border-gray-600"
    onClick={onClick}
  >
    {label}
  </button>
);