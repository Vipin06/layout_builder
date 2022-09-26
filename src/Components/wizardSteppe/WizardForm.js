import React, { useState, useEffect } from "react";
import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";
import { BsGear } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
import { BsPlayCircle } from "react-icons/bs";
import { Row, Col, Form, Container, Button, FormGroup } from "react-bootstrap";
import { MDBSwitch } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from "react-redux";
import { handledarkMode } from "../../Redux/ThemeAction";

const ActionButtons = (props) => {
    const handleBack = () => {
        props.previousStep();
    };

    const handleNext = () => {
        props.nextStep();
    };

    const handleFinish = () => {
        props.lastStep();
    };

    return (
        <div>
            <Row>
                <Col className="continue-btn">
                    {props.currentStep < props.totalSteps && (
                        <Button onClick={handleNext}>Continue</Button>
                    )}
                    {props.currentStep === props.totalSteps && (
                        <Button onClick={handleFinish}>Finish</Button>
                    )}

                    {props.currentStep > 1 && (
                        <Button className="back-btn" onClick={handleBack}>Back</Button>
                    )}
                </Col>
            </Row>
        </div>
    );
};

const One = (props) => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.darkMode);
    const { isdarkMode } = mode;

    const switchDarkMode = () => {
        isdarkMode
            ? dispatch(handledarkMode(false))
            : dispatch(handledarkMode(true));
    };

    useEffect(() => {
        //changing color of body with darkmode in useEffect
        document.getElementById("tt").style.backgroundColor = isdarkMode ? "#292c35" : "#fff";
        document.getElementById("tt").style.color = isdarkMode ? "#fff" : "#292c35";
    }, [isdarkMode]);

    return (
        <div>

            <FormGroup className="logo-details">
                <div className="darkMode">
                    {
                        isdarkMode ?
                            <BsSun onClick={switchDarkMode} />
                            :
                            <BsMoonFill onClick={switchDarkMode} />
                    }
                </div>
                <p className="text-capitalize">I want a company logo</p>
                <div className="logo-button-radio">
                    <Form.Check type="radio"
                        aria-label="radio 1"
                        label="Left"
                        checked
                    />
                    <Form.Check type="radio"
                        aria-label="radio 1"
                        label="Right"
                    />
                    <Form.Check type="radio"
                        aria-label="radio 1"
                        label="Center"
                    />
                    <Form.Check type="radio"
                        aria-label="radio 1"
                        label="Disable"
                    />
                </div>
            </FormGroup>
            <FormGroup className="color-details">
                <p>Preset Color</p>
                <div className="logo-button-radio">
                    <Form.Check type="radio"
                        aria-label="radio 1"
                        label="Blue (#1976d2)"
                    />
                    <span className="red-radio">
                        <Form.Check type="radio"
                            aria-label="radio 1"
                            label="Red (#ff0000)"
                        />
                    </span>
                </div>
                <p className="mt-2 text-capitalize">Pareset Aply only : Header background, button, radio button & switch</p>
            </FormGroup>
            <FormGroup className="lable-switch">
                <MDBSwitch defaultChecked
                    id='flexSwitchCheckChecked'
                    label=' I want a header'
                />
                <MDBSwitch defaultChecked
                    id='flexSwitchCheckChecked'
                    label=' I want a Footer'
                />
                <MDBSwitch defaultChecked
                    id='flexSwitchCheckChecked'
                    label=' I want a Drwer Overlay mode (Requires header or footer)'
                />
                <MDBSwitch defaultChecked
                    id='flexSwitchCheckChecked'
                    label=' I want Left side Drawer'
                />
                <MDBSwitch defaultChecked
                    id='flexSwitchCheckChecked'
                    label=' I want RIght side Drawer'
                />
                <MDBSwitch defaultChecked
                    id='flexSwitchCheckChecked'
                    label=' I want Navigation tabs (require header)'
                />
                <MDBSwitch defaultChecked
                    id='flexSwitchCheckChecked'
                    label=' I want a button menu  (require footer)'
                />
            </FormGroup>
            <br />
            <ActionButtons {...props} />
        </div>
    );
};

const Two = (props) => {

    return (
        <div>
            <h1>This is step 2</h1>
            <FormGroup className="dummy-text">
                <label>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    <br />
                    <br />
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </label>
            </FormGroup>
            <ActionButtons {...props} />
        </div>
    );
};

const Three = (props) => {

    const handleLastStep = () => {
        props.lastStep();
        props.completeCallback();
    };

    return (
        <div>
            <h1>This is step 3</h1>
            <FormGroup className="dummy-text">
                <label>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    <br />
                    <br />
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </label>
            </FormGroup>
            <ActionButtons {...props} lastStep={handleLastStep} />
        </div>
    );
};

const WizardForm = () => {
    const [stepWizard, setStepWizard] = useState(null);
    const [user, setUser] = useState({});
    const [activeStep, setActiveStep] = useState(0);


    let noTransitions = {
        enterRight: '',
        enterLeft: '',
        exitRight: '',
        exitLeft: ''
    };

    const assignStepWizard = (instance) => {
        setStepWizard(instance);
    };

    const assignUser = (val) => {
        console.log("parent receive user callback");
        console.log(val);
        setUser((user) => ({
            ...user,
            ...val
        }));
    };

    const handleStepChange = (e) => {
        // console.log("step change");
        // console.log(e);
        setActiveStep(e.activeStep - 1);
    };

    const handleComplete = () => {
        alert("Submit Thank You");
    };

    return (
        <div className="wizard-form-layout-wrap" id="tt">
            <Stepper activeStep={activeStep}>
                <Step children={<BsPencilFill />} />
                <Step children={<BsGear />} />
                <Step children={<BsPlayCircle />} />
            </Stepper>
            {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
            <div className="wizard-main-wrap">
                <StepWizard transitions={noTransitions} instance={assignStepWizard} onStepChange={handleStepChange} className="step-form-wizard-wrap">
                    <One userCallback={assignUser} />
                    <Two user={user} userCallback={assignUser} />
                    <Three user={user} completeCallback={handleComplete} />
                </StepWizard>
            </div>
        </div>
    );
};

export default WizardForm;
