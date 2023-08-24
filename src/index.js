import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages";
import Jackpot from "./pages/jackpot";
import Affiliate from "./pages/affiliate";
import Authen from "./pages/authen";
import Balance from "./pages/balance";
import Buy5ticket from "./pages/buy5ticket";
import Deposit from "./pages/deposit";
import Event from "./pages/event";
import Faq from "./pages/faq";
import FourNumber from "./pages/fournumber";
import LuckyNumber from "./pages/luckynumber";
import Setting from "./pages/setting";
import TicketForm from "./pages/ticket-form";
import Transaction from "./pages/transaction";
import UserAction from "./pages/user-action";
import WithDraw from "./pages/withdraw";
import BuyTicket from "./pages/buy-ticket";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jackpot",
    element: <Jackpot />,
  },
  {
    path: "/affiliate",
    element: <Affiliate />,
  },
  {
    path: "/authen",
    element: <Authen />,
  },
  {
    path: "/balance",
    element: <Balance />,
  },
  {
    path: "/buy5ticket",
    element: <Buy5ticket />,
  },
  {
    path: "/buyTicket",
    element: <BuyTicket />,
  },
  {
    path: "/deposit",
    element: <Deposit />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/fournumber",
    element: <FourNumber />,
  },
  {
    path: "/luckynumber",
    element: <LuckyNumber />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
  {
    path: "/ticket-form",
    element: <TicketForm />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/user-action",
    element: <UserAction />,
  },
  {
    path: "/withdraw",
    element: <WithDraw />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
