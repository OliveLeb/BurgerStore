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

const update = (data) => {
  return http.put('update.php', data);
};

const remove = (data) => {
  return http.post('delete.php', data);
};

export default { getAll, getOne, create, update, remove };
