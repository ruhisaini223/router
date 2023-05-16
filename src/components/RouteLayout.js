import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";

function RouteLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RouteLayout;
