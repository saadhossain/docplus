import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routers/routes';

function App() {
  const routers = routes;
  return (
    <RouterProvider router={routers}>
    </RouterProvider>
  );
}

export default App;
