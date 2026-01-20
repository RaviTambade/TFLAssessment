import React from "react";

const EmployerShortlist = () => {
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
                            <td>Ananya (82%)</td>
                            <td>Rohit (78%)</td>
                            <td>Sneha (Offer)</td>
                        </tr>
                        <tr>
                            <td>Kunal (75%)</td>
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