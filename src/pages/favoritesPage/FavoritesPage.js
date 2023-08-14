import React from 'react'
import Navbar from '../../components/navbar/Navbar'

function FavoritesPage() {

  //¡¡¡Felicitaciones!!! Si has llegado aquí es porque has terminado la primera parte del ejercicio que consistía en consumir la API LoremPicsum, ya falta poco, ánimos.

  //El objetivo de esta segunda parte es que esas imágenes que tenemos impresas en PicturesPage, le podamos dar like o un "me gusta" para capturarlas en esta página de favoritos.
  
  //Para eso usaremos json-server que nos permitirá tener persistencia de datos.

  //Recuerda que para que funcione tanto el servidor de node como el de json-server tendrán que estar encendidos.

  return (
    <main>
        <h2>Aquí estará la página principal donde guardarás tus objetos favoritos</h2>
        <Navbar/>
        <div className='ct-instructions'>
          <h3>INSTRUCCIONES</h3>
          <ul>
              <li>Crea un servicio llamado FavoriteService.js siguiendo el ejemplo de LoremPicsumService.js, que contenga toda la lógica que necesites para realizar el CRUD, usando axios, tu endpoint será el que te proporcione json-server. </li>
              <li>Para tener un servidor encendido que te permita hacer un CRUD con tu fake API, has de activar tu json-server en un puerto diferente al que tienes de node donde funciona tu aplicación de react (que normalmente es el 3000), esto lo haces con el siguiente comando: json-server --watch src/assets/data/picturesDB.json --port 5000</li>
              <li>Una vez encendido, en tu terminal te indicará el endpoint que usarás, en la parte que dice Resources.</li>
              <li>Si estás cansada de ejecutar toda esa línea de código cada vez que tengas que encender el servidor de json-server, puedes ponerlo en tu package.json en la sección de scripts, con un nombre que tú le des y luego podrás ejecutar el comando npm run nombre-del-script</li>
              <li>Crea los componentes que necesites para imprimir una lista de los objetos (será la R de read del CRUD) que contengan lo siguiente (siguiendo el ejemplo del componente PictureObject, además deberán estar todos los objetos de tu archivo picturesDB.json que es tu pseudo base de datos, que está en la carpeta assets/data):</li>
              <ol>
                  <li>El id de la imagen.</li>
                  <li>Su autor.</li>
                  <li>La fotografía (queremos ver la imagen en nuestra app, no queremos la url).</li>
              </ol>
              <li>El siguiente paso será la C de create del CRUD, crearemos un nuevo objeto donde capturamos los datos del objeto que queramos añadir a favoritos de la API LoremPicsum (que está renderizada en PicturesPage) y usarás la petición http post en tu servicio (averigua como hacerlo). Una vez creada la tarjeta, automáticamente deberá aparecer en la lista de favoritos, por lo que hemos de redirigir hacia esta página.</li>
              <li>Después vamos a añadir un botón para editar cada tarjeta de favoritos, así que haremos la U de update del CRUD, donde necesitaremos pasar la información a un formulario que nos permita editar (averigua como hacerlo). Puedes editar por esta vez solo el author, si tienes más tiempo puedes intentar con la imagen.</li>
              <li>Por último, eliminaremos una tarjeta favorita que será la D de delete del CRUD (averigua como hacerlo).</li>
              <li>Crea los componentes que necesites, el archivo picturesDB.json se irá modificando.</li>
              <li>Has de borrar estas instrucciones cuando lo tengas.</li>
              <li>Los estilos los has de realizar tú misma.</li>
          </ul>
        </div>
    </main>
  )
}

export default FavoritesPage