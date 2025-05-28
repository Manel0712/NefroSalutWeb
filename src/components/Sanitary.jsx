export const Sanitary = ({ sanitary, setSanitary }) => {
  return sanitary.map((sanitaryInformation, i) => (
    <ul key={i}>
      <li>{sanitaryInformation.nombre} </li>
      <li>{sanitaryInformation.apellidos} </li>
      <li>{sanitaryInformation.email}</li>
      <li>{sanitaryInformation.telefono} </li>
      <li>{sanitaryInformation.contraseña}</li>
      <li>{sanitaryInformation.rol}</li>
      <li>{sanitaryInformation.identificador}</li>
    </ul>
  ));
};
