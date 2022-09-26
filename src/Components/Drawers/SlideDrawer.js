import React from "react";
import { Row, Col, Form, Container, Nav } from "react-bootstrap";
import img from "../../Images/tigeen_computing_logo.png";
import { BsList } from "react-icons/bs";
import { BsFillAlarmFill } from "react-icons/bs";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarContant from './SidebarContant'

const SlideDrawer = ({ show }) => {
  let drawerClas = show ? "side-drawer open" : "side-drawer";
  // let drawerClassess = drawerOpenLeft ?  "side-drawer-right openn" : "side-drawer-right";
  return (
    <div className={drawerClas}>
   <SidebarContant />
    </div>
  );
};

export default SlideDrawer;
