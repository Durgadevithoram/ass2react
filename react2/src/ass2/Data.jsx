import React from "react";

import "./styles.css"

const Data = (props) => {

    const {employees} = props;

    return (
        <div className="Data">
            {
                employees.length > 0 &&
                employees.map((employee) => {
                    return (
                        <div className="employee-box">
                            <h3>
                                Name : {employee.name} |
                                Department : {employee.department} |
                                Rating : {employee.rating}
                            </h3>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Data;