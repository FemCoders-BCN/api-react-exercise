import React from 'react'
import Navbar from '../../components/navbar/Navbar'

function PicturePage() {

  //¡Felicitaciones! Este es el componente que irá asociado al elemento que faltaba en la ruta "image", pero esto se ha de modificar.

  //En la página que acabaste de hacer (PicturesPage), donde se imprime la lista de fotografías, lo que queremos es que al dar click en cada una de ellas, lleve a esta página que contendrá la información de la imagen en cuestión, mira como construir la llamada al servicio...

  //Recuerda que también tendrás que eliminar el link que lleva a esta página del navbar y cambiar la ruta para que llegue el id de la imagen seleccionada (busca cómo pasar parámetros a las rutas de react-router-dom).

  //Cuando hayas terminado, anda al botón "Imagen aleatoria en escala de grises"y mira por qué no funciona, ¿Sabes en dónde tienes que buscar? 

  return (
    <main>
        <h2>Aquí estarán los datos del segundo endpoint</h2>
        <Navbar/>
        <div className='ct-instructions'>
          <h3>INSTRUCCIONES</h3>
          <ul>
              <li>Crea los componentes que necesites para imprimir lo siguiente:</li>
              <ol>
                  <li>El id.</li>
                  <li>La fotografía (queremos ver la imagen en nuestra app, no queremos la url).</li>
                  <li>El autor.</li>
              </ol>
              <li>Deberás hacer la llamada al segundo endpoint, con la información del id que recibas a través del parámetro de la ruta, que vendrá desde PicturesObject (la lista de imágenes).</li>
              <li>Una vez hayas obtenido el id por el parámetro de la ruta, podrás llamar al servicio y pasarle ese dato para que traiga solo ese objeto.</li>
              <li>Has de borrar estas instrucciones cuando lo tengas.</li>
              <li>Los estilos los has de realizar tú misma.</li>
          </ul>
        </div>
    </main> 
  )
}

export default PicturePage