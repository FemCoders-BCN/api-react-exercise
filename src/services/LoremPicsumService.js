import axios from "axios";

//estas son algunas configuraciones que tiene axios, mientras seguimos con el curso encontrarás más
axios.defaults.baseURL = 'https://picsum.photos';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const LoremPicsumService = () => {
  const urlGetAll = '/v2/list';
  //Los endpoints que tienen llaves con un texto dentro, quiere decir que le has de pasar algún valor /id/{image}/info, eso significa que image es un valor que le has de pasar, mira la documentación para más información.
  const urlGetById = '/id/';
  /* Construye la url para el tercer endpoint
  const urlGetGrayscale = ''; */

  const getAll = () => {
    const response = axios.get(urlGetAll);
    return response;
  };
  
  const getById = (id) => {
    const response = axios.get(`${urlGetById}/${id}/info`);
    return response;
  }; 

  const getRandomGrayscale = () => {
    //construye como sería el método de la petición para obtener una imagen aleatoria en escala de grises (apóyate en la documentación)
  }; 

  return {
    getAll,
    //Deberás retornar el método para que puedas exportarlo
  }
}