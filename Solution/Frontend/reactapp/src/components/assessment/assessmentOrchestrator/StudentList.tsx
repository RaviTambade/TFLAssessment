import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  Users,
  Loader2,
  Eye,
  UserX,
  Inbox,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


// Types

type StudentStatus = "ACTIVE" | "INACTIVE" | "BLOCKED";

interface Student {
  id: number;
  fullName: string;
  contact: string;
  status: StudentStatus;
}


// ---------------------------------------------------------
// Status badge helper
// ---------------------------------------------------------
function StatusBadge({ status }: { status: StudentStatus }) {
  const styles: Record<StudentStatus, string> = {
    ACTIVE: "bg-green-100 text-green-700 hover:bg-green-100",
    INACTIVE: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
    BLOCKED: "bg-red-100 text-red-700 hover:bg-red-100",
  };

  return (
    <Badge className={`font-medium ${styles[status]}`} variant="secondary">
      {status}
    </Badge>
  );
}

// ---------------------------------------------------------
// StudentList Page
// ---------------------------------------------------------
export default function StudentList() {
  const navigate = useNavigate();

  const [students, setStudents] = useState<Student[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching data from an API
  useEffect(() => {

  const fetchStudents = async () => {

    try {

      const response = await fetch("http://localhost:5201/api/Students");

      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }

      const data = await response.json();

      setStudents(data);

    } catch (error) {

      console.error("Error:", error);

    } finally {

      setIsLoading(false);

    }

  };

  fetchStudents();

}, []);

  const filteredStudents = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return students;

    return students.filter(
      (student) =>
        student.fullName.toLowerCase().includes(query) ||
        student.contact.includes(query)
    );
  }, [students, searchTerm]);

  const maskContact = (contact: string) => {
    if (contact.length < 4) return contact;
    return `${contact.slice(0, 2)}xxxxxx${contact.slice(-2)}`;
  };

  const handleViewStudent = (id: number) => {
    navigate(`/students/${id}`);
  };

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Student Management
            </h1>
            <p className="text-sm text-muted-foreground">
              View and manage all candidates
            </p>
          </div>

          <Button
            variant="outline"
            className="gap-2"
            onClick={() => navigate("/models/membership/dashboard")}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>

        {/* Summary + Search row */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Total Students card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Students
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{students.length}</div>
              <p className="text-xs text-muted-foreground">
                Registered candidates
              </p>
            </CardContent>
          </Card>

          {/* Search card */}
          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Search Student
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by name or contact number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Table card */}
        <Card>
          <CardContent className="p-0">
            {isLoading ? (
              // Loading state
              <div className="flex flex-col items-center justify-center gap-3 py-16">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Loading students...
                </p>
              </div>
            ) : filteredStudents.length === 0 ? (
              // Empty state
              <div className="flex flex-col items-center justify-center gap-3 py-16">
                <Inbox className="h-10 w-10 text-muted-foreground" />
                <p className="text-sm font-medium">No students found</p>
                <p className="text-xs text-muted-foreground">
                  Try adjusting your search or check back later.
                </p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">ID</TableHead>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow
                      key={student.id}
                      className="transition-colors hover:bg-muted/50"
                    >
                      <TableCell className="font-medium text-muted-foreground">
                        {student.id}
                      </TableCell>
                      <TableCell className="font-medium">
                       {student.fullName}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {maskContact(student.contact)}
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={student.status} />
                      </TableCell>
                      <TableCell className="text-right">
                        {student.status === "BLOCKED" ? (
                          <Button
                            size="sm"
                            variant="ghost"
                            disabled
                            className="gap-2 text-muted-foreground"
                          >
                            <UserX className="h-4 w-4" />
                            Blocked
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="gap-2"
                            onClick={() => handleViewStudent(student.id)}
                          >
                            <Eye className="h-4 w-4" />
                            View
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
