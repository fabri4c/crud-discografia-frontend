import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArtistaForm from './ArtistaForm'; // Asegúrate de importar tu componente ArtistaForm

const ArtistaEditar = () => {
  const [artistaInicial, setArtistaInicial] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const cargarArtista = async () => {
      try {
        const respuesta = await axios.get(
          `http://localhost:8001/api/artista/buscar/${id}`,
          {
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
          }
        );
        setArtistaInicial(respuesta.data);
      } catch (error) {
        console.error('Hubo un error cargando el artista:', error);
      }
    };

    cargarArtista();
  }, [id]);

  if (!artistaInicial) {
    return <div>Cargando...</div>;
  }

  return <ArtistaForm modoEditar artistaInicial={artistaInicial} />;
};

export default ArtistaEditar;
