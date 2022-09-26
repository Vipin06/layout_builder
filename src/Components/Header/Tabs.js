import React from 'react';
import { Container, Tab, Tabs } from "react-bootstrap";
import WizardForm from "../wizardSteppe/WizardForm"

function HeaderTabs() {
    return (
        <Tabs
            defaultActiveKey="tabone"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="tabone" title="Tab One">
                <Container>
                    <WizardForm />
                </Container>
            </Tab>
            <Tab eventKey="tabtwo" title="Tab Two">
                <div className='second-tab'>
                    Two
                </div>
            </Tab>
            <Tab eventKey="tabthree" title="Tab three">
                <div className='three-tab'>
                Three
                </div>
            </Tab>
        </Tabs>
    );
}

export default HeaderTabs;