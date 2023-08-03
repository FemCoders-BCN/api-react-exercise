import React from 'react'
import Navbar from '../../components/navbar/Navbar'

function PicturePage() {

  //En la página que acabaste de hacer (PicturesPage), donde se imprime la lista de fotografías, al dar click a cada una de ellas, llevará a esta página que contendrá la información de la imagen en cuestión, mira donde debes construir la llamada al servicio.

  return (
    <main>
        <h2>Aquí estará la imagen de la segunda llamada</h2>
        <Navbar/>
        <ul>
            <p>INSTRUCCIONES</p>
            <li>Crea los componentes que necesites para imprimir lo siguiente (siguiendo el ejemplo del componente PictureObject):</li>
            <ol>
                <li>La fotografía (queremos ver la imagen en nuestra app, no queremos la url),.</li>
            </ol>
            <li>Has de borrar estas instrucciones cuando lo tengas.</li>
            <li>Los estilos los has de realizar tú misma.</li>
        </ul>
    </main> 
  )
}

export default PicturePage