import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const EmployerProfile = () => {
  const { id } = useParams();

  const [userId, setEmployerId] = useState<number | null>(null);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const currentEmployerId = id ? parseInt(id, 10) : 20;
    setEmployerId(currentEmployerId);
  }, [id]);

  useEffect(() => {
    if (userId === null) {
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`http://localhost:5000/api/employerprofile/${userId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        if (res.success && res.data) {
          setData(res.data);
        } else {
          setError("No data found");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(`Failed to fetch data: ${err.message}`);
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No Data Found
      </div>
    );
  }

  const user = data[0];
  const fullName = `${user.first_name || ""} ${user.last_name || ""}`.trim();

  const initials = fullName
    ? fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase()
    : "NA";

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <Navbar isLoggedIn />

      <div className="flex-1 pt-24 p-6 flex justify-center">
        <div className="w-full max-w-5xl space-y-8">

          {/* Profile Header */}
          <Card className="shadow-[var(--shadow-elegant)]">
            <CardContent className="p-8">
              <div className="flex justify-between items-center border-b pb-6">

                {/* Left */}
                <div className="flex items-center gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>

                  <div>
                    <h2 className="text-3xl font-bold">
                      {fullName || "No Name"}
                    </h2>

                    <Badge className="mt-2 bg-primary text-white">
                      Employer
                    </Badge>

                    <div className="flex gap-4 mt-3 text-primary">
                      <Linkedin size={20} />
                      <Github size={20} />
                      {user.email && (
                        <a href={`mailto:${user.email}`}>
                          <Mail size={20} />
                        </a>
                      )}
                      {(user.phone_number || user.phone) && (
                        <a href={`tel:${user.phone_number || user.phone}`}>
                          <Phone size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="text-right">
                  <p className="text-muted-foreground">
                    Years of Experience
                  </p>
                  <p className="text-primary text-lg font-semibold">
                    {user.experience_years ?? 0} years
                  </p>

                  <Button className="mt-4 bg-primary text-white hover:bg-accent">
                    Edit Profile
                  </Button>
                </div>
              </div>

              {/* Company & Job Title */}
              <div className="mt-6 space-y-2 text-lg">
                <p>
                  <span className="font-semibold">Company :</span>{" "}
                  <span className="text-primary">
                    {user.company_name || "N/A"}
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Job Title :</span>{" "}
                  <span className="text-primary">
                    {user.job_title || "N/A"}
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card className="shadow-[var(--shadow-elegant)]">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Professional Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <p>
                  <span className="font-semibold">Employment Type:</span>{" "}
                  <span className="text-primary">
                    {user.employment_type || "N/A"}
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  <span className="text-primary">
                    {user.location || "N/A"}
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Skills:</span>{" "}
                  <span className="text-primary">
                    {user.skills || "N/A"}
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Start Date:</span>{" "}
                  <span className="text-primary">
                    {user.start_date
                      ? new Date(user.start_date).toLocaleDateString()
                      : "N/A"}
                  </span>
                </p>
                <p>
                  <span className="font-semibold">End Date:</span>{" "}
                  <span className="text-primary">
                    {user.end_date
                      ? new Date(user.end_date).toLocaleDateString()
                      : "Present"}
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card className="shadow-[var(--shadow-elegant)]">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <span className="text-primary">
                    {user.email || "N/A"}
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Gender:</span>{" "}
                  <span className="text-primary">
                    {user.gender || "N/A"}
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Date of Birth:</span>{" "}
                  <span className="text-primary">
                    {user.date_of_birth
                      ? new Date(user.date_of_birth).toLocaleDateString()
                      : "N/A"}
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Address:</span>{" "}
                  <span className="text-primary">
                    {user.address || "N/A"}
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Pincode:</span>{" "}
                  <span className="text-primary">
                    {user.pincode || "N/A"}
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EmployerProfile;