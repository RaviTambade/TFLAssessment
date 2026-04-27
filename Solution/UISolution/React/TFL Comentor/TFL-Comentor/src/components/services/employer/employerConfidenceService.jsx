const BASE_URL="http://localhost:8080/dashboard"

export const  getEmployerConfidenceData=async()=>{
    try{
        const res = await fetch(`${BASE_URL}/employerconfidence`);
        return await res.json();
    }catch(error){
        console.error(error);
        return null;
}
}