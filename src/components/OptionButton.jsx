export const OptionButton = ({ title, icon, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="bg-slate-300 hover:bg-slate-400 transition px-6 py-4 rounded-lg shadow flex flex-col items-center"
      >
        <span className="text-xl font-semibold mb-2">{title}</span>
        <span className="text-3xl">{icon}</span>
      </button>
    );
};  