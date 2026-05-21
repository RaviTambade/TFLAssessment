const BASE_URL="http://localhost:8000/api";

export const getMentorData=async()=>{
    try{
        const res=await fetch(`${BASE_URL}/mentordata`);
        return await res.json();
    }
    catch(error){
        console.error(error);
        return null;
    }
};