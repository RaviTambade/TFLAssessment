const BASE_URL="http://localhost:8000/api";

export const getSkillHealthSnapshot=async()=>{
    try{
        const res=await fetch(`${BASE_URL}/skillhealthsnapshot`);
        return await res.json();
    }
    catch(error){
        console.error(error);
        return null;
    }
}