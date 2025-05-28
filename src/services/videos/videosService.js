const baseUrl = "http://localhost/apinefrosalut/public/api/video";
const baseUrlCategories = "http://localhost/apinefrosalut/public/api/categoria";
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
      titulo: newObject.titulo,
      link: newObject.link,
      categoria_id: newObject.categoria,
    }),
  }).then((response) => {
    return response.json();
  });
  return request;
};

const videoDelete = (id) => {
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

const videoEdit = (id, titulo, link, categoria) => {
  const data = {
    titulo: titulo,
    link: link,
    categoria_id: categoria,
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

const getAllCategories = () => {
  const request = fetch(`${baseUrlCategories}`, {
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
  videoDelete: videoDelete,
  videoEdit: videoEdit,
  getAllCategories: getAllCategories,
};
