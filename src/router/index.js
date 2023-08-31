import { createBrowserRouter } from "react-router-dom";
import Home from "../pages";
import Jackpot from "../pages/jackpot";
import Affiliate from "../pages/affiliate";
import Authen from "../pages/authen";
import Event from "../pages/event";
import Faq from "../pages/faq";
import FourNumber from "../pages/fournumber";
import LuckyNumber from "../pages/luckynumber";
import Setting from "../pages/setting";
import TicketForm from "../pages/ticket-form";
import UserAction from "../pages/user-action";
import BuyTicket from "../pages/buy-ticket";
import Buy5ticket from "../pages/buy5ticket";
import Bakacomming from '../pages/bakacomming'
import Boxgacha from '../pages/boxgacha'
import Completedgacha from "../pages/completedgacha";
import EventNodata from '../pages/event-nodata'
import Mystery from '../pages/mystery'
import Pvpcomming from '../pages/pvpcomming'
import Qgccomming from '../pages/qgccomming'
import Reference from '../pages/reference'
import Reroll from '../pages/reroll'
import Security from '../pages/security'
import Sugoroku from '../pages/sugoroku'
import Tournament from '../pages/tournament'
import Upgrade from '../pages/upgrade'
import Upgradesoon from '../pages/upgradesoon'
import Wallet from "../pages/wallet";
import EventDetail from "../pages/eventdetail";



export const router = createBrowserRouter([
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
        path: "/bakacomming",
        element: <Bakacomming />,
    },
    {
        path: "/boxgacha",
        element: <Boxgacha />,
    },
    {
        path: "/buyticket",
        element: <BuyTicket />,
    },
    {
        path: "/buy5ticket",
        element: <Buy5ticket />,
    },
    {
        path: "/completedgacha",
        element: <Completedgacha />,
    },
    {
        path: "/event",
        element: <Event />,
    },
    {
        path: "/eventdetail",
        element: <EventDetail />,
    },
    {
        path: "/eventnodata",
        element: <EventNodata />,
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
        path: "/mystery",
        element: <Mystery />,
    },
    {
        path: "/pvpcomming",
        element: <Pvpcomming />,
    },
    {
        path: "/qgccomming",
        element: <Qgccomming />,
    },
    {
        path: "/reference",
        element: <Reference />,
    },
    {
        path: "/reroll",
        element: <Reroll />,
    },
    {
        path: "/security",
        element: <Security />,
    },
    {
        path: "/setting",
        element: <Setting />,
    },
    {
        path: "/sugoroku",
        element: <Sugoroku />,
    },
    {
        path: "/ticket-form",
        element: <TicketForm />,
    },
    {
        path: "/tournament",
        element: <Tournament />,
    },
    {
        path: "/upgrade",
        element: <Upgrade />,
    },
    {
        path: "/upgradesoon",
        element: <Upgradesoon />,
    },
    {
        path: "/user-action",
        element: <UserAction />,
    },
    {
        path: "/wallet",
        element: <Wallet />
    }
]);

