
interface MenteeGrowth {
  menteeName: string;
  skillName: string;
  improvementPercentage: number;
  currentLevel: "beginner" | "intermediate" | "advanced";
  recommendedFocus: string;
}
export default MenteeGrowth;