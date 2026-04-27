const BASE_URL="http://localhost:8000/api";

export const getTestData=async()=>{
    try{
        const res=await fetch(`${BASE_URL}/test-data`);
        return await res.json();
    }
    catch(error){
        console.error(error);
        return null;
    }
}