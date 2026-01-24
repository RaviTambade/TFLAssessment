const BASE_URL="http://localhost:8080/dashboard"

export const getskillAnalyticsService=async()=>{
    try{
        const res=await fetch(`${BASE_URL}/skillanalytics`);
        return await res.json();
    }catch(error){
        console.error(error);
        return null;
    }
}