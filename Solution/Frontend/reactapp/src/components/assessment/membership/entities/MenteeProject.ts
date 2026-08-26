interface MenteeProject {
  id: number;
  mentee_name: string;
  projectId: number;
  allocated_project: string | null;
  repositoryUrl: string | null;
  contact: string;
  status: string;
  assigned_on: string;
}
export default MenteeProject;