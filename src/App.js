import './App.css'
import Navbar from './components/navbar/Navbar';
import logo from './assets/img/logo.svg';

function App() {
  return (
    <>
      <img className='logo' src={logo} alt="logo of the app" />
      <h1>Ejercicio de consumo de API y persistencia de datos con JSON-SERVER</h1>
      <Navbar/>
      <div className='ct-instructions'>
      <h3>INSTRUCCIONES</h3>
      <ul>
        <li>Clonar el repositorio que se creó al aceptar el reto de github classroom.</li>
        <li>npm install</li>
        <li>Este ejercicio tiene 2 partes, en la primera, vamos a crear una app que consuma una API de imágenes, llamada Lorem Picsum <strong>https://picsum.photos</strong></li>
        <li>En la segunda parte, crearemos nuestra propia fake API que nos permitirá tener persistencia de datos y podremos hacer un CRUD.</li>
        <li>Notarás que esta aplicación no está al 100% resuelta, tendrás que ir viendo los archivos, así the darás cuenta de qué es lo que falta para que funcione todo.</li>
        <li>Ya tenemos nuestro router funcionando, aunque tendrás que ir viendo lo que hay que modificar o eliminar.</li>
        <li>Los archivos de estilos podrás hacerlo de 2 formas, la que te resulte mejor para ti, puedes hacer una carpeta llamada styles dentro de src y poner todos los archivos .css que deberán estar nombrados de una manera que podamos identificar a que componente pertenecen. La segunda forma es que cada componente podrá contener, dentro de una carpeta, el archivo .jsx y el archivo .css.</li>
      </ul>
      <h3>¿Cúales son los pasos que has de seguir?</h3>
        <ol>
          <li>Crear la funcionalidad del servicio. Tienes un componente que tendrá las peticiones a la API, no harás las peticiones dentro de los componentes que renderizan el contenido, ya que queremos hacer un código limpio. Dentro de la carpeta "services" existe un archivo llamado "LoremPicsumService", deberás crear la funcionalidad para llamar a 3 endpoints, la primera será la llamada a una lista de objetos que devuelve la API, la segunda será la llamada a un objeto por su id y la tercera será una llamada que nos devuelve una imagen en escala de grises. (Todas estas peticiones son de tipo GET)
            <ul>
              <li>PRIMER ENDPOINT: https://picsum.photos/v2/list</li>
              <li>SEGUNDO ENDPOINT: https://picsum.photos/id/{"{id}"}/info</li>
              <li>TERCER ENDPOINT: descúbrelo tú misma dentro de la documentación y entiende como tiene que ser construida para recibirla.</li>
            </ul>
          </li>
          <li>Tienes 4 componentes en la carpeta pages, en picturesPage estará renderizado el primer endpoint, en picturePage el segundo, en grayscalePage el tercero y el cuarto componente de favoritesPage lo usaremos para hacer persistencia de datos con json-server. Mira lo que encuentras en el navbar de arriba, que nos lleva a cada página.</li>
          <li>Para la segunda parte del ejercicio, donde haremos una fake API con json-server y desarrollaremos el CRUD con persistencia de datos, tendremos otro servicio (lo puedes llamar como quieras) y las peticiones serán de tipo GET, POST, PUT y DELETE.</li>
          <li>Y lo último pero no menos importante, no te olvides de los tests.</li>
        </ol>
      </div>
    </>
  );
}

export default App;

