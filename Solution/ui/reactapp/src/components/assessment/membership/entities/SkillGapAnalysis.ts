interface SkillGapAnalysis {
  skill: string;
  candidatesLacking: number;
  averagePerformance: number;
  priority: "high" | "medium" | "low";
}

export default SkillGapAnalysis;