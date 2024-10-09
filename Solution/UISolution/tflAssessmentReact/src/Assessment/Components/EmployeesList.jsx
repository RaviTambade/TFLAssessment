import { useEffect, useState } from "react";
import AssessmentService from "../Service/AssessmentService";

const EmployeesList = () => {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await AssessmentService.getAllEmployees();
                setEmployees(data);
            } catch (error) {
                setError("Failed to fetch employees");
            }
        };
        fetchEmployees();
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <>
            <h2>Employees</h2>
            <table border="1" cellPadding="5" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default EmployeesList;
