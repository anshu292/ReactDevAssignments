import logo from './logo.svg';
import './App.css';
import Gallery from './pages/Gallery';
import Aboutme from './pages/Aboutme';
import Touristplaces from './pages/Touristplaces';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routerConfig= createBrowserRouter(
  [
    {"path":"/Gallery",
       element:<Gallery/>
    },
    {"path":"/Aboutme", 
      element:<Aboutme/>
    },

    {"path":"/Touristplaces", 
      element:<Touristplaces/>
    }
  ]
)


function App() {
  return (
    <div >
     <RouterProvider router={routerConfig}/>

    </div>
  );
}

export default App;
