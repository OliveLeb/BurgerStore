import http from '../http.common';

// ARTICLE
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

// FILES
const upload = (formData /*, OnUploadProgress*/) => {
  //let formData = new FormData();
  //formData.append('file', file);
  return http.post(
    'files/upload.php',
    formData /*, {
    // return http.post(
    //  'http://localhost/projet/Hebergeur_image/upload.php',
    //   formData,
    // {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    // OnUploadProgress,
  }*/
  );
};

const getFiles = () => {
  return http.get('files/read.php');
};

export default { getAll, getOne, create, update, remove, upload, getFiles };
