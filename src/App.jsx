import { Route, Routes } from 'react-router-dom';
import './App.css';
import ArtistaEditar from './components/ArtistaEditar';
import ArtistaNuevo from './components/ArtistaNuevo';
import Artistas from './components/Artistas';
import ArtistasLayout from './components/ArtistasLayout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Artistas />} />
      <Route path='artistas' element={<ArtistasLayout />}>
        <Route index element={<Artistas />} />
        <Route path='nuevo' element={<ArtistaNuevo />} />
        <Route path='editar/:id' element={<ArtistaEditar />} />
      </Route>
    </Routes>
  );
};

export default App;
