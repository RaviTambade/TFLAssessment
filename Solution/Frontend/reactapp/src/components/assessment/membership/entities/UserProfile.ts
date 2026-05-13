interface UserProfile {
  user_id: number;
  contact: string;
  status: string;

  first_name: string;
  last_name: string;
  gender: string;
  date_of_birth: string;
  email: string;

  enrollment_year: number | null;
  passing_year: number | null;
  percentage: number | null;
  college_name: string | null;

  skills: string | null;
}

export default UserProfile;