const BASE_URL="http://localhost:5066/api"
export const getConfidenceMeter =async()=>
{

    try
    {
        const res=await fetch(`${BASE_URL}/confidenceMeter`);
        return await res.json();
    }
    catch(error)
    {
        console.error(error);
        return null;
    }
}
