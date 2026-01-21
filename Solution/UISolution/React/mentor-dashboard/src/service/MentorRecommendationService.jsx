const BASE_URL="http://localhost:8000/api";

export const getMentorRecommendation=async()=>{
    try{
        const res=await fetch(`${BASE_URL}/mentorrecommendation`);
        return await res.json();
    }
    catch(error){
        console.error(error);
        return null;
    }
}