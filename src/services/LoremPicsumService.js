import axios from "axios";

//estas son algunas configuraciones que tiene axios, mientras seguimos con el curso encontrarás más
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const LoremPicsumService = () => {

  //Esta es tu base, osea el dominio, que le uniremos al recurso
  const baseUrl = 'https://picsum.photos';

  //Estos son los recursos
  const urlGetAll = '/v2/list'; //Este será el primer endpoint

  const urlGetById = '/id'; //Este será el segundo endpoint

  //Los endpoints que tienen llaves con un texto dentro, quiere decir que le has de pasar algún valor /id/{image}/info, eso significa que image es un valor que le has de pasar, mira la documentación para más información.

  //Construye la url para el tercer endpoint
  const urlGetGrayscale = '';

  const getAll = () => {
    //Aquí está construido el endpoint que obtendrá (GET) una respuesta según el recurso de la API, podemos construirlo con templates string para concatenar variables con strings.
    const response = axios.get(`${baseUrl}${urlGetAll}`);
    return response;
  };
  
  const getById = (id) => {
    //Aquí le pasamos un id para que construya la ruta y nos traiga el objeto que tenga el id seleccionado.
    const response = axios.get(`${baseUrl}${urlGetById}/${id}/info`);
    return response;
  }; 

  const getRandomGrayscale = () => {
    //construye como sería el método de la petición para obtener una imagen aleatoria en escala de grises (apóyate en la documentación).
    const response = '???';
    return response;
  }; 

  return {
    getAll,
    //Deberás retornar las constantes que quieras exportar.
  }
}