interface JobOpening {
  id: number;
  jobTitle: string;
  department: string;
  requiredSkills: string[];
  candidatesShortlisted: number;
  candidatesInterviewed: number;
  offersExtended: number;
  openPositions: number;
  status: "active" | "closed" | "onhold";
}

export default JobOpening;