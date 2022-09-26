import React, { useState } from 'react';
import { Row, Col} from "react-bootstrap";
import { BsList } from "react-icons/bs";
import HeaderTabs from "./Tabs";
import SlideDrawer from "../Drawers/SlideDrawer";
import RightSideDrawer from "../Drawers/RightSideDrawer"
import Backdrop from "../Drawers/Backdrop";
import BackRight from "../Drawers/BackRight";
import img from "../../Images/tigeen_computing_logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
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
            <Row>
                <Col sm={12} className="main-wraper-header">
                    <div className='header-wrap'>
                        <div>
                            <div>
                                <SlideDrawer show={drawerOpen} />
                                {drawerOpen && <Backdrop closeDrawer={handleBackdropClick} />}
                            </div>
                            <BsList onClick={handleOpenDrawerButton} />
                        </div>
                        <div className='header-img'>
                            <img src={img}></img>
                        </div>
                    </div>

                    <RightSideDrawer drawerRight={drawerOpenLeft} />
                    {drawerOpenLeft && <BackRight closeRIghtDrawer={handleBackdropClickRight} />}
                    <BsList onClick={handleBackdropClickRightButton} />
                </Col>
                <Col sm={12} className="row-tabs">
                    <div className='header-tabs'>
                        <HeaderTabs />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Header