import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import PictureObject from '../../components/pictureObject/PictureObject'

function PicturesPage() {

  //Aquí deberás llamar al servicio LoremPicsumService y a su método getAll donde tendrás que recuperar en un estado el contenido que te devuelva.

  //Luego renderizarás los objetos con un bucle.

  return (
    <main>
        <h2>Aquí estarán todos los objetos de la primera llamada</h2>
        <Navbar/>
        <ul>
            <p>INSTRUCCIONES</p>
            <li>Crea los componentes que necesites para imprimir una lista o tarjetas que contengan lo siguiente (deberán estar todos los objetos de la llamada a la API):</li>
            <ol>
                <li>El id de la imagen.</li>
                <li>Su autor.</li>
                <li>La fotografía (queremos ver la imagen en nuestra app, no queremos la url).</li>
            </ol>
            <li>Has de borrar estas instrucciones cuando lo tengas.</li>
            <li>Los estilos los has de realizar tú misma.</li>
        </ul>
        {/* Mira que hay en el componente PictureObject */}
        <PictureObject/>
    </main>
  )
}

export default PicturesPage