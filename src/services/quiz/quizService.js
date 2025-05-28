const baseUrl = "http://localhost/apinefrosalut/public/api/quiz";
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
      pregunta: newObject.pregunta,
      option1: newObject.option1,
      option2: newObject.option2,
      option3: newObject.option3,
      correctOption: newObject.correctOption,
      categoria: newObject.categoria,
    }),
  }).then((response) => {
    return response.json();
  });
  return request;
};

const quizDelete = (id) => {
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

const quizEdit = (
  id,
  pregunta,
  option1,
  option2,
  option3,
  correctOption,
  categoria,
) => {
  const data = {
    pregunta: pregunta,
    option1: option1,
    option2: option2,
    option3: option3,
    correctOption: correctOption,
    categoria: categoria,
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
  quizDelete: quizDelete,
  quizEdit: quizEdit,
};
