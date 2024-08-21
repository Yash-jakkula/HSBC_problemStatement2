import React from "react";
import "./dashboardHeader.css";
//import logo from "images/KnowvationIcon.jpeg";
//import profile from "images/profile.png";
//import mobileLogo from "images/mobileIcon.jpeg";
import { Space, Badge, Button, Drawer } from "antd";
import { getAllUsersData } from "../../../supa-base-client/user";

// import { useCounter } from "../../pages/context/counterContext";
// import DrawerFun from "../drawer/Drawer";
//import { ProfileDropdown } from "./profile";
// import { useAuth } from "pages/auth/authProvider";
export default function DashBoardHeader() {
  // const { cartCount, wishCount } = useCounter();
  // const { user } = useAuth();
  // const [open, setOpen] = React.useState(false);
  // const showDrawer = () => {
  //   setOpen(true);
  // };

  return (
    <>
      <header>
        <div className="flex flex-row justify-between items-center container mt-4 mb-4">
          <div className="basis-1/4 flex flex-row gap-10 items-center">
            <a href="/" onClick={() => runfun()}>
              Dashboard
            </a>
            <a href="/investiments">Investiments</a>
            <a href="/suggestions">Suggestions</a>
          </div>
          <div className="basis-1/2 flex flex-row justify-end gap-10 items-center">
            <div className="drop-down"></div>
            <div className="flex flex-row gap-6 items-center"></div>
          </div>
        </div>
      </header>
    </>
  );
}
