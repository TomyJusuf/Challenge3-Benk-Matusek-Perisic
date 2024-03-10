import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./components/Login.tsx";
import App from "./App.tsx";
import Offices from "./components/Offices.tsx";
import Registration from "./components/Registration.tsx";
import Reservations from "./components/Reservations.tsx";
import PastReservations from "./components/PastReservations.tsx";
import Favorites from "./components/Favorites.tsx";
import FutureReservations from "./components/FutureReservations.tsx";
import CreateOffice from "./components/CreateOffice.tsx";
import User from "./components/User.tsx";
import AdminMenu from "./components/AdminMenu.tsx";
import AlleTische from "./components/AlleTische.tsx";
import MängelAnzeigen from "./components/MängelAnzeigen.tsx";
import DeskDetails from "./components/DeskDetails.tsx";
import AdminDesks from "./components/AdminDesks.tsx";
import FixDeskBestatigung from "./components/FixDeskBestatigung.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/login", element: <Login /> },
  { path: "/offices", element: <Offices /> },
  { path: "/registration", element: <Registration /> },
  { path: "/reservations", element: <Reservations /> },
  { path: "/pastreservations", element: <PastReservations /> },
  { path: "/favorites", element: <Favorites /> },
  { path: "/futurereservations", element: <FutureReservations /> },
  { path: "/officehinzufügen", element: <CreateOffice /> },
  { path: "/user", element: <User /> },
  { path: "/admin", element: <AdminMenu /> },
  { path: "/desks", element: <AlleTische /> },
  { path: "/mängel", element: <MängelAnzeigen /> },
  { path: "/deskdetails", element: <DeskDetails /> },
  { path: "/mängel", element: <MängelAnzeigen /> },
  { path: "/deskhinzufügen", element: <AdminDesks /> },
  { path: "/fixdeskbestätigung", element: <FixDeskBestatigung /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
