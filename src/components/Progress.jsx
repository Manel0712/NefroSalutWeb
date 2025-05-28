export const Progress = ({ progress, setProgress }) => {
    return progress.map((progressInformation, i) => (
      <tr key={i} className="hover:bg-gray-50">
        <td className="px-4 py-2" style={{ textAlign: 'center' }}>{progressInformation.power_ups}</td>
        <td className="px-4 py-2" style={{ textAlign: 'center' }}>{progressInformation.monedas}</td>
        <td className="px-4 py-2" style={{ textAlign: 'center' }}>{progressInformation.puntos}</td>
      </tr>
    ));
  };