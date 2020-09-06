import http from '../http.common';

const getAll = () => {
  return http.get('read.php');
};

const getOne = (id) => {
  return http.get(`/admin/article/${id}`);
};

const create = (data) => {
  return http.post('create.php', data);
};

const update = (id, data) => {
  return http.put(`update.php/?id=${id}`, data);
};

const remove = (id) => {
  return http.delete(`delete.php/?id=${id}`);
};

export default { getAll, getOne, create, update, remove };
