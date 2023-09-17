import { Outlet } from 'react-router-dom';

const ArtistasLayout = () => {
  return (
    <div>
      {/* header, footer, etc., común a todas las páginas de "artistas" */}
      <Outlet />
    </div>
  );
};

export default ArtistasLayout;
