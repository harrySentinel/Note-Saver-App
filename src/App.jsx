import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';
import NotFound from './components/NotFound';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: 
      <div>
      <Navbar/>
      <Home/>
      </div>
    },
    {
      path: "/pastes",
      element: 
      <div>
      <Navbar/>
      <Paste/>
      </div>
    },
    {
      path: "/pastes/:id",
      element: 
      <div>
      <Navbar/>
      < ViewPaste/>
      </div>
    },
    {
      path: "*",
      element:
      <div>
        <Navbar />
        <NotFound /> 
      </div>
    }
  ]
);

function App() {
 
  return (
    <>
     <div>
      <RouterProvider router={router} />
     </div>
    </>
  )
}

export default App
