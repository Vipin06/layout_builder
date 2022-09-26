import React from "react";
import SidebarContant from './SidebarContant'
const RightSideDrawer = ({ show, drawerRight }) => {
    let drawerClas = drawerRight ? "side-drawer-right openn" : "side-drawer-right";
    return (
        <div className={drawerClas}>
            <SidebarContant />
        </div>
    );
};

export default RightSideDrawer;
