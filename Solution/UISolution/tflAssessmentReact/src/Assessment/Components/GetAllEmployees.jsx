import { useEffect, useState } from "react"
import AssessmentService from "../Service/AssessmentService";

const EmployeesList = () => {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchEmployees = async () => {
            try{
                const data = await AssessmentService.getAllEmployees();
                setEmployees(data);
            }catch(error){
                setError('failed to fetch employees')
            }
        }
        fetchEmployees();
    },[]);
    if (error) return <p>{error}</p>

    return(
        <>
        <h2>Employees</h2>

        <ol>
            {employees.map(employee => (
                <li key={employee.id}>{employee.firstName} {employee.lastName}</li>
            )
                
            )}
        </ol>
        </>
    )
}

export default EmployeesList;