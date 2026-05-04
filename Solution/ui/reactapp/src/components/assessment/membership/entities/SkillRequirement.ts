
interface SkillRequirement {
  skill: string;
  requiredLevel: "beginner" | "intermediate" | "advanced";
  candidatesCovered: number;
  totalRequired: number;
  fillPercentage: number;
}

export default SkillRequirement;