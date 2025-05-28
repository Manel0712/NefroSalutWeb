const baseUrl = "http://localhost/apinefrosalut/public/api/personal";
const token = "8OoKQ1nQSmPcnOCfh0mso8bHbjHods6grbwHW0V3c1fa4b8b";
const getAll = () => {
  const request = fetch(baseUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
  return request;
};

const create = (newObject) => {
  const request = fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      nombre: newObject.nombre,
      apellidos: newObject.apellidos,
      email: newObject.email,
      telefono: newObject.telefono,
      password: newObject.password,
      rol: newObject.rol,
      identificador: newObject.identificador,
    }),
  }).then((response) => {
    return response.json();
  });
  return request;
};

const loggin = (newObject) => {
  const request = fetch(`${baseUrl}/loggin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email: newObject.email,
      password: newObject.password,
    }),
  }).then((response) => {
    return response.json();
  });
  return request;
};

const sanitaryDelete = (id) => {
  const request = fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    return response.json();
  });
  return request;
};

const sanitaryEdit = (
  id,
  nombre,
  apellidos,
  email,
  telefono,
  contraseña,
  rol,
  identificador,
) => {
  const data = {
    nombre: nombre,
    apellidos: apellidos,
    email: email,
    telefono: telefono,
    password: contraseña,
    rol: rol,
    identificador: identificador,
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

const getPacientes = (id) => {
  const request = fetch(`${baseUrl}/${id}/pacientes`).then((response) => {
    return response.json();
  });
  return request;
};

const getNuevoPaciente = (idPersonal, idPaciente) => {
  const request = fetch(
    `${baseUrl}/${idPersonal}/asignarpaciente/${idPaciente}`,
  ).then((response) => {
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

export default {
  getAll: getAll,
  create: create,
  loggin: loggin,
  sanitaryDelete: sanitaryDelete,
  sanitaryEdit: sanitaryEdit,
  getPacientes: getPacientes,
  getNuevoPaciente: getNuevoPaciente,
  getProgreso: getProgreso,
};
