import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import PictureObject from '../../components/pictureObject/PictureObject'

function PicturesPage() {

  //Aquí deberás llamar a la API mediante el servicio LoremPicsumService y a su método getAll donde tendrás que recuperar en un estado, el contenido que te devuelva.

  //Luego renderizarás los objetos con un bucle, el componente <PictureObject/> es el molde de cada objeto de la lista, y lo puedes ver en la carpeta de components.

  return (
    <main>
        <h2>Aquí estarán todos los objetos del primer endpoint</h2>
        <Navbar/>
        <div className='ct-instructions'>
        <h3>INSTRUCCIONES</h3>
          <ul>
              <li>Crea los componentes que necesites para imprimir la lista que viene de la API, que contengan lo siguiente:</li>
              <ol>
                  <li>El id de la imagen.</li>
                  <li>Su autor.</li>
                  <li>La fotografía (queremos ver la imagen en nuestra app, no queremos la url).</li>
              </ol>
              <li>Has de borrar estas instrucciones cuando lo tengas.</li>
              <li>Los estilos los has de realizar tú misma.</li>
          </ul>
        </div>
        {/* Mira que hay en el componente PictureObject */}
        <PictureObject/>
    </main>
  )
}

export default PicturesPage