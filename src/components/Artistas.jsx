import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Artistas = () => {
  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    if (artistas.length === 0) {
      axios
        .get('http://localhost:8001/api/artista/listar', {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then(response => {
          setArtistas(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [artistas]);

  const handleEliminar = artistaId => {
    axios
      .post(
        `http://localhost:8001/api/artista/eliminar`,
        { artistaId },
        {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        }
      )
      .then(() => {
        setArtistas(
          artistas.filter(artista => artista.artistaId !== artistaId)
        );
      })
      .catch(error => {
        console.error('Hubo un error eliminando el artista:', error);
      });
  };

  return (
    <div className='container container-main'>
      <div className='card'>
        <div className='card-header'>
          <h1>Artistas</h1>
        </div>
        <div>
          <Link to='/artistas/nuevo' className='btn btn-primary m-3'>
            Nuevo
          </Link>
        </div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Fecha de nacimiento</th>
                <th>Nacionalidad</th>
                <th>Albums</th>
              </tr>
            </thead>
            <tbody>
              {artistas.map((artista, index) => (
                <tr key={artista.artistaId || index}>
                  <td>{artista.artistaId}</td>
                  <td>{artista.nombre}</td>
                  <td>
                    {new Date(artista.fechaNacimiento).toLocaleDateString()}
                  </td>
                  <td>{artista.nacionalidad}</td>
                  <td>
                    {artista.albums.map(album => (
                      <div key={album.albumId}>{album.titulo}</div>
                    ))}
                  </td>
                  <td>
                    <Link
                      to={`/artistas/editar/${artista.artistaId}`}
                      className='btn btn-warning m-2'
                    >
                      Editar
                    </Link>
                    <button
                      type='button'
                      className='btn btn-danger'
                      onClick={() => handleEliminar(artista.artistaId)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <Link to='/#' className='btn btn-primary m-3'>
              Albums
            </Link>
            <Link to='/#' className='btn btn-primary'>
              Canciones
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artistas;
