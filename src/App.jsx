import { Route, Routes } from 'react-router-dom';
import './App.css';
import Artistas from './components/Artistas';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Artistas />} />
      <Route path='/artistas' component={Artistas} />
    </Routes>
  );
};

export default App;
