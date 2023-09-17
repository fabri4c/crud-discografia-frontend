import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ArtistaForm = ({ modoEditar, artistaInicial }) => {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const navigate = useNavigate();

  const handleNombreChange = e => setNombre(e.target.value);
  const handleFechaNacimientoChange = e => setFechaNacimiento(e.target.value);
  const handleNacionalidadChange = e => setNacionalidad(e.target.value);

  useEffect(() => {
    if (modoEditar && artistaInicial) {
      setNombre(artistaInicial.nombre);
      setFechaNacimiento(artistaInicial.fechaNacimiento);
      setNacionalidad(artistaInicial.nacionalidad);
    }
  }, [modoEditar, artistaInicial]);

  const handleGuardar = () => {
    const artista = {
      nombre,
      fechaNacimiento: new Date(fechaNacimiento).toISOString(),
      nacionalidad
    };
    const url = modoEditar
      ? `http://localhost:8001/api/artista/editar`
      : `http://localhost:8001/api/artista/guardar`;

    axios
      .post(url, artista, { headers: { 'Access-Control-Allow-Origin': '*' } })
      .then(response => {
        console.log(response.data);
        navigate('/artistas');
      })
      .catch(error => {
        console.error('Hubo un error guardando el artista:', error);
      });
  };

  return (
    <div className='container container-main'>
      <div className='card'>
        <div className='card-header bg-primary text-white'>
          <h2>{modoEditar ? 'Editar Artista' : 'Agregar Artista'}</h2>
        </div>
        <div className='card-body'>
          <form>
            <div className='mb-3'>
              <label htmlFor='nombre' className='form-label'>
                Nombre
              </label>
              <input
                type='text'
                className='form-control'
                id='nombre'
                value={nombre}
                onChange={handleNombreChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='fechaNacimiento' className='form-label'>
                Fecha de Nacimiento
              </label>
              <input
                type='date'
                className='form-control'
                id='fechaNacimiento'
                value={fechaNacimiento}
                onChange={handleFechaNacimientoChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='nacionalidad' className='form-label'>
                Nacionalidad
              </label>
              <input
                type='text'
                className='form-control'
                id='nacionalidad'
                value={nacionalidad}
                onChange={handleNacionalidadChange}
              />
            </div>
            <div className='d-flex justify-content-center mt-3'>
              <button
                type='button'
                className='btn btn-success me-2'
                onClick={handleGuardar}
              >
                Guardar
              </button>
              <button
                type='button'
                className='btn btn-danger'
                onClick={() => navigate('/artistas')}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArtistaForm;
