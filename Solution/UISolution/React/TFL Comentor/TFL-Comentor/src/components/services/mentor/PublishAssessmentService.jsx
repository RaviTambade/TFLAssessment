const BASE_URL="http://localhost:8000/api";

export const getPublishAssessment=async()=>{
    try{
        const res=await fetch(`${BASE_URL}/publish-assessment`);
        return await res.json();
    }
    catch(error){
        console.error(error);
        return null;
    }
}