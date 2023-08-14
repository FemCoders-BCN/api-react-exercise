import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PicturesPage from '../pages/picturesPage/PicturesPage';
import FavoritesPage from '../pages/favoritesPage/FavoritesPage';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/favorites",
      element: <FavoritesPage/>
    },
    {
      path: '/list',
      element: <PicturesPage/> 
    },
    {
      path: '/image',
      /* element: ¿qué falta aquí? */  
      //si no recuerdas que elemento se debe asociar a esta ruta, revisa nuevamente las instrucciones del archivo App.js 
    }
    //¿Qué ruta crees que te falta?
]);

export default Router;