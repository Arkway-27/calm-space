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
    <div className="w-screen h-screen p-2 flex flex-col items-center justify-center">
      <Nav />
      <div className="h-full flex flex-col items-center justify-center">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
