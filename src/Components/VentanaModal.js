import React, {useState} from 'react';
import Habilidad from './Assets/habilidad.png';
import Articulo from './Assets/articulo.png';
import { Handshake } from '@mui/icons-material';

function VentanaModal() {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalImage, setModalImage] = useState(null); 
  
    const abrirModal = (content, image) => {
      setShowModal(true);
      setModalContent(content);
      setModalImage(image);
    };
  
    const cerrarModal = () => {
      setShowModal(false);
    };
    
  return (
    <section>

    <div>
      <button
          className='verMas'
          onClick={() =>
            abrirModal(
                'Considero que tengo buenos conocimientos en los ámbitos de diseño web y la gestión de bases de datos, tengo una buena experiencia gracias a los varios trabajos que he realizado y las horas que les he invertido a estos deberes.',
                Habilidad
                )
            }
            >
          Ver Más
        </button>
    </div>

    <div>
      <button
          className='verMas'
          onClick={() =>
            abrirModal(
                'Considero que tengo buenos conocimientos en los ámbitos de diseño web y la gestión de bases de datos, tengo una buena experiencia gracias a los varios trabajos que he realizado y las horas que les he invertido a estos deberes.',
                Habilidad
                )
            }
            >
          Ver Más
        </button>
    </div>

    <section class="ContenedorIcon">
            <img src={Articulo} className='Icono'></img>
            <h3 class="Titulo2">
                Publicaciones
            </h3>

            <button
          className='verMas'
          onClick={() =>
            abrirModal(
                'Considero que tengo buenos conocimientos en los ámbitos de diseño web y la gestión de bases de datos, tengo una buena experiencia gracias a los varios trabajos que he realizado y las horas que les he invertido a estos deberes.',
                Habilidad
                )
            }
            >
          Ver Más
        </button>
        </section>

    {showModal && (
        <div className='fondoModal'>
          <div className='modal'>
            {modalImage && <img src={modalImage} alt='Imagen del plazo' />}
            <p>{modalContent}</p>
            <button className='verMas' onClick={cerrarModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
            </section>
  )
}


export default VentanaModal;
