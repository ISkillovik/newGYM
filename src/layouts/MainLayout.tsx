import { Outlet } from "react-router-dom";
import NavigateBar from "../NavBar/NavigateBar";

interface Props {}

const MainLayout = (props: Props) => {
  return (
    <>
      <NavigateBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
