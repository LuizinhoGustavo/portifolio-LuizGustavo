import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import { Projects } from './routes/Projects.tsx';
import { Certificates } from './routes/Certificates.tsx';

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/Projects",
    element: <Projects />
  },
  {
    path: "/Certificates",
    element: <Certificates />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
