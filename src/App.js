import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routers/routes';

function App() {
  const routers = routes;
  return (
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={routers}>
      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
