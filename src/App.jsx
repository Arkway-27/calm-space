import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Chat, Meditation, Articles } from "./pages";
import { Nav } from "./components";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/meditation",
      element: <Meditation />,
    },
    {
      path: "/articles",
      element: <Articles />,
    },
  ],
  {
    basename: "/calm-space",
  },
);

function App() {
  return (
    <div className="w-screen h-screen p-2 flex flex-col gap-4 items-center justify-center dark:text-white dark:bg-neutral-900 transition duration-100 ease-in-out overflow-hidden">
      <Nav />
      <div className="w-full h-full flex flex-col items-center justify-center overflow-y-scroll overflow-x-hidden">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
