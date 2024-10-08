import { useEffect, useState } from "react"
import CandidateListByTestIdService from "../services/CandidateListByTestIdService";

const CandidatesList = () => {
    const [candidates, setCandidates] = useState([]);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchCandidates = async () => {
            try{
                const data = await CandidateListByTestIdService.getCandidates(2);
                setCandidates(data);
            }catch(error){
                setError('failed to fetch employees')
            }
        }
       
        fetchCandidates();
    },[]);
    if (error) return <p>{error}</p>

    return(
        <>
        <h2>Candidates According to Test</h2>

        <ol>
            {candidates.map(candidate => (
                <li key={candidate.id}>{candidate.firstName} {candidate.lastName}</li>
            )
                
            )}
        </ol>
        </>
    )
}

export default CandidatesList;