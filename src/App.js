import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import RouteLayout from "./components/RouteLayout";
import ErrorPage from "./components/Error";
import ProductDetails from "./components/ProductDetails";

// const routerDef = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/Products" element={<Products />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "Products",
        element: <Products />,
      },
      { path: "Products/:id", element: <ProductDetails /> },
    ],
  },
]);

// const router = createBrowserRouter(routerDef);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
