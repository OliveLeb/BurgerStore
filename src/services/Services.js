import http from '../http.common';

const getAll = () => {
  return http.get('article/read.php');
};

const getOne = (id) => {
  return http.get(`article/read.php/?id=${id}`);
};

const create = (data) => {
  return http.post('article/create.php', data);
};

const update = (id, data) => {
  return http.put(`article/update.php/?id=${id}`, data);
};

const remove = (id) => {
  return http.delete(`article/delete.php/?id=${id}`);
};

export default { getAll, getOne, create, update, remove };
