const baseUrl = "https://nefrosalutapi.onrender.com/public/api/paciente";
const baseUrlPersonal =
  "https://nefrosalutapi.onrender.com/public/api/personal";
const token = "8OoKQ1nQSmPcnOCfh0mso8bHbjHods6grbwHW0V3c1fa4b8b";
const getAll = (id) => {
  const request = fetch(`${baseUrlPersonal}/${id}/pacientes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
  return request;
};

const getAllPatients = () => {
  const request = fetch(`${baseUrl}/pacientesSinMedico`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
  return request;
};

const create = (id, idPaciente) => {
  const request = fetch(
    `${baseUrlPersonal}/${id}/asignarpaciente/${idPaciente}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  ).then((response) => {
    return response.json();
  });
  return request;
};

const patientRemove = (id, idPaciente) => {
  const request = fetch(
    `${baseUrlPersonal}/${id}/quitarpaciente/${idPaciente}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  ).then((response) => {
    return response.json();
  });
  return request;
};

const patientDelete = (id) => {
  const request = fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    return response.json();
  });
  return request;
};

const patientEdit = (
  id,
  nombre,
  apellidos,
  email,
  telefono,
  contraseña,
  estado_enfermedad,
  estado_animo,
  actividad_fisica,
  diabetico,
  hipertenso,
  estadio,
  puntos,
  personal_sanitario_id,
  DNI,
  fecha_nacimiento,
  peso,
  altura,
  IMC,
  clasificacion,
) => {
  const data = {
    nombre: nombre,
    apellidos: apellidos,
    email: email,
    telefono: telefono,
    password: contraseña,
    estado_enfermedad: estado_enfermedad,
    estado_animo: estado_animo,
    actividad_fisica: actividad_fisica,
    diabetico: diabetico,
    hipertenso: hipertenso,
    estadio: estadio,
    puntos: puntos,
    personal_sanitario_id: personal_sanitario_id,
    DNI: DNI,
    fecha_nacimiento: fecha_nacimiento,
    peso: peso,
    altura: altura,
    IMC: IMC,
    clasificacion: clasificacion,
  };
  const request = fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    return response.json();
  });
  return request;
};

const getProgreso = (id) => {
  const request = fetch(`${baseUrl}/${id}/progreso`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
  return request;
};

const getVideosProgreso = (id) => {
  const request = fetch(`${baseUrl}/progresoVideos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
  return request;
};

const getQuizProgreso = (id) => {
  const request = fetch(`${baseUrl}/consultarpartida/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
  return request;
};

export default {
  getAll: getAll,
  getAllPatients: getAllPatients,
  create: create,
  patientRemove: patientRemove,
  patientDelete: patientDelete,
  patientEdit: patientEdit,
  getProgreso: getProgreso,
  getVideosProgreso: getVideosProgreso,
  getQuizProgreso: getQuizProgreso,
};
