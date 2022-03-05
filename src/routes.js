import Login from "views/Login.js";
import ProductList from "views/ProductList";

var routes = [
  {
    path: "/product-list",
    name: "Products List",
    icon: "ni ni-bullet-list-67 text-red",
    component: ProductList,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    disable:true
  },
];
export default routes;
