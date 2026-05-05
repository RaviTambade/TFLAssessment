interface SessionRow{
  id: string;
  name: string;
  login: string | null;
  logout: string | null;
  status: string;
};

export default SessionRow;