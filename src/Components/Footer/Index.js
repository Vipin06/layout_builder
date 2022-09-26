import React, { useState } from 'react';
import { Row, Col, Nav } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { BsFillAlarmFill } from "react-icons/bs";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import SlideDrawer from "../Drawers/SlideDrawer";
import RightSideDrawer from "../Drawers/RightSideDrawer"
import Backdrop from "../Drawers/Backdrop";
import BackRight from "../Drawers/BackRight";
function Footer() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerOpenLeft, setDrawerOpenLeft] = useState(false);

    const handleOpenDrawerButton = () => {
        setDrawerOpen(!drawerOpen);
    }
    const handleBackdropClick = () => {
        setDrawerOpen(false);
    }
    const handleBackdropClickRightButton = () => {
        setDrawerOpenLeft(!drawerOpenLeft);
    }
    const handleBackdropClickRight = () => {
        setDrawerOpenLeft(false)
    }

    return (
        <>
            <Row className="footer-main-wrap">
                <Col sm={12}>
                    <div className='footer-wrap'>
                        <div>
                            <div>
                                <SlideDrawer show={drawerOpen} />
                                {drawerOpen && <Backdrop closeDrawer={handleBackdropClick} />}
                            </div>
                            <BsList onClick={handleOpenDrawerButton} />
                        </div>
                        <div className='footer-menu'>
                            <Nav className="me-auto">
                                <Nav.Link><BsEnvelopeFill /> <span>Mail</span></Nav.Link>
                                <Nav.Link><BsFillAlarmFill /> <span>Alerms</span></Nav.Link>
                                <Nav.Link><BsFillCreditCardFill /> <span>Movies</span></Nav.Link>
                            </Nav>
                        </div>
                        <div>
                            <RightSideDrawer drawerRight={drawerOpenLeft} />
                            {drawerOpenLeft && <BackRight closeRIghtDrawer={handleBackdropClickRight} />}
                            <BsList onClick={handleBackdropClickRightButton} />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Footer