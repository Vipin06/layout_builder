import { useState } from "react";
import {Row, Col, Dropdown, Form, Container,} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillFilter } from "react-icons/ai";

function FilterDropOne() {

    const [inputFields, setInputFields] = useState([{
        fullName: '',
        condition: '',
        valueFilter: ''

    }]);
    const [dropdownData, setdropdownData] = useState([
        {
            companyName: "web 1 experts",
            valueFiled: 10,
            condition: "web 1"
        },
        {
            companyName: "web 1 experts 2",
            valueFiled: 20,
            condition: "web 2"
        },
        {
            companyName: "web 1 experts 3",
            valueFiled: 30,
            condition: "web 3"
        }

    ]);

    const addInputField = () => {

        setInputFields([...inputFields, {
            fullName: '',
            condition: '',
            valueFilter: ''
        }])

    }
    const removeInputFields = (index) => {
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    }
    const handleChange = (index, evnt) => {

        const { name, value } = evnt.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);
    }
    const icon = <AiFillFilter />

    return (

        <Container>
            <Row>
                <Col sm={12} className="mt-5 main-waper">
                    <h3>Add Filter</h3>
                    {
                        inputFields.map((data, index) => {
                            const { fullName, condition, valueFilter } = data;
                            return (
                                <Col sm={9} key={index} className="filter-data">
                                    <div className="sr-num mb-3 col-sm-12 col-lg-2">
                                        <p>
                                            {index == 0 ?
                                                `Sr.1` :
                                                `1.${index} Filter Join`
                                            }
                                            {
                                                index == 0 ? " " : <AiFillFilter />
                                            }
                                        </p>
                                    </div>
                                    <div className={`filder-add-field ${index == 0 ? null : "box-boder"}`}>
                                        <Form.Group className="mb-3 col-sm-12 col-lg-2 add-f">
                                            <Dropdown>
                                                <Form.Label>Filter Field Name</Form.Label>
                                                <Dropdown.Toggle variant="success" onChange={(evnt) => handleChange(index, evnt)} value={fullName} id="dropdown-basic">
                                                    --Select--
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {
                                                        dropdownData.map(job => <Dropdown.Item value={job.companyName}>{job.companyName}
                                                        </Dropdown.Item>)}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-sm-12 col-lg-2 add-f">
                                            <Dropdown>
                                                <Form.Label>Condition</Form.Label>
                                                <Dropdown.Toggle variant="success" onChange={(evnt) => handleChange(index, evnt)} value={condition} id="dropdown-basic">
                                                    --Select--
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {
                                                    dropdownData.map(job => <Dropdown.Item value={job.condition}>{job.condition}
                                                    </Dropdown.Item>)}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-sm-12 col-lg-2 add-f">
                                            <Dropdown>
                                                <Form.Label>Value</Form.Label>
                                                <Dropdown.Toggle variant="success" onChange={(evnt) => handleChange(index, evnt)} value={valueFilter} id="dropdown-basic">
                                                    --Select--
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {
                                                    dropdownData.map(job => <Dropdown.Item value={job.valueFiled}>{job.valueFiled}
                                                    </Dropdown.Item>)}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-sm-12 col-lg-3 add-f d-flex align-items-center">
                                            <button className="btn btn-outline-success btn-add" onClick={addInputField}>Add New</button>
                                            {(inputFields.length !== 1) ? <button className="btn btn-outline-danger remove-btn" onClick={removeInputFields}>Remove</button> : ''}
                                        </Form.Group>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>

    )
}
export default FilterDropOne