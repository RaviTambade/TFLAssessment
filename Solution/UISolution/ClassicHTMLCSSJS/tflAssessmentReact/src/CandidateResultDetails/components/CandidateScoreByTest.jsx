import { useLocation } from "react-router-dom";
import { useState } from "react";
import CandidateDetailsService from "../services/CandidateDetailsService";
const GetCandidateResult=()=>{
const [testId, setTestId] = useState("");
const location=useLocation();
const {userId}=location.state ||{}
const [candidateId, setCandidateId] = useState(userId || "");
  
  const fetchResult=async()=>{
    try{
        console.log(candidateId,testId);
        const score=await CandidateDetailsService.getCandidateDetails(candidateId,testId);
        

        console.log(score);
    }
    catch(error){
        console.log(error.message)        
    }
  }
  return(
    <>
    <h1>Candidate Result</h1>
    <input type="text" placeholder="enter test id" value={testId} onChange={(e)=>setTestId(e.target.value)} ></input>
    <button onClick={fetchResult}>Show Result</button>
    </>
  )
}
export default GetCandidateResult;