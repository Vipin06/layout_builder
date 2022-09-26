import React from "react";
import { Nav } from "react-bootstrap";
import img from "../../Images/tigeen_computing_logo.png";
import { BsFillAlarmFill } from "react-icons/bs";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';

function SidebarContant() {
    return (
        <>
            <div className="side-bar-img">
                <img src={img}></img>
            </div>
            <div>
                <Nav className="me-auto-main">
                    <Nav.Link><BsEnvelopeFill /> <span>Mail</span></Nav.Link>
                    <Nav.Link><BsFillAlarmFill /> <span>Alerms</span></Nav.Link>
                    <Nav.Link><BsFillCreditCardFill /> <span>Movies</span></Nav.Link>
                </Nav>
            </div>
        </>
    )
}

export default SidebarContant