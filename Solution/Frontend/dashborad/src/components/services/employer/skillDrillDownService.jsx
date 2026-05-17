const BASE_URL="http://localhost:8080/dashboard"

export const getSkillDrillDownData = async () => {
    try {   
        const res = await fetch(`${BASE_URL}/drilldown`);
        return await res.json();
    }
    catch (error) {
        console.error(error);
        return null;
    }
}