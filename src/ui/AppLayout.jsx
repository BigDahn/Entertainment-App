import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main>
      <Header />
      <Sidebar />
      <section>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </section>
    </main>
  );
}

export default AppLayout;
