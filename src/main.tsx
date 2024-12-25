
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import FindDoctors from "./pages/FindDoctors";
;
import DoctorPage from "./pages/DoctorPage";
import About from "./pages/About";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "find-doctors", element: <FindDoctors /> },
        { path: "About", element: <About /> },

        { path: "doctor/:id", element: <DoctorPage /> }, // Dynamic route for a doctor's page
      ],
    },
  ]);
createRoot(document.getElementById("root")!).render(

    <RouterProvider router={router} />

);
