import "./styles.css";
import "./tailwind.css";
import { router } from "./Router";


import { RouterProvider } from "react-router-dom";

export default function App() {
 

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
