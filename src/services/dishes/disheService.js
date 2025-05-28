const baseUrl = "http://localhost/apinefrosalut/public/api/plato";
const token = "8OoKQ1nQSmPcnOCfh0mso8bHbjHods6grbwHW0V3c1fa4b8b";
const getAll = () => {
  const request = fetch(`${baseUrl}`, {
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
      categoria: newObject.categoria,
      clasificaciones: newObject.clasificaciones,
    }),
  }).then((response) => {
    return response.json();
  });
  return request;
};

const disheDelete = (id) => {
  const request = fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
  return request;
};

const disheDietDelete = (id) => {
  const request = fetch(`${baseUrl}/dietas/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
  return request;
};

const disheEdit = (id, nombre, categoria, clasificaciones) => {
  const data = {
    nombre: nombre,
    categoria: categoria,
    clasificaciones: clasificaciones,
  };
  const request = fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((response) => {
    return response.json();
  });
  return request;
};

export default {
  getAll: getAll,
  create: create,
  disheDelete: disheDelete,
  disheEdit: disheEdit,
  disheDietDelete: disheDietDelete,
};
