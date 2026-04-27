import React,{useEffect,useState} from "react";

function EmployerShortlist() {

    const[name,preparation]=useState([null]);

    useEffect(() => {
        fetch("http://localhost:8080/dashboard/employershortlist")
          .then(response => response.json())
          .then(data => {
            preparation(data);
          })
          .catch(error => {
            console.error("Error fetching employer shortlist data:", error);
          });
    }, []);

    if(!name){
        return <div>Loading shortlisted candidates...</div>;
    }
    
    return (
        <div>
            
            <div className="container mt-5">
                <h2 className="text-center mb-4">Shortlisted Candidates</h2>
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Observing</th>
                            <th>Interview Ready</th>
                            <th>Offered</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name.Ananya}</td>
                            <td>{name.Rohit}</td>
                            <td>{name.Sneha}</td>
                        </tr>
                        <tr>
                            <td>{name.Karan}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
};

export default EmployerShortlist;