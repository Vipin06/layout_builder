import React, { useState } from "react";
function FilterField() {
    const [jobs, setJobs] = useState([
        {
            companyName: "web 2 experts",
            department: "web developer",
        },
        {
            companyName: "web 2 experts 2",
            department: "web developer 2",
        },
        {
            companyName: "web 2 experts 3",
            department: "web developer 3",
        }
    ]);
    const [searchName, setSearchName] = useState("");
    const [searchdepartment, setSearchdepartment] = useState("");

    return (

        <div className="container">
            <div className="main-wraper-filter">
                <div>
                    <div className="drop-down">
                        <label>Company Name </label>
                        <select onChange={(e) => {
                            setSearchName(e.target.value)
                        }} value={jobs.companyName}>
                            {
                                jobs.map(job => <option value={job.companyName}>{job.companyName}
                                </option>)
                            }
                        </select>
                    </div>
                    <table className="table table-bordered table-stripped">
                        <thead className="bg-info">
                            <th>Company Name</th>
                        </thead>
                        <tbody>
                            {
                                jobs.filter(value => {
                                    if (searchName === "") {
                                        return value;
                                    } else if (
                                        value.companyName.toLowerCase().includes(searchName.toLowerCase())
                                    ) {
                                        return value;
                                    }
                                }).map(
                                    job =>
                                    <tr>
                                        <td>{job.companyName}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="drop-down-de">
                        <label>Department </label>
                        <select onChange={(e) => {
                            setSearchdepartment(e.target.value)
                        }} value={jobs.department}>
                            {
                                jobs.map(job => <option value={job.department}>{job.department}
                                </option>)
                            }
                        </select>
                    </div>
                    <table className="table table-bordered table-stripped">
                        <thead className="bg-info">
                            <th>Department</th>
                        </thead>
                        <tbody>
                            {
                                jobs.filter(value => {
                                    if (searchdepartment === "") {
                                        return value;
                                    } else if (
                                        value.department.toLowerCase().includes(searchdepartment.toLowerCase())
                                    ) {
                                        return value;
                                    }
                                }).map(
                                    job =>
                                    <tr>
                                        <td>{job.department}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
export default FilterField;