const BASE_URL="http://localhost:5066/api"
export const getAssessmentSummary =async()=>
{

    try
    {
        const res=await fetch(`${BASE_URL}/AssessmentSummary`);
        return await res.json();
    }
    catch(error)
    {
        console.error(error);
        return null;
    }
}
