const BASE_URL="http://localhost:5066/api"
export const getSkillHealthCard=async ()=>
{
    try
    {
        const res= await fetch(`${BASE_URL}/skillhealthcard`)
        return await res.json();
    }
    catch(error)
    {
        console.log(error)
        return null;
    }
}