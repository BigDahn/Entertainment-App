import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main className="grid h-screen grid-cols-[200px_auto] grid-rows-[80px_1fr] overflow-hidden">
      <Header />
      <Sidebar />
      <section className="">
        <MainContainer>
          <Outlet />
        </MainContainer>
      </section>
    </main>
  );
}

export default AppLayout;
