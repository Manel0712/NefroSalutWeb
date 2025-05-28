export const Patient = ({ patient, setPatient, handleDeletePatient, handlePatientProgress }) => {
  return patient.map((patientInformation, i) => (
    <tr key={i} className="hover:bg-gray-50">
      <td className="px-4 py-2">{patientInformation.nombre}</td>
      <td className="px-4 py-2">{patientInformation.apellidos}</td>
      <td className="px-4 py-2">{patientInformation.email}</td>
      <td className="px-4 py-2">{patientInformation.telefono}</td>
      <td className="px-4 py-2">{patientInformation.estado_enfermedad}</td>
      <td className="px-4 py-2">{patientInformation.estado_animo}</td>
      <td className="px-4 py-2">{patientInformation.actividad_fisica ? 'Sí' : 'No'}</td>
      <td className="px-4 py-2">{patientInformation.diabetico ? 'Sí' : 'No'}</td>
      <td className="px-4 py-2">{patientInformation.hipertenso ? 'Sí' : 'No'}</td>
      <td className="px-4 py-2">{patientInformation.estadio}</td>
      <td className="px-4 py-2">{patientInformation.puntos}</td>
      <td className="px-4 py-2">{patientInformation.personal_sanitario_id}</td>
      <td className="px-4 py-2">{patientInformation.DNI}</td>
      <td className="px-4 py-2">{patientInformation.fecha_nacimiento}</td>
      <td className="px-4 py-2">{patientInformation.peso}</td>
      <td className="px-4 py-2">{patientInformation.altura}</td>
      <td className="px-4 py-2">{patientInformation.IMC}</td>
      <td className="px-4 py-2">{patientInformation.clasificacion}</td>
      <td className="px-4 py-2">
        <button
          onClick={() => handleDeletePatient(patientInformation.id)}
          className="text-blue-600 hover:underline"
        >
          Quitar
        </button>
        <button
          onClick={() => handlePatientProgress(patientInformation.id, patientInformation.nombre)}
          className="text-blue-600 hover:underline"
        >
          Progreso
        </button>
      </td>
    </tr>
  ));
};