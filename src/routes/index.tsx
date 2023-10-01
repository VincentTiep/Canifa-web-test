import Checkoutt from "../components/Checkout";
import BaseLayout from "../layout/Base";
import Account from "../pages/Account";
import DetailItem from "../pages/DetailItem";
import Home from "../pages/Home";
import Mapp from "../pages/Mapp";

export const privateRouter = [
  {
    path: "/Canifa-web-test",
    element: Home,
    layout: BaseLayout,
  },
  {
    path: "/Canifa-web-test/:itemId",
    element: DetailItem,
    layout: BaseLayout,
  },
  {
    path: "/Canifa-web-test/map",
    element: Mapp,
    layout: BaseLayout,
  },
  {
    path: "/Canifa-web-test/account",
    element: Account,
    layout: BaseLayout,
  },
  {
    path: "/Canifa-web-test/checkout",
    element: Checkoutt,
    layout: BaseLayout,
  },
];
