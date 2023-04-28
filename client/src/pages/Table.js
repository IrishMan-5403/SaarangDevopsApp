import React from "react";
import "../styles/table.css"



function Table() {

    return(
        <div className="table-container">
            <table >
                <tr>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Roll No</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                    <td>Mexico</td>
                </tr>
            </table>
        </div>
    )
}


export default Table;

