import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <AppLayout>
          <h1>Home</h1>
        </AppLayout>
      ),
    },
    {
      path: "/about",
      element: (
        <AppLayout>
          <h1>About</h1>
        </AppLayout>
      ),
    },
    {
      path: "/contacts",
      element: (
        <AppLayout>
          <h1>Contacts</h1>
        </AppLayout>
      ),
    },
  ],
  { basename: "/self-subscription" }
);
