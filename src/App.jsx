import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Meditation, Articles } from "./pages";
import { Nav } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/meditation",
    element: <Meditation />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
]);

function App() {
  return (
    <>
      <Nav />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
