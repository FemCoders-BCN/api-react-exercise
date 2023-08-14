import React from 'react'
import Navbar from '../../components/navbar/Navbar'

function GrayscalePage() {

  //Este tercer endpoint es un poco diferente a los 2 anteriores, ¿Puedes ver que es lo que te devuelve el endpoint?

  //Recuerda que normalmente una API devuelve objetos json, pero con este endpoint no es el caso, imagina una manera para poder acceder a ese resultado, es totalmente libre el cómo lo harás, lo que será obligatorio es que de igual manera, tendrás que hacerlo mediante un servicio, así que mira como construirlo.   

  //Una vez que lo hayas terminado, dirígete al botón "CRUD de Favoritos" del navbar.

  return (
    <main>
        <h2>Desde aquí podremos acceder a la imagen aleatoria en escala de grises del tercer endpoint</h2>
        <Navbar/>
        <div className='ct-instructions'>
          <h3>INSTRUCCIONES</h3>
          <ul>
              <li>Crea los componentes que necesites para obtener lo siguiente:</li>
              <ol>
                  <li>La fotografía (queremos ver la imagen, no queremos la url).</li>
              </ol>
              <li>Has de borrar estas instrucciones cuando lo tengas.</li>
              <li>Los estilos los has de realizar tú misma.</li>
          </ul>
        </div>
    </main>
  )
}

export default GrayscalePage