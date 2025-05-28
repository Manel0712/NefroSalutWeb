import { useLocation, useNavigate } from 'react-router-dom';
import { OptionButton } from './components/OptionButton';
import { useOptions } from './hooks/useOptions';

export const MainMenu = () => {
  const { state: data } = useLocation();
  const navigate = useNavigate();
  const options = useOptions();

  if (!data) {
    navigate('/loggin');
  }

  const handleOptionClick = (title) => {
    navigate(`/${title}`, { state: data });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-center py-10">
      <h1 className="text-2xl font-bold mb-6">Benvingut/da<br />{data[0].nombre+" "+data[0].apellidos}</h1>
      <div className="flex justify-center gap-10 mt-10">
        {options.map((opt, i) => (
          <OptionButton
            key={i}
            title={opt.title}
            icon={opt.icon}
            onClick={() => handleOptionClick(opt.title)}
          />
        ))}
      </div>
      <button
        onClick={() => navigate('/loggin')}
        className="mt-10 bg-red-500 text-white px-4 py-2 rounded"
      >
        Cerrar sesión
      </button>
    </div>
  );
};